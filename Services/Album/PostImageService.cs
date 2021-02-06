using Microsoft.Extensions.Logging;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace OrelRemontSite.Services.Album
{
    public class PostImageService : IAlbumService
    {
        private readonly HttpClient _client;
        private readonly ILogger<PostImageService> _logger;
        public PostImageService(ILogger<PostImageService> logger)
        {
            _logger = logger;
            _client = new HttpClient();
        }

        public async Task<string> GetImagesJsonAsync(string album, int page)
        {
            try
            {
                var postData = new Dictionary<string, string>
                {
                    { "action", "list" },
                    { "album", album },
                    { "page", $"{page}"},
                    { "offset", "0"}
                };

                return await PostHTTPRequestAsync("https://postimg.cc/json", postData);
            }
            catch (Exception e)
            {
                _logger.LogError(e.Message);
                throw e;
            }
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
