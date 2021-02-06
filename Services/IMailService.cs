using OrelRemontSite.Models;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrelRemontSite.Services
{
    public interface IMailService
    {
        Task SendAsync(MailModel mailModel);
    }
}
