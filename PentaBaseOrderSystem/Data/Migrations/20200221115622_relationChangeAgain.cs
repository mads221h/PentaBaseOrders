using Microsoft.EntityFrameworkCore.Migrations;

namespace PentaBaseOrderSystem.Data.Migrations
{
    public partial class relationChangeAgain : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Order_Department_DepartmentId",
                table: "Order");

            migrationBuilder.DropForeignKey(
                name: "FK_Order_Project_ProjectId",
                table: "Order");

            migrationBuilder.DropIndex(
                name: "IX_Order_DepartmentId",
                table: "Order");

            migrationBuilder.DropIndex(
                name: "IX_Order_ProjectId",
                table: "Order");

            migrationBuilder.DropColumn(
                name: "DepartmentId",
                table: "Order");

            migrationBuilder.DropColumn(
                name: "ProjectId",
                table: "Order");

            migrationBuilder.AddColumn<string>(
                name: "Department",
                table: "Order",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Project",
                table: "Order",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Department",
                table: "Order");

            migrationBuilder.DropColumn(
                name: "Project",
                table: "Order");

            migrationBuilder.AddColumn<int>(
                name: "DepartmentId",
                table: "Order",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ProjectId",
                table: "Order",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Order_DepartmentId",
                table: "Order",
                column: "DepartmentId");

            migrationBuilder.CreateIndex(
                name: "IX_Order_ProjectId",
                table: "Order",
                column: "ProjectId");

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
        }
    }
}
