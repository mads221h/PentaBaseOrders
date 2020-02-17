using Microsoft.EntityFrameworkCore.Migrations;

namespace PentaBaseOrderSystem.Data.Migrations
{
    public partial class RelationChanges : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Shipment_Ware_WareId",
                table: "Shipment");

            migrationBuilder.DropForeignKey(
                name: "FK_Ware_Supplier_SupplierId",
                table: "Ware");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Supplier",
                table: "Supplier");

            migrationBuilder.DropIndex(
                name: "IX_Shipment_WareId",
                table: "Shipment");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Project",
                table: "Project");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Department",
                table: "Department");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "Supplier");

            migrationBuilder.DropColumn(
                name: "WareId",
                table: "Shipment");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "Project");

            migrationBuilder.DropColumn(
                name: "Department",
                table: "Order");

            migrationBuilder.DropColumn(
                name: "Project",
                table: "Order");

            migrationBuilder.DropColumn(
                name: "Supplier",
                table: "Order");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "Department");

            migrationBuilder.AddColumn<string>(
                name: "SupplierName",
                table: "Ware",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "SupplierId",
                table: "Supplier",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddColumn<string>(
                name: "Info",
                table: "Shipment",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Shipment",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Price",
                table: "Shipment",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ProjectId",
                table: "Project",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddColumn<int>(
                name: "DepartmentId",
                table: "Order",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ProjectId",
                table: "Order",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "SupplierId",
                table: "Order",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "SupplierName",
                table: "Order",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "DepartmentId",
                table: "Department",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Supplier",
                table: "Supplier",
                column: "SupplierId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Project",
                table: "Project",
                column: "ProjectId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Department",
                table: "Department",
                column: "DepartmentId");

            migrationBuilder.CreateIndex(
                name: "IX_Order_DepartmentId",
                table: "Order",
                column: "DepartmentId");

            migrationBuilder.CreateIndex(
                name: "IX_Order_ProjectId",
                table: "Order",
                column: "ProjectId");

            migrationBuilder.CreateIndex(
                name: "IX_Order_SupplierId",
                table: "Order",
                column: "SupplierId");

            migrationBuilder.AddForeignKey(
                name: "FK_Order_Department_DepartmentId",
                table: "Order",
                column: "DepartmentId",
                principalTable: "Department",
                principalColumn: "DepartmentId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Order_Project_ProjectId",
                table: "Order",
                column: "ProjectId",
                principalTable: "Project",
                principalColumn: "ProjectId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Order_Supplier_SupplierId",
                table: "Order",
                column: "SupplierId",
                principalTable: "Supplier",
                principalColumn: "SupplierId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Ware_Supplier_SupplierId",
                table: "Ware",
                column: "SupplierId",
                principalTable: "Supplier",
                principalColumn: "SupplierId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Order_Department_DepartmentId",
                table: "Order");

            migrationBuilder.DropForeignKey(
                name: "FK_Order_Project_ProjectId",
                table: "Order");

            migrationBuilder.DropForeignKey(
                name: "FK_Order_Supplier_SupplierId",
                table: "Order");

            migrationBuilder.DropForeignKey(
                name: "FK_Ware_Supplier_SupplierId",
                table: "Ware");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Supplier",
                table: "Supplier");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Project",
                table: "Project");

            migrationBuilder.DropIndex(
                name: "IX_Order_DepartmentId",
                table: "Order");

            migrationBuilder.DropIndex(
                name: "IX_Order_ProjectId",
                table: "Order");

            migrationBuilder.DropIndex(
                name: "IX_Order_SupplierId",
                table: "Order");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Department",
                table: "Department");

            migrationBuilder.DropColumn(
                name: "SupplierName",
                table: "Ware");

            migrationBuilder.DropColumn(
                name: "SupplierId",
                table: "Supplier");

            migrationBuilder.DropColumn(
                name: "Info",
                table: "Shipment");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "Shipment");

            migrationBuilder.DropColumn(
                name: "Price",
                table: "Shipment");

            migrationBuilder.DropColumn(
                name: "ProjectId",
                table: "Project");

            migrationBuilder.DropColumn(
                name: "DepartmentId",
                table: "Order");

            migrationBuilder.DropColumn(
                name: "ProjectId",
                table: "Order");

            migrationBuilder.DropColumn(
                name: "SupplierId",
                table: "Order");

            migrationBuilder.DropColumn(
                name: "SupplierName",
                table: "Order");

            migrationBuilder.DropColumn(
                name: "DepartmentId",
                table: "Department");

            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "Supplier",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddColumn<int>(
                name: "WareId",
                table: "Shipment",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "Project",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddColumn<string>(
                name: "Department",
                table: "Order",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Project",
                table: "Order",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Supplier",
                table: "Order",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "Department",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Supplier",
                table: "Supplier",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Project",
                table: "Project",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Department",
                table: "Department",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_Shipment_WareId",
                table: "Shipment",
                column: "WareId");

            migrationBuilder.AddForeignKey(
                name: "FK_Shipment_Ware_WareId",
                table: "Shipment",
                column: "WareId",
                principalTable: "Ware",
                principalColumn: "WareId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Ware_Supplier_SupplierId",
                table: "Ware",
                column: "SupplierId",
                principalTable: "Supplier",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
