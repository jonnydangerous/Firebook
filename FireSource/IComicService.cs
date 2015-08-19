using System.Collections.Generic;
using FireSource.Models;

namespace FireSource
{
    public interface IComicService
    {
        IEnumerable<Hero> GetHeroes(string letter);
    }
}