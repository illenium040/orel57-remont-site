using Microsoft.AspNetCore.Mvc;

using OrelRemontSite.Models;
using OrelRemontSite.Services;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;


namespace OrelRemontSite.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmailController : ControllerBase
    {
        private readonly IMailService _mailService;
        public EmailController(IMailService mailService)
        {
            _mailService = mailService;
        }

		[HttpPost]
		public async Task<IActionResult> Post(MailModel emailForm)
		{
            try
            {
                await _mailService.SendAsync(emailForm);
                return Ok();
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
		}
	}
}