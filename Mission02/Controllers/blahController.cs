using Microsoft.AspNetCore.Mvc;
using Mission02.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission02.Controllers
{
    public class blahController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet] // this is the get method; attribute
        public IActionResult Calculator()
        {
            return View();
        }

        [HttpPost] //this identifies the post method; attribute
        public IActionResult Calculator(CalculatorModel model)
        {
            return View();
        }
    }
}
