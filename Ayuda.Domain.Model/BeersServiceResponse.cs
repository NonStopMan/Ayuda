using System;
using System.Collections.Generic;
using System.Globalization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace Ayuda.Domain.Model
{
    public partial class BeerServiceResponse
    {
        [JsonProperty("status")]
        public string Status { get; set; }

        [JsonProperty("numberOfPages")]
        public long NumberOfPages { get; set; }

        [JsonProperty("data")]
        public List<Beer> Data { get; set; }

        [JsonProperty("currentPage")]
        public long CurrentPage { get; set; }
        [JsonProperty("totalResults")]
        public int TotalResults { get; set; }
    }

    public partial class Beer
    {
        [JsonProperty("servingTemperatureDisplay")]
        public string ServingTemperatureDisplay { get; set; }

        [JsonProperty("labels")]
        public Labels Labels { get; set; }

        [JsonProperty("style")]
        public Style Style { get; set; }

        [JsonProperty("status")]
        public string Status { get; set; }

        [JsonProperty("srmId")]
        public string SrmId { get; set; }

        [JsonProperty("beerVariationId")]
        public string BeerVariationId { get; set; }

        [JsonProperty("statusDisplay")]
        public string StatusDisplay { get; set; }

        [JsonProperty("foodPairings")]
        public string FoodPairings { get; set; }

        [JsonProperty("srm")]
        public SRM Srm { get; set; }

        [JsonProperty("updateDate")]
        public string UpdateDate { get; set; }

        [JsonProperty("servingTemperature")]
        public string ServingTemperature { get; set; }

        [JsonProperty("availableId")]
        public long AvailableId { get; set; }

        [JsonProperty("beerVariation")]
        public List<object> BeerVariation { get; set; }

        [JsonProperty("abv")]
        public string Abv { get; set; }

        [JsonProperty("year")]
        public string Year { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("id")]
        public string Id { get; set; }

        [JsonProperty("originalGravity")]
        public string OriginalGravity { get; set; }

        [JsonProperty("styleId")]
        public long StyleId { get; set; }

        [JsonProperty("ibu")]
        public string Ibu { get; set; }

        [JsonProperty("glasswareId")]
        public long GlasswareId { get; set; }

        [JsonProperty("isOrganic")]
        public string IsOrganic { get; set; }

        [JsonProperty("createDate")]
        public DateTimeOffset CreateDate { get; set; }

        [JsonProperty("available")]
        public Available Available { get; set; }

        [JsonProperty("glass")]
        public Glass Glass { get; set; }

        [JsonProperty("description")]
        public string Description { get; set; }
    }

    public class SRM
    {
        [JsonProperty("id")]
        public string Id { get; set; }
        [JsonProperty("name")]

        public string Name { get; set; }
        [JsonProperty("hex")]
        public string Hex { get; set; }
    }

    public partial class Available
    {
        [JsonProperty("description")]
        public string Description { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }
    }

    public partial class Glass
    {
        [JsonProperty("updateDate")]
        public string UpdateDate { get; set; }

        [JsonProperty("id")]
        public long Id { get; set; }

        [JsonProperty("description")]
        public string Description { get; set; }

        [JsonProperty("createDate")]
        public DateTimeOffset CreateDate { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }
    }

    public partial class Labels
    {
        [JsonProperty("medium")]
        public string Medium { get; set; }

        [JsonProperty("large")]
        public string Large { get; set; }

        [JsonProperty("icon")]
        public string Icon { get; set; }
    }

    public partial class Style
    {
        [JsonProperty("id")]
        public long Id { get; set; }

        [JsonProperty("category")]
        public Glass Category { get; set; }

        [JsonProperty("description")]
        public string Description { get; set; }

        [JsonProperty("ibuMax")]
        public string IbuMax { get; set; }

        [JsonProperty("srmMin")]
        public string SrmMin { get; set; }

        [JsonProperty("srmMax")]
        public string SrmMax { get; set; }

        [JsonProperty("ibuMin")]
        public string IbuMin { get; set; }

        [JsonProperty("ogMax")]
        public string OgMax { get; set; }

        [JsonProperty("fgMin")]
        public string FgMin { get; set; }

        [JsonProperty("fgMax")]
        public string FgMax { get; set; }

        [JsonProperty("createDate")]
        public DateTimeOffset CreateDate { get; set; }

        [JsonProperty("updateDate")]
        public string UpdateDate { get; set; }

        [JsonProperty("abvMax")]
        public string AbvMax { get; set; }

        [JsonProperty("ogMin")]
        public string OgMin { get; set; }

        [JsonProperty("abvMin")]
        public string AbvMin { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("categoryId")]
        public long CategoryId { get; set; }
    }

    public partial class BeerServiceResponse
    {
        public static BeerServiceResponse FromJson(string json) => JsonConvert.DeserializeObject<BeerServiceResponse>(json, Converter.Settings);
    }

    public static class Serialize
    {
        public static string ToJson(this BeerServiceResponse self) => JsonConvert.SerializeObject(self, Converter.Settings);
    }

    internal static class Converter
    {
        public static readonly JsonSerializerSettings Settings = new JsonSerializerSettings
        {
            MetadataPropertyHandling = MetadataPropertyHandling.Ignore,
            DateParseHandling = DateParseHandling.None,
            Converters = {
                new IsoDateTimeConverter { DateTimeStyles = DateTimeStyles.AssumeUniversal }
            },
        };
    }
}
