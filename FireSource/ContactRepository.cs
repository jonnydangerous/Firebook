using System.Collections.Generic;
using System.Linq;
using FireSource.Models;

namespace FireSource
{
    public class ContactRepository :IContactRepository
    {
        private readonly ISessionWrapper _session;
        private readonly IComicService _comicService;

        public ContactRepository(ISessionWrapper session, IComicService comicService)
        {
            _session = session;
            _comicService = comicService;
        }

        public void InitData()
        {
            var contacts = new List<Hero>();
            contacts.AddRange(_comicService.GetHeroes("a"));
            contacts.AddRange(_comicService.GetHeroes("b"));
            contacts.AddRange(_comicService.GetHeroes("c"));
            contacts.AddRange(_comicService.GetHeroes("d"));
            _session.Contacts = contacts;
        }

        public IEnumerable<Hero> GetHeroes()
        {
            return _session.Contacts;
        }

        public Hero GetHero(int id)
        {
            return _session.Contacts.FirstOrDefault(contact => contact.Id.Equals(id));
        }

        public void DeleteHero(int id)
        {
            var contact = GetHero(id);
            _session.Contacts.Remove(contact);
        }

        public void SaveHero(Hero hero)
        {
            _session.Contacts.Add(hero);
        }
    }
}