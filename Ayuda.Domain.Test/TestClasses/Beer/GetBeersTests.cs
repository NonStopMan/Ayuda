using Ayuda.Domain.Handlers.Beer;
using Moq;
using System.Linq;
using Xunit;

namespace Ayuda.Web.Test.TestClasses.Beer
{
    public class GetBeersTests
    {
        public GetBeersTests()
        {
        }



        [Fact(DisplayName = "ShouldReturnBeersResponseWhenReturnFromBeerService")]
        public void ShouldReturnBeersResponseWhenReturnFromBeerService()
        {
            //Arrange
            //var handler = new GetBeers();

            //var posts = handler.Execute();

            ////Assert
            //Assert.NotNull(posts);
            //Assert.NotEmpty(posts);
            //Assert.Equal(3, posts.Count());

        }

        //[Fact(DisplayName = "WhenNoActionsShouldReturnEmptyList")]
        //public void WhenNoActionsShouldReturnEmptyList()
        //{
        //    //Arrange
        //    var handler = new GetPosts(_repository);

        //    //Act
        //    var posts = handler.Execute();

        //    //Assert
        //    Assert.NotNull(posts);
        //    Assert.Empty(posts);
        //}
    }
}
