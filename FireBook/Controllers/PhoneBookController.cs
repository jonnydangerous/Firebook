using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Controllers;
using FireSource;
using FireSource.Models;

namespace FireBook.Controllers
{
    public class PhoneBookController : ApiController
    {
        private readonly IContactRepository _repository;

        public PhoneBookController(IContactRepository repository)
        {
            _repository = repository;
            _repository.InitData();
        }

        public IEnumerable<Hero> Get()
        {            
            return _repository.GetHeroes();
        }

        // GET api/<controller>/5
        public Hero Get(int id)
        {
            return _repository.GetHero(id);
        }

        // POST api/<controller>
        public void Post(Hero hero)
        {
            _repository.SaveHero(hero);
        }
        
        // DELETE api/<controller>/5
        public void Delete(int id)
        {
            _repository.DeleteHero(id);
        }
    }
}