using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Ayuda.Web
{
    [Route("api/[controller]")]

    [EnableCors(policyName: "AyudaAPIService")]
    public class BeersController : Controller
    {
        private readonly string pathToFilter = @"http://api.brewerydb.com/v2/beers?key=d905bda1503354da3820dc22ba49ad69&p={0}&name={1}&isOrganic={2}&hasLabels={3}&year={4}
                                        &status={5}&ids={6}&sort={6}&order={7}";
        private readonly string path = @"http://api.brewerydb.com/v2/beers?key=d905bda1503354da3820dc22ba49ad69&p={0}&sort={1}&order={2}";

        // GET: api/<controller>
        [HttpPost]
        public async Task<BeerServiceResponse> GetWithFilter([FromBody]Filter filter)
        {
            filter.Page++;
            var fullUri = "";
            if (filter.FilterBeers)
            {
                fullUri = string.Format(pathToFilter, filter.Page, filter.Name, filter.IsOrganic, filter.HasLabels, filter.Year, filter.Status, filter.Ids, filter.Sort.ToUpper(),filter.Order);
            }
            else
            {
                fullUri = string.Format(path, filter.Page, filter.Sort, filter.Order);
            }
            using (var client = new HttpClient())
            {
                client.DefaultRequestHeaders.Add("HTTP_ACCEPT", "application/json");
                BeerServiceResponse beers = null;
                HttpResponseMessage response = await client.GetAsync(fullUri);
                if (response.IsSuccessStatusCode)
                {
                    beers = await response.Content.ReadAsAsync<BeerServiceResponse>(new List<MediaTypeFormatter> { new JsonMediaTypeFormatter() });
                }
                return beers;
            }
            //var beers = new BeerServiceResponse();
            //using (var r = new StreamReader("beers.json"))
            //{
            //    var json = r.ReadToEnd();
            //    JsonConvert.PopulateObject(json, beers);
            //}
            //return beers;
        }
    }
}
