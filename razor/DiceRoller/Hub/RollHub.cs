using DiceRoller.Domain;
using Microsoft.AspNet.SignalR.Hubs;
using Microsoft.AspNetCore.SignalR;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SignalRChat.Hubs
{
    [HubName("RollHub")]
    public class RollHub : Hub
    {
        public async Task Roll(IEnumerable<Dice> diceToRoll)
        {
            var results =
                diceToRoll
                    .Roll();

            await 
            Clients
                .All
                .SendAsync(
                    "RollResult", 
                    results);
        }
    }
}