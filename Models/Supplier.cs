using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Models
{
    public class Supplier
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Location { get; set; }
        [Required]
        public string LastBoughtFrom { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public bool Approval { get; set; }
        public List<Ware> Wares { get; set; }
    }
}

