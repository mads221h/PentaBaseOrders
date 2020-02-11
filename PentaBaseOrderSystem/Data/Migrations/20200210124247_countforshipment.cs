using Microsoft.EntityFrameworkCore.Migrations;

namespace PentaBaseOrderSystem.Data.Migrations
{
    public partial class countforshipment : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Count",
                table: "Shipment",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Count",
                table: "Shipment");
        }
    }
}
