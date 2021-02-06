using Microsoft.AspNetCore.Mvc;

using OrelRemontSite.Services;

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
		private readonly IAlbumService _albumService;
        public AlbumController(IAlbumService service)
        {
			_albumService = service;
        }

		[HttpGet("{album}/{page}")]
        public async Task<string> Get(string album, int page)
        {
			try
            {
                return await _albumService.GetImagesJsonAsync(album, page);
            }
			catch (Exception e)
            {
                return BadRequest(e.Message).ToString();
            }
        }

	}
}
