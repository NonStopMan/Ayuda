using Ayuda.Domain.Model;
using Ayuda.Domian.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Ayuda.Domain.Interface
{
    public interface IBeerRepository
    {
        Task<BeerServiceResponse> GetBeers(Filter filter);
    }
}
