using System.Collections.Generic;
using System.Linq;
using FireBook.Controllers;
using FireSource;
using FireSource.Models;
using NUnit.Framework;
using Rhino.Mocks;

namespace UnitTests.backend
{
    [TestFixture]
    public class PhoneBookControllerTests
    {
        private IContactRepository _repos;

        [SetUp]
        public void SetUp()
        {
            _repos = MockRepository.GenerateMock<IContactRepository>();
        }
        /// <summary>
        /// Testing api/phonebook
        /// </summary>
        [Test(Description="Verifies the ComicService.Init was called and returns list of contacts.")]
        public void Get_ReturnsInitializedHeros()
        {
            var expected = new List<Hero> {new Hero {Name="Captain"} };
            _repos.Stub(r => r.GetHeroes()).Return(expected);
            var actual = new PhoneBookController(_repos).Get();

            _repos.AssertWasCalled(r=>r.InitData());
            Assert.AreEqual(actual.Count(),1);
            Assert.AreEqual(actual.First().Name,"Captain");
        }

        [Test]
        public void Get_CallsRepositoryPassesId()
        {
            var hero = new Hero {Name = "Captain",Id=1};
            
            _repos.Stub(r => r.GetHero(Arg<int>.Is.Equal(1))).Return(hero);
            var actual = new PhoneBookController(_repos).Get(hero.Id);
            Assert.AreEqual(hero,actual);
        }

        [Test]
        public void Post_CallsRepositoryPassesHero()
        {
            var hero = new Hero {Name = "Captain"};
            new PhoneBookController(_repos).Post(hero);
            _repos.AssertWasCalled(r=>r.SaveHero(Arg<Hero>.Matches(a=>a.Name.Equals("Captain"))));
        }

        [Test]
        public void Delete_CallsRepositoryPassesHeroId()
        {
            var hero = new Hero {Name = "Captain", Id=1};
            new PhoneBookController(_repos).Delete(hero.Id);
            _repos.AssertWasCalled(r=>r.DeleteHero(Arg<int>.Is.Equal(1)));
        }
    }
}
