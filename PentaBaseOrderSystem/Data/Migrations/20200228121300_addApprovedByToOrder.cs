using Microsoft.EntityFrameworkCore.Migrations;

namespace PentaBaseOrderSystem.Data.Migrations
{
    public partial class addApprovedByToOrder : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ApprovedBy",
                table: "Order",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ApprovedBy",
                table: "Order");
        }
    }
}
