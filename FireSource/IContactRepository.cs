using System.Collections.Generic;
using FireSource.Models;

namespace FireSource
{
    public interface IContactRepository
    {
        void InitData();
        IEnumerable<Hero> GetHeroes();
        Hero GetHero(int id);
        void DeleteHero(int id);
        void SaveHero(Hero hero);
    }
}