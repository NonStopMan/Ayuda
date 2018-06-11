using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Ayuda.Web.Models;
using Microsoft.AspNetCore.Hosting;
using System.IO;

namespace Ayuda.Web.Controllers
{
    public class HomeController : Controller
    {
        private readonly IHostingEnvironment _hostingEnvironment;
        public HomeController(IHostingEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
        }

        public IActionResult Index()
        {
            var fileContent = System.IO.File.ReadAllText(_hostingEnvironment.WebRootPath + "\\build\\index.html");
            return Content(fileContent, "text/html");
        }
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
