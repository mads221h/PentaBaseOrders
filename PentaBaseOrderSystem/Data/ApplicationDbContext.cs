using PentaBaseOrderSystem.Models;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Models;

namespace PentaBaseOrderSystem.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }
        public DbSet<Order> Order { get; set; }
        public DbSet<Project> Project { get; set; }
        public DbSet<Supplier> Supplier { get; set; }
        public DbSet<Template> Template { get; set; }
        public DbSet<Department> Department { get; set; }
    }
}
