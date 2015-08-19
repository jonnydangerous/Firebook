using FireSource;
using StructureMap.Configuration.DSL;

namespace FireBook
{
    public class IoCRegistry:Registry
    {

        public IoCRegistry()
        {
            For<IContactRepository>().Use<ContactRepository>();
            For<ISessionWrapper>().Use<SessionWrapper>();
            For<IComicService>().Use<ComicService>();
        }
    }
}