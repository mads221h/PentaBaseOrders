using System;
using System.ComponentModel.DataAnnotations;

namespace Models
{
    public class Order
    {
        [Key]
        public int OrderId { get; set; }
        [Required]
        public string Date { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Supplier { get; set; }
        [Required]
        public string Project { get; set; }
        [Required]
        public string Department { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public int Price { get; set; }
        [Required]
        public bool Approval { get; set; }
        [Required]
        public bool Payment { get; set; }

    }
}
