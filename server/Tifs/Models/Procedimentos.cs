using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Tifs.Models
{
    public class Procedimentos
    {
       [Key]
        public int IdProcedimento { get; set; }

        public DateTime Data { get; set; }

        public string Nome { get; set; }

        public string Descricao { get; set; }

        //public int IdCabeleireiro { get; set; }

        //public virtual Cabeleireiro Cabeleireiro { get; set; }
    }
}