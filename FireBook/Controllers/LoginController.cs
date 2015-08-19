using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using FireSource.Models;

namespace FireBook.Controllers
{
    public class LoginController : ApiController
    {
        public IHttpActionResult Authenticate(UserModel user)
        {
            return Ok(user);
        }
    }
}
