import Header from "components/Header"
import Side from "components/side"
import Cards from "components/cards"
import './pag.scss'
import CategoryPage from "./category/[category]/page"

async function page({searchParams}) {
   
  async function getnews(category = "general") {
        
    
    const data = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=" +
        category +
        "&apiKey=ec4810ca37fd45728e97017e6fdba1b1")
    const json = await data.json();
    return json;
}
let dataobj = await getnews(searchParams.category)
const cardData=dataobj.articles;
return (
    <div className="Headbar">
      { 
        (!cardData)?(null):
            cardData?.map(item => <Cards key={item.source.id}  {...item} />)
      }
    </div>
    )
 
}
// const data=await Apicall()
//     const cardss = data.map(item => {
//       return (
//         <Cards
//           key={item.id}
//           {...item}
//         />
//       )
//     })
  
//   return (
  
//     <div className="HB">
//       { cardss}
// </div>

//       )
// }

export default page