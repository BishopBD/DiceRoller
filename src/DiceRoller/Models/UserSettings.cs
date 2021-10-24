using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DiceRoller.Models
{
    public class UserSettings
    {
        //public string Id { get; set; }

        [Key]
        public string User_Id { get; set; }

        [NotMapped]
        public Dictionary<string, string> Settings { get; set; }
    }
}