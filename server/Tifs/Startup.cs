using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Tifs.Startup))]
namespace Tifs
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
