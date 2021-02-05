using Microsoft.AspNetCore.Mvc;

using OrelRemontSite.Models;

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
		
		[HttpPost]
		public async Task<IActionResult> Post(EmailFormModel emailForm)
		{
			string _emailTo = Properties.Resources.emailTo;
			string _emailFrom = Properties.Resources.emailFrom;
			try
			{
				var mailMessage = new MailMessage()
				{
					From = new MailAddress(_emailFrom),
					To = { _emailTo },
					Subject = emailForm.Subject,
					Body = $"От: {emailForm.Name}\r\n" +
					$"Номер телефона: {emailForm.PhoneNumber}\r\n" +
					$"Email: {emailForm.Email}\r\n" +
					$"{emailForm.Message}"
				};
				var smtp = new SmtpClient();
				smtp.Host = Properties.Resources.Host;
				smtp.Port = int.Parse(Properties.Resources.Port);
				smtp.EnableSsl = true;
				smtp.UseDefaultCredentials = false;
				smtp.Credentials = new NetworkCredential(_emailFrom, Properties.Resources.password);
				smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
				await smtp.SendMailAsync(mailMessage);
				return Ok(200);
			}
			catch(Exception e)
            {
				return NotFound(new { code = 404, message = e.Message });
            }
		}
	}
}