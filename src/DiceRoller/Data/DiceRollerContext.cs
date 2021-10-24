using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using DiceRoller.Models;

namespace DiceRoller.Data
{
    public class DiceRollerContext : DbContext
    {
        public DiceRollerContext (DbContextOptions<DiceRollerContext> options)
            : base(options)
        {
        }

        public DbSet<DiceRoller.Models.User> Users { get; set; }
        public DbSet<DiceRoller.Models.UserSettings> UserSettings { get; set; }
    }
}
