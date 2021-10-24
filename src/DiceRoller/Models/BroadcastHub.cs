using Microsoft.AspNetCore.SignalR;

namespace DiceRoller.Models
{
    public class BroadcastHub : Hub<IHubClient>
    {
    }
}