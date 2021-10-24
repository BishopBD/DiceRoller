using DiceRoller.Domain;
using Microsoft.AspNetCore.SignalR;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SignalRChat.Hubs
{
    public class RollHub : Hub
    {
        public async Task Roll(IEnumerable<Dice> diceToRoll)
        {
            var results = diceToRoll.Roll();

            await Clients.All.SendAsync(
                "RollResult", 
                results);
        }
    }
}