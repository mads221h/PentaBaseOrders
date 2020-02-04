using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Models;
using PentaBaseOrderSystem.Data;

namespace PentaBaseOrderDemo.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : ControllerBase
    {
        //private readonly HttpClient _client;

        //public Uri BaseEndPoint { get; set; }
        private readonly ApplicationDbContext _db;
        
        public SampleDataController(ApplicationDbContext db)
        {
            _db = db;
            //BaseEndPoint = new Uri("https://localhost:53838/api/values");
            //_client = new HttpClient();
        }
        
        private static string[] Leverandoere = new[]
        {
            "Leverandør1", "Leverandør2", "Leverandør3", "Leverandør4", "Leverandør5", "Leverandør6", "Leverandør7", "Leverandør8", "Leverandør9", "Leverandør10"
        };

        
        [HttpGet("[action]")]
        public IEnumerable<PentaShoppingorder> PentaIndkoebsliste()
        {
            var rng = new Random();
            return Enumerable.Range(1, 50).Select(index => new PentaShoppingorder
            {

                OrderId = index.ToString(),
                Date = DateTime.Now.AddDays(index).ToString("d"),
                Varetitle = "Blandet vare",
                Pris = rng.Next(500, 12000),
                Leverandoer = Leverandoere[rng.Next(Leverandoere.Length)],
                Godkendelse = false,

            });
        }
        [HttpGet("[action]")]
        public IEnumerable<Order> GetOrderList()
        {

            return _db.Order.ToList();
        }
        [HttpGet("[action]")]
        public IEnumerable<Department> GetDepartmentList()
        {

            return _db.Department.ToList();
        }
        [HttpGet("[action]")]
        public IEnumerable<Project> GetProjectList()
        {

            return _db.Project.ToList();
        }
        [HttpGet("[action]")]
        public IEnumerable<Template> GetTemplateList()
        {

            return _db.Template.ToList();
        }
        
        [HttpGet("[action]")]
        public IEnumerable<Supplier> GetSupplierList()
        {

            return _db.Supplier.ToList();
        }
        [HttpGet("[action]/{id}")]
        public PentaShoppingorder GetOrderTemplate(int id)
        {

            if (id > 0)
            {
                var template = new PentaShoppingorder
                {

                    OrderId = id.ToString(),
                    Date = DateTime.Now.ToString("d"),
                    Varetitle = "Template title",
                    Pris = 5000,
                    Leverandoer = Leverandoere[1],
                    Godkendelse = true,
                };
                return template;
            }
            return new PentaShoppingorder();

        }
        [HttpGet("[action]/{id}")]
        public Template GetTemplate(int id)
        {

            if (id > 0)
            {
                var _template = _db.Template.FirstOrDefault(x => x.Id == id);
                var template = new Template
                {
                    Id = _template.Id,
                    Title = _template.Title,
                    Price = _template.Price,
                    Supplier = _template.Supplier,
                    Description = _template.Description,
                };
                return template;
            }
            return new Template();

        }
        //[HttpGet("[action]")]
        //public IEnumerable<oldSupplier> SupplierList()
        //{

        //    var suppliers = new List<oldSupplier>();
        //    var rng = new Random();
        //    foreach (var _supplier in Leverandoere)
        //    {
        //        var supplier = new oldSupplier
        //        {
        //            Name = _supplier,
        //            LastBoughtFrom = DateTime.Now.AddDays(rng.Next(10,100)).ToString()
        //        };
        //        suppliers.Add(supplier);
        //    }
        //        return suppliers;
        //}
        [HttpPost("[action]")]
        public void CreateTemplate([FromBody] Template data)
        {
            
            var template = new Template
            {
                Title = data.Title,
                Supplier = data.Supplier,
                Description = "Description rkgmrk r,gpw viuje eobin wueji, ok,wem ue wej iemgke ,lrve efke",
                Price = data.Price,
            };

            _db.Template.Add(template);
            _db.SaveChanges();

        }
        [HttpPost("[action]")]
        public void CreateDepartment([FromBody] Department data)
        {

            var department = new Department
            {
                Title = data.Title,
                Leader = data.Leader,
                Location = data.Location,
            };

            _db.Department.Add(department);
            _db.SaveChanges();

        }
        [HttpPost("[action]")]
        public void CreateProject([FromBody] Project data)
        {

            var Project = new Project
            {
                Title = data.Title,
                Owner = data.Owner,
                Location = "PentaBase",
                
            };

            _db.Project.Add(Project);
            _db.SaveChanges();

        }
        [HttpPost("[action]")]
        public void CreateSupplier([FromBody] Supplier data)
        {

            var Supplier = new Supplier
            {
                Name = data.Name,
                Location = data.Location,
                Email = data.Email,
                Description = data.Description,
                LastBoughtFrom = DateTime.Now.ToString(),
                Approval = false,

            };

            _db.Supplier.Add(Supplier);
            _db.SaveChanges();

        }

        [HttpPost("[action]")]
        public void CreateOrder([FromBody] Order data)
        {
            bool _priceBool = false;
            if(data.Price <= 10000)
            {
                _priceBool = true;
            };
            var order = new Order
            {
                Title = data.Title,
                Date = DateTime.Now.ToString("yyyy-MM-dd"),
                Supplier = data.Supplier,
                Projekt = data.Projekt,
                Department = data.Department,
                Description = "Description rkgmrk r,gpw viuje eobin wueji, ok,wem ue wej iemgke ,lrve efke",
                Price = data.Price,
                Approval = _priceBool,
                Payment = false,
            };
          
            _db.Order.Add(order);
            _db.SaveChanges();


            //var response = await _client.PostAsJsonAsync(BaseEndPoint, data);
            //response.EnsureSuccessStatusCode();
        }

        [HttpPut("[action]")]
        public void Approval([FromBody] Order data)
        {
            var order = _db.Order.FirstOrDefault(x => x.OrderId == data.OrderId);
            order.Approval = true;
            _db.Order.Update(order);
            _db.SaveChanges();


            //var response = await _client.PostAsJsonAsync(BaseEndPoint, data);
            //response.EnsureSuccessStatusCode();
        }
        [HttpPut("[action]")]
        public void Payment([FromBody] Order data)
        {
            var order = _db.Order.FirstOrDefault(x => x.OrderId == data.OrderId);
            order.Payment = true;
            _db.Order.Update(order);
            _db.SaveChanges();


            //var response = await _client.PostAsJsonAsync(BaseEndPoint, data);
            //response.EnsureSuccessStatusCode();
        }

        [HttpDelete("[action]")]
        public void Delete([FromBody] Project data)
        {
            if (data is null)
            {

            }
            else{
                _db.Remove(_db.Project.Single(x => x.Id == data.Id));
                _db.SaveChanges();
            }
            
        }
        public class PentaShoppingorder
        {
            public string OrderId { get; set; }
            public string Date { get; set; }
            public string Varetitle { get; set; }
            public string Leverandoer { get; set; }
            public int Pris { get; set; }
            public bool Godkendelse { get; set; }
        }
        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }
    }
}
