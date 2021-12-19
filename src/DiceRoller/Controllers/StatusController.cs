using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DiceRoller.Data;
using DiceRoller.Models;
using Microsoft.AspNetCore.SignalR;
using SignalRChat.Hubs;

namespace DiceRoller.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StatusController : ControllerBase
    {

        public IActionResult Health()
        {
            return Ok();
        }

    }
}