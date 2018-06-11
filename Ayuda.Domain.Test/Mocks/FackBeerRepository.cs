using Ayuda.Domain.Interface;
using Ayuda.Domain.Model;
using Ayuda.Domian.Model;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace Ayuda.Domain.Test.Mocks
{
    public class FackBeerRepository : IBeerRepository
    {
        public async Task<BeerServiceResponse> GetBeers(Filter filter)
        {
            var beers = new BeerServiceResponse();
            if (!filter.FilterBeers)
            {

                using (var r = new StreamReader("beers.json"))
                {
                    var json = r.ReadToEnd();
                    JsonConvert.PopulateObject(json, beers);
                }
            }
            return beers;
        }
    }
}
