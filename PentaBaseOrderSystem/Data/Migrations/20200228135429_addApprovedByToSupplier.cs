using Microsoft.EntityFrameworkCore.Migrations;

namespace PentaBaseOrderSystem.Data.Migrations
{
    public partial class addApprovedByToSupplier : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ApprovedBy",
                table: "Supplier",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ApprovedBy",
                table: "Supplier");
        }
    }
}
