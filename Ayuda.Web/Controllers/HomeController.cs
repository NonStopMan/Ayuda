using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Ayuda.Web.Models;

namespace Ayuda.Web.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return PartialView("~/wwwroot/public/index.cshtml");
        }
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
