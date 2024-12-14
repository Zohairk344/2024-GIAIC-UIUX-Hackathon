import React from 'react'
import Image from 'next/image'
import Icon from '@/public/Meubel_House_Logos-05.svg'
import Account_Icon from "@/public/Vector.svg"
import Search_Icon from '@/public/icons_search.svg'
import Heart_Icon from '@/public/icons_heart.svg'
import Shopping_Cart_Icon from '@/public/shopping_cart.svg'
import Link from 'next/link'

const Header = () => {
  return (
    
    <div className='flex flex-row py-4 poppins bg-white'>
        <div className='flex flex-row'>
            <Image src={Icon} alt="" width={50} height={32} className=' ml-20 mr-4'/>
            <Link href="/"><h1 className=' text-4xl mt-1  font-bold'>Furniro</h1></Link>
        </div>
        <div className='flex flex-row ml-96 gap-20'>
            <div className='flex flex-row'>
                <Link href="/"><p className='mt-3 mr-10 text-lg'>Home</p></Link>
            </div>

            <div className='flex flex-row'>
                <Link href="/shop"><p className=' mt-3 mr-10 text-lg'>Shop</p></Link>
            </div>

            <div className='flex flex-row'>
                <Link href="/blog"><p className=' mt-3 mr-10 text-lg'>Blog</p></Link>
            </div>

            <div className='flex flex-row'>
                <Link href="/contact"><p className=' mt-3 mr-10 text-lg'>Contact</p></Link>
            </div>
            
            <div className='flex flex-row gap-8 pl-28'>
                <Link href="/single_item"><Image src={Account_Icon} alt="" width={30} height={30} className='mt-2 mr-10'/></Link>
                <Link href="/single_item"><Image src={Search_Icon} alt="" width={30} height={30} className='mt-2 mr-10' /></Link>
                <Link href="/cart_sidebar"><Image src={Heart_Icon} alt="" width={30} height={30} className='mt-2 mr-10' /></Link>
                <Link href="/cart"><Image src={Shopping_Cart_Icon} alt="" width={30} height={30} className='mt-1 mr-10'/></Link>
            </div>
        </div>
    </div>

  )
}

export default Header