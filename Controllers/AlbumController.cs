using Microsoft.AspNetCore.Mvc;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace OrelRemontSite.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class AlbumController : ControllerBase
	{
		private readonly HttpClient _client = new HttpClient();

		[HttpGet("{album}/{page}")]
        public async Task<string> Get(string album, int page)
        {
			return await PostHTTPRequestAsync("https://postimg.cc/json", new Dictionary<string, string>
			{
				{ "action", "list" },
				{ "album", album },
				{ "page", $"{page}"},
				{ "offset", "0"}
			});
        }

		private async Task<string> PostHTTPRequestAsync(string url, Dictionary<string, string> data)
		{
			using (HttpContent formContent = new FormUrlEncodedContent(data))
			{
				using (HttpResponseMessage response = await _client.PostAsync(url, formContent).ConfigureAwait(false))
				{
					response.EnsureSuccessStatusCode();
					return await response.Content.ReadAsStringAsync().ConfigureAwait(false);
				}
			}
		}
	}
}
