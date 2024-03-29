using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Models;
using PentaBaseOrderSystem.Data;
using PentaBaseOrderSystem.Models;
using static IdentityServer4.IdentityServerConstants;

namespace PentaBaseOrderDemo.Controllers
{
   
    
    [Route("api/[controller]")]
    [Authorize]
    //[Authorize(LocalApi.PolicyName)]
    [Authorize(Policy = "RequireAdministratorRole")]
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
        [HttpGet("[action]/{id}")]
        public Order GetOrder(int id)
        {
            var shipments = _db.Shipment.Where(i => i.OrderId == id).ToList();
            var order = _db.Order.FirstOrDefault(i => i.OrderId == id);
            order.Shipments = shipments;


            return order;
        }
        [HttpGet("[action]")]
        public IEnumerable<Ware> GetWareList()
        {

            return _db.Ware.ToList();
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
        public void CreateWare([FromBody] Ware data)
        {
            
            var Ware = new Ware
            {
                Name = data.Name,
                SupplierId = data.SupplierId,
                Price = data.Price,
                Info = data.Info,
            };

            _db.Ware.Add(Ware);
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
        public Order CreateOrder([FromBody] Order data)
        {
            
            int totalPrice = 0;
            bool _priceBool = false;
            foreach (Shipment I in data.Shipments)
            {
                
                //var ware = _db.Ware.FirstOrDefault(x => x.WareId == I.WareId);
                totalPrice = totalPrice + (I.Price * I.Count);

                
            }
            if (totalPrice <= 10000)
            {
                _priceBool = true;
            };
            
            var supplier = _db.Supplier.FirstOrDefault(x => x.SupplierId == data.Supplier.SupplierId);
            var order = new Order
            {
                Title = data.Title,
                //gotta implement utc 
                Date = DateTime.Now.ToString(),
                SupplierId = data.Supplier.SupplierId,
                SupplierName = data.Supplier.Name,
                Project = data.Project,
                Department = data.Department,
                Description = "Description rkgmrk r,gpw viuje eobin wueji, ok,wem ue wej iemgke ,lrve efke",
                Price = totalPrice,
                
                Approval = _priceBool,
                Payment = false,
                Shipments = data.Shipments,
            };
            
            supplier.LastBoughtFrom = DateTime.Now.ToString("yyyy-MM-dd");

            _db.Supplier.Update(supplier);
            _db.Order.Add(order);
            _db.SaveChanges();

            return order;
            //var response = await _client.PostAsJsonAsync(BaseEndPoint, data);
            //response.EnsureSuccessStatusCode();
        }

        [HttpPut("[action]")]
        public Order Approval([FromBody] Order data)
        {

            var user = data;
            if (user.ApprovedBy != null)
            {
                var order = _db.Order.FirstOrDefault(x => x.OrderId == data.OrderId);
                order.ApprovedBy = user.ApprovedBy;
                order.Approval = true;
                _db.Order.Update(order);
                _db.SaveChanges();
            }
            else { }
            return user;
            //var response = await _client.PostAsJsonAsync(BaseEndPoint, data);
            //response.EnsureSuccessStatusCode();
        }
        [HttpPut("[action]")]
        public void ApproveSupplier([FromBody] Supplier data)
        {

            
            if (data.ApprovedBy != null)
            {
                var supplier = _db.Supplier.FirstOrDefault(x => x.SupplierId == data.SupplierId);
                supplier.ApprovedBy = data.ApprovedBy;
                supplier.Approval = true;
                _db.Supplier.Update(supplier);
                _db.SaveChanges();
            }
            else { }
            
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
        [HttpPut("[action]")]
        public void OrderUpdate([FromBody] Order data)
        {
            var order = _db.Order.FirstOrDefault(x => x.OrderId == data.OrderId);
            order = data;
            _db.Order.Update(order);
            _db.SaveChanges();

        }
        [HttpPut("[action]")]
        public void ProjectUpdate([FromBody] Project data)
        {
            var project = _db.Project.FirstOrDefault(x => x.ProjectId == data.ProjectId);
            project = data;
            _db.Project.Update(project);
            _db.SaveChanges();

        }
        [HttpPut("[action]")]
        public void DepartmentUpdate([FromBody] Department data)
        {
            var department = _db.Department.FirstOrDefault(x => x.DepartmentId == data.DepartmentId);
            department = data;
            _db.Department.Update(department);
            _db.SaveChanges();

        }
        [HttpPut("[action]")]
        public void WareUpdate([FromBody] Ware data)
        {
            var ware = _db.Ware.FirstOrDefault(x => x.WareId == data.WareId);
            ware = data;
            _db.Ware.Update(ware);
            _db.SaveChanges();

        }

        [HttpDelete("[action]")]
        public void DeleteProject([FromBody] Project data)
        {
            if (data is null)
            {
                
            }
            else{
                _db.Remove(_db.Project.Single(x => x.ProjectId == data.ProjectId));
                _db.SaveChanges();
            }
            
        }
        [HttpDelete("[action]")]
        public void DeleteDepartment([FromBody] Department data)
        {
            if (data is null)
            {

            }
            else
            {
                _db.Remove(_db.Department.Single(x => x.DepartmentId == data.DepartmentId));
                _db.SaveChanges();
            }

        }
        [HttpDelete("[action]")]
        public void DeleteOrder([FromBody] Order data)
        {
            if (data is null)
            {

            }
            else
            {
                _db.Remove(_db.Order.Single(x => x.OrderId == data.OrderId));
                _db.SaveChanges();
            }

        }
        [HttpDelete("[action]")]
        public void DeleteSupplier([FromBody] Supplier data)
        {
            if (data is null)
            {

            }
            else
            {
                _db.Remove(_db.Supplier.Single(x => x.SupplierId == data.SupplierId));
                _db.SaveChanges();
            }

        }
        [HttpDelete("[action]")]
        public void DeleteWare([FromBody] Ware data)
        {
            if (data is null)
            {

            }
            else
            {
                _db.Remove(_db.Ware.Single(x => x.WareId == data.WareId));
                _db.SaveChanges();
            }

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
