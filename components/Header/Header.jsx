"use client";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

function SliderBar() {
  return (
    <div className={styles.Side4}>
      <ul >
        <li className={styles.Trial}><Link href="/?category=general" className={styles.categoryLink}>
        General
        </Link></li>

        <li className={styles.Trial}><Link href="/?category=sports" className={styles.categoryLink}>
        Sports
        </Link></li>

        <li className={styles.Trial}><Link href="/?category=technology" className={styles.categoryLink}>
        Technology
        </Link></li>

        <li className={styles.Trial}><Link href="/?category=entertainment" className={styles.categoryLink}>
        Enteratinment
        </Link></li>

        <li className={styles.Trial}><Link href="/?category=business" className={styles.categoryLink}>
        Business
        </Link></li>

        <li className={styles.Trial}><Link href="/?category=science" className={styles.categoryLink}>
        Science
      </Link>
        </li>
      </ul>    
    </div>
  );
}
export default function Header() {
  const [count, setCount] = useState(false);
  return (
    <div className={styles.header}>
      <button
        className={styles.menu}
        onClick={() => setCount((prevCount) => !prevCount)}
      >
        MENU
      </button>
      {count == true && SliderBar()}
      <img src="logo_inshorts.png" className={styles.head_img} />
    </div>
  );
}
