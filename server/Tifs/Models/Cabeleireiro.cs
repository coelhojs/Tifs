using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Tifs.Models
{
    public class Cabeleireiro
    {
        [Key]
        public int IdCabeleireiro { get; set; }

        public string Nome { get; set; }

        public string CNPJ { get; set; }

        public int MyProperty { get; set; }
    }
}