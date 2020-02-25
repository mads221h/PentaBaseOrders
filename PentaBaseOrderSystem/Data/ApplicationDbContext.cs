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
        public DbSet<Ware> Ware { get; set; }
        public DbSet<Shipment> Shipment { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Shipment>()
                .HasOne(p => p.Order)
                .WithMany(b => b.Shipments)
                .HasForeignKey(p => p.OrderId);

            modelBuilder.Entity<Ware>()
                .HasOne(p => p.Supplier)
                .WithMany(b => b.Wares)
                .HasForeignKey(p => p.SupplierId);

             modelBuilder.Entity<Order>()
                .HasOne(p => p.Supplier)
                .WithMany(b => b.Orders)
                .HasForeignKey(p => p.SupplierId);

            // modelBuilder.Entity<Order>()
            //    .HasOne(p => p.Project)
            //    .WithMany(b => b.Orders)
            //    .HasForeignKey(p => p.ProjectId);

            //modelBuilder.Entity<Order>()
            //   .HasOne(p => p.Department)
            //   .WithMany(b => b.Orders)
            //   .HasForeignKey(p => p.DepartmentId);
        }
    }
}
