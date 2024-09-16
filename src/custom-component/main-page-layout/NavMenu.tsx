import Link from 'next/link'
import React from 'react'

const NavMenu = () => {
  return (
    <div className=' flex gap-x-[30px] pr-[20px] font-serif font-semibold'>
        <Link href={"/pages/Home"}>Home</Link>
        <Link href={"/pages/Products"}>Product</Link>
        <Link href={"/pages/Home"}>Others</Link>
    </div>
  )
}

export default NavMenu
