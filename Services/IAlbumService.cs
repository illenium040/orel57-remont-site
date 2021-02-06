using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrelRemontSite.Services
{
    public interface IAlbumService
    {
        Task<string> GetImagesJsonAsync(string album, int page);
    }
}
