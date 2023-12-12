
import React from "react"
export default function cards(props) {

    
    return (
        <a href={props.url}>
        <div className="cards">
            <img src={props.urlToImage} className="card_img" />
            <div>
            <h3 className="card_description">{props.description}</h3>
            <h6 className="card4_author" >'{props.author}//{props.publishedAt}'</h6>
            <h4 className="card_content">{props.content}</h4>
            </div>
            
            </div >
            </a>
    )
}