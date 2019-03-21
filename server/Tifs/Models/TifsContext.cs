using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Tifs.Models
{
    public class TifsContext : DbContext
    {
        public TifsContext() : base("DefaultConnection")
        {

        }

        public System.Data.Entity.DbSet<Tifs.Models.Cliente> Clientes { get; set; }
    }
}