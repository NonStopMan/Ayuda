using Ayuda.Domain.Interface;
using Ayuda.Domain.Model;
using Ayuda.Domian.Model;
using System;
using System.Threading.Tasks;

namespace Ayuda.Domain.Handlers.Beer
{
    public class GetBeers
    {
        private IBeerRepository _beerRepository;
        public GetBeers(IBeerRepository beerRepository)
        {
            if (beerRepository == null) throw new ArgumentNullException(nameof(beerRepository));
            _beerRepository = beerRepository;
        }

        public async Task<BeerServiceResponse> Execute(Filter filter)
        {
            return await _beerRepository.GetBeers(filter);
        }
    }
}
