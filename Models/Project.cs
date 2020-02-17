using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Models
{
    public class Project
    {
        [Key]
        public int ProjectId { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Owner { get; set; }
        [Required]
        public string Location { get; set; }

        public List<Order> Orders { get; set; }
    }
}
