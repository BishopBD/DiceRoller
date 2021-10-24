using System.Threading.Tasks;

namespace DiceRoller.Models
{
    public interface IHubClient
    {
        Task BroadcastMessage();
    }
}