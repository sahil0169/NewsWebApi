import Cards from "@/components/Cards/Cards";

async function getnews(category = "general") {
  const data = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&category=" +
      category +
      "&apiKey=ec4810ca37fd45728e97017e6fdba1b1"
  );
  const json = await data.json();
  return json;
}
async function HomePage({ searchParams }) {
  let dataobj = await getnews(searchParams.category);
  const cardData = dataobj.articles;
  return (
    <div>
      {!cardData
        ? null
        : cardData?.map((item) => <Cards key={item.source.id} {...item} />)}
    </div>
  );
}

export default HomePage;
