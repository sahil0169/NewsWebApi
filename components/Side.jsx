'use client'
import { useState} from "react"
import React from "react"
import { useRouter} from 'next/navigation'
import Link from 'next/link'
export default function Side() {

    const router=useRouter()
    function Bar() { 
        return (
            <div className="Side4">
                <div className="Side3">
        
                    <Link href="/?category=general">General</Link>
                    <br/>
                    <Link href="/?category=sports">Sports</Link>
                    <br/>
                    <Link href="/?category=technology">Technology</Link>
                    <br/>
                    <Link href="/?category=entertainment">Enteratinment</Link>
                    <br/>
                    <Link href="/?category=business">Business</Link>
                    <br/>
                    <Link href="/?category=science">Science</Link>
                
                </div>

            </div>
            
        )
    }
    const [count, setCount] = useState(false)
    return (

        <div className="Side1">
            <button className="Side2" onClick={()=>setCount(prevCount=>!prevCount)}>MENU</button>
            { count==true && Bar()}    
        </div>
    )
}

 