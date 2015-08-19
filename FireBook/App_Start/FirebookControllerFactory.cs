using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Controllers;
using System.Web.Http.Dependencies;
using System.Web.Http.Dispatcher;
using System.Web.Mvc;
using System.Web.Routing;
using System.Web.SessionState;
using StructureMap;

namespace FireBook
{
//    public interface IDependencyResolver : IDependencyScope, IDisposable
//    {
//        IDependencyScope BeginScope();
//    }
//
//    public interface IDependencyScope : IDisposable
//    {
//        object GetService(Type serviceType);
//        IEnumerable<object> GetServices(Type serviceType);
//    }

    public class FirebookControllerFactory : IHttpControllerActivator
    {
        public FirebookControllerFactory(HttpConfiguration configuration) { }

        public IHttpController Create(HttpRequestMessage request
            , HttpControllerDescriptor controllerDescriptor, Type controllerType)
        {
            var controller = ObjectFactory.GetInstance(controllerType) as IHttpController;
            return controller;
        }
    }
}
