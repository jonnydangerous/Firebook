using System.Collections.Generic;
using FireSource.Models;

namespace FireSource
{
    public interface ISessionWrapper
    {
        List<Hero> Contacts { get; set; }
    }
}