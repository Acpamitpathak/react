using System;
using System.Data;
using System.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Azure.Identity;

namespace ManagedIdentityEFExample
{
    public class ApplicationDbContext : DbContext
    {
        private readonly string _connectionString;

        // Constructor
        public ApplicationDbContext()
        {
            // Replace with your actual Azure SQL Database connection string without credentials
            _connectionString = "Server=tcp:<your-server-name>.database.windows.net,1433;Database=<your-database-name>;Authentication=Active Directory Default;";
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // Use Azure Active Directory authentication via DefaultAzureCredential
            optionsBuilder.UseSqlServer(GetSqlConnection(), b => b.EnableRetryOnFailure());
        }

        private SqlConnection GetSqlConnection()
        {
            var connection = new SqlConnection(_connectionString)
            {
                AccessToken = new DefaultAzureCredential().GetToken(
                    new Azure.Core.TokenRequestContext(new[] { "https://database.windows.net//.default" })).Token
            };
            return connection;
        }

        // Example DbSet
        public DbSet<Customer> Customers { get; set; }
    }

    public class Customer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
    }

    class Program
    {
        static void Main(string[] args)
        {
            using (var context = new ApplicationDbContext())
            {
                // Perform database operations
                var customers = context.Customers.ToList();
                foreach (var customer in customers)
                {
                    Console.WriteLine($"Customer ID: {customer.Id}, Name: {customer.Name}");
                }
            }
        }
    }
}
