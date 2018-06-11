namespace Ayuda.Domian.Model
{
    public class Filter
    {
        public int Page { get; set; }
        public string Name { get; set; }
        public string IsOrganic { get; set; }
        public string HasLabels { get; set; }
        public string Year { get; set; }
        public string Status { get; set; }
        public string Ids { get; set; }
        public bool FilterBeers { get; set; }
        public string Sort { get; set; }
        public string Order { get; set; }
    }
}