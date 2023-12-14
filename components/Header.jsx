'use client'
import { useState} from "react"
import React from "react"
import Link from 'next/link'

export default function Header() {

    function Bar() { 
        return (
            <div className="Side4">
                <div >
        
                    <Link href="/?category=general" className="Side3">General</Link>
                    <br/>
                    <Link href="/?category=sports" className="Side3">Sports</Link>
                    <br/>
                    <Link href="/?category=technology" className="Side3">Technology</Link>
                    <br/>
                    <Link href="/?category=entertainment" className="Side3">Enteratinment</Link>
                    <br/>
                    <Link href="/?category=business" className="Side3">Business</Link>
                    <br/>
                    <Link href="/?category=science" className="Side3">Science</Link>
                
                </div>

            </div>
            
        )
    }
    const [count, setCount] = useState(false)
    return (
        <div className="header">
            <button className="Side2" onClick={()=>setCount(prevCount=>!prevCount)}>MENU</button>
            { count==true && Bar()}    
        
         <img src="logo_inshorts.png" className="head_img" />
        </div>
    )
}