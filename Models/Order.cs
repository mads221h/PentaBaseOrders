using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Models
{
    public class Order
    {
        [Key]
        public int OrderId { get; set; }
        public int SupplierId { get; set; }
        //public int ProjectId { get; set; }
        //public int DepartmentId { get; set; }
        [Required]
        public string SupplierName { get; set; }
        [Required]
        public string Date { get; set; }
        [Required]
        public string Title { get; set; }

        [Required]
        public string Description { get; set; }
        [Required]
        public int Price { get; set; }
        [Required]
        public bool Approval { get; set; }
        public string ApprovedBy { get; set; }
        [Required]
        public bool Payment { get; set; }
        [Required]
        public List<Shipment> Shipments { get; set; }
        [Required]
        public Supplier Supplier { get; set; }
        public string Project { get; set; }
        public string Department { get; set; }
    }
}
