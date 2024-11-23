import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <div>
      <header className="header">
       <h1 className="title">Floral Fusion</h1> 
        <nav className="nav">
          <Link href= "/">Home</Link>  
           <Link href="/About">About</Link>
            <Link href= "/Flowers">Flowers</Link>
          < Link href="/Contact">Contact</Link>
          
        </nav>

      </header>
    </div>
  )
}

export default Header
