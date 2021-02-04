using Microsoft.AspNetCore.Mvc;

using OrelRemontSite.Models;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrelRemontSite.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmailController : ControllerBase
    {
		[HttpPost]
		public IActionResult Post(EmailFormModel emailForm)
		{
			Console.WriteLine(emailForm.Email);
			return Ok(200);
		}
	}
}
