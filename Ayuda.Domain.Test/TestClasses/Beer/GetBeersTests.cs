using Ayuda.Domain.Handlers.Beer;
using Ayuda.Domain.Interface;
using Ayuda.Domain.Test.Mocks;
using Ayuda.Domian.Model;
using NUnit.Framework;
using System.Linq;
using System.Threading.Tasks;

namespace Ayuda.Domain.Test.TestClasses.Beer
{
    public class GetBeersTests
    {
        public IBeerRepository _beerRepository { get; set; }
        public GetBeersTests()
        {
            _beerRepository = new FackBeerRepository();
        }

        [Test]
        public async Task ShouldReturnBeersResponseWhenReturnFromBeerService()
        {
            //Arrange
            var handler = new GetBeers(_beerRepository);
            var filter = new Filter()
            {
            };
            var beersResponse = await handler.Execute(filter);

            //Assert
            Assert.NotNull(beersResponse);
            Assert.IsNotEmpty(beersResponse.Data);
            Assert.AreEqual(50, beersResponse.Data.Count());
        }

        [Test]
        public async Task WhenNoActionsShouldReturnEmptyList()
        {
            //Arrange
            var handler = new GetBeers(_beerRepository);
            var filter = new Filter()
            {
                FilterBeers = true
            };
            //Act 
            var beersResponse = await handler.Execute(filter);

            //Assert
            Assert.NotNull(beersResponse);
            Assert.IsNull(beersResponse.Data);
        }
    }
}
