using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Models
{
    public class Department
    {
        [Key]
        public int DepartmentId { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Leader { get; set; }
        [Required]
        public string Location { get; set; }
    }
}

