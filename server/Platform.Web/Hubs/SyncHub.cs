using System.Threading.Tasks;

using Microsoft.AspNetCore.SignalR;

namespace Platform.Web.Hubs
{
    public class SyncHub : Hub
    {
        public async Task triggerMessage(string message)
        {
            await Clients.All.SendAsync("syncMessage", message);
        }
    }
}