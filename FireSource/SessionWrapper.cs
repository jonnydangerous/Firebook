using System.Collections.Generic;
using System.Net.Http;
using System.Web;
using FireSource.Models;

namespace FireSource
{
    public class SessionWrapper:ISessionWrapper
    {
        public List<Hero> Contacts {
            get { return HttpContext.Current.Session["Contacts"] as List<Hero>; }
            set { HttpContext.Current.Session["Contacts"] = value; }
        }
    }
}