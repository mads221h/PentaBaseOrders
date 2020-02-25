using Microsoft.EntityFrameworkCore.Migrations;

namespace PentaBaseOrderSystem.Data.Migrations
{
    public partial class shipmentWareId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "WareId",
                table: "Shipment",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "WareId",
                table: "Shipment");
        }
    }
}
