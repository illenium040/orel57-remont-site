using Microsoft.Extensions.Logging;

using OrelRemontSite.Models;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace OrelRemontSite.Services.Mail
{
    public class GmailService : IMailService
    {
        private readonly ILogger<GmailService> _logger;
		private readonly string _emailFrom;
		private readonly string _emailTo;
		private readonly string _password;
		private readonly string _host;
		private readonly int _port;

		public GmailService(ILogger<GmailService> logger)
        {
            _logger = logger;
			_emailFrom = Properties.Resources.EmailFrom;
			_emailTo = Properties.Resources.EmailTo;
			_password = Properties.Resources.Password;
			_host = Properties.Resources.Host;
			_port = int.Parse(Properties.Resources.Port);
        }

		public async Task SendAsync(MailModel mailModel)
		{
			try
			{
				await CreateSMTPClient().SendMailAsync(CreateMailMessage(mailModel));
			}
			catch(Exception e)
            {
				_logger.LogError(e.Message);
				throw e;
            }
		}

		private SmtpClient CreateSMTPClient()
        {
			var smtp = new SmtpClient();
			smtp.Host = _host;
			smtp.Port = _port;
			smtp.EnableSsl = true;
			smtp.UseDefaultCredentials = false;
			smtp.Credentials = new NetworkCredential(_emailFrom, _password);
			smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
			return smtp;
		}

		private MailMessage CreateMailMessage(MailModel mailModel)
        {
			return new MailMessage()
			{
				From = new MailAddress(_emailFrom),
				To = { _emailTo },
				Subject = mailModel.Subject,
				Body = $"От: {mailModel.Name}\r\n" +
				$"Номер телефона: {mailModel.PhoneNumber}\r\n" +
				$"Email: {mailModel.Email}\r\n" +
				$"{mailModel.Message}"
			};
		}
    }
}
