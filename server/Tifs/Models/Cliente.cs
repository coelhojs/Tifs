using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Tifs.Models
{
    public class Cliente
    {
        [Key]
        [Display(Name = "Id")]
        public int IdCiente { get; set; }

        [Display(Name = "Nome")]
        [MaxLength(200, ErrorMessage = "Este campo recebe no máximo 200 caracteres!")]
        [Required(ErrorMessage = "Este campo é obrigatorio!")]
        public string Nome { get; set; }

        [Display(Name = "CPF")]
        [MaxLength(14, ErrorMessage = "Este campo recebe no máximo 14 caracteres!")]
        [Index("CPF_Cliente_Index", IsUnique = true)]
        [Required(ErrorMessage = "Este campo é obrigatorio!")]
        public string CPF { get; set; }

        [Display(Name = "Autoriza Fotos")]
        public bool AutorizaFotos { get; set; }

        [Display(Name = "CPF")]
        public int MyProperty { get; set; }

        [Display(Name = "Data de Nascimento")]
        [Required(ErrorMessage = "Este campo é obrigatorio!")]
        [DataType(DataType.DateTime)]
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}", ApplyFormatInEditMode = true)]
        public DateTime DataNascimento { get; set; }

        [Display(Name = "Telefone")]
        [Required(ErrorMessage = "Este campo é obrigatorio!")]
        public string Telefone { get; set; }

        [Display(Name = "E-mail")]
        [MaxLength(200, ErrorMessage = "Este campo recebe no máximo 200 caracteres!")]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        [Display(Name = "Alergias")]
        [DataType(DataType.MultilineText)]
        public string Alergias { get; set; }

        [Display(Name = "Gestante")]
        public bool Gestante { get; set; }
    }
}