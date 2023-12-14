import React from "react";
import styles from "./styles.module.scss";

export default function Cards(props) {
  return (
    props.urlToImage?(
      <div className={styles.cards}>
        <img src={props.urlToImage} className={styles.card_img} />
        <div>
        <a href={props.url}>
          <h3 className={styles.card_description}>{props.description}</h3>
        </a>
          <h6 className={styles.card4_author}>
            '{props.author}//{props.publishedAt}'
          </h6>
          <br />
          <h4 className={styles.card_content}>{props.content}</h4>
        </div>
      </div>):null
 
  );
}
