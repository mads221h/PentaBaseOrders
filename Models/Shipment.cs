using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Models
{
    public class Shipment
    {
        [Key]
        public int ShipmentId { get; set; }
        public int OrderId { get; set; }
        public int WareId { get; set; }
        public int Count { get; set; }
        public Ware Ware { get; set; }
        public Order Order { get; set; }
    }
}
