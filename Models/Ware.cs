using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Models
{
    public class Ware
    {
        [Key]
        public int WareId { get; set; }
        public int SupplierId { get; set; }
        public int Price { get; set; }
        public string Name { get; set; }
        public string Info { get; set; }
        public List<Shipment> Shipments { get; set; }
        public Supplier Supplier { get; set; }
    }
}
