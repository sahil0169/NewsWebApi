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
                <div >
        
                    <Link href="/?category=general" className="Side3">General</Link>
                    
                    <Link href="/?category=sports" className="Side3">Sports</Link>
                  
                    <Link href="/?category=technology" className="Side3">Technology</Link>
                    
                    <Link href="/?category=entertainment" className="Side3">Enteratinment</Link>
                   <Link href="/?category=business" className="Side3">Business</Link>
                    
                    <Link href="/?category=science" className="Side3">Science</Link>
                
                </div>

            </div>
            
        )
    }
    const [count, setCount] = useState(false)
    return (

        <div >
            <button className="Side2" onClick={()=>setCount(prevCount=>!prevCount)}>MENU</button>
            { count==true && Bar()}    
        </div>
    )
}

 