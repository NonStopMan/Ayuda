using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Threading.Tasks;
using Ayuda.Domain.Interface;
using Ayuda.Domain.Model;
using Ayuda.Domian.Model;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Ayuda.Web.Controllers
{
    [Route("api/[controller]")]

    [EnableCors(policyName: "AyudaAPIService")]
    public class BeersController : Controller
    {
        //private readonly string pathToFilter = @"http://api.brewerydb.com/v2/beers?key=d905bda1503354da3820dc22ba49ad69&p={0}&name={1}&isOrganic={2}&hasLabels={3}&year={4}
        //                                &status={5}&ids={6}&sort={6}&order={7}";
        //private readonly string path = @"http://api.brewerydb.com/v2/beers?key=d905bda1503354da3820dc22ba49ad69&p={0}&sort={1}&order={2}";
        public IBeerRepository _beerRepository { get; set; }
        public BeersController(IBeerRepository beerRepository)
        {
            _beerRepository = beerRepository;
        }
        // GET: api/<controller>
        [HttpPost]
        public async Task<BeerServiceResponse> GetWithFilter([FromBody]Filter filter)
        {
            return await _beerRepository.GetBeers(filter);
        }
    }
}
