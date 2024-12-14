import Header from '@/components/header'
import React from 'react'
import Image from 'next/image'
import Icon from '@/public/Meubel_House_Logos-05.svg'
import Footer from '@/components/footer'
import Link from 'next/link'

const Cart = () => {
  return (
    <div className='poppins'>
        <Header/>
        <div className='hero'>
            <Image src="/shop_1.svg" alt='' fill={true} className='bg-img '/>
            <div className='flex flex-col items-center py-32'>
                <Image src={Icon} alt="" width={80} height={80} className='mb-2'/>
                <h1 className='text-5xl font-bold'>Cart</h1>
                <div className='flex flex-row pt-6'>
                    <h1 className='text-lg font-medium'>Home </h1>
                    <Image src="/right_arrow.svg" alt="" width={10} height={10} className="ml-2" />
                    <h1 className='text-lg ml-2 font-light'> Cart</h1>
                </div>
            </div>
        </div>

        <div className='flex flex-row'>
            <div className='flex flex-col w-2/3'>
                <div className='bg-[#F9F1E7] flex flex-row py-8 mt-20 ml-28 mr-10'>
                    <h1 className='text-lg font-medium ml-44'>Product</h1>
                    <h2 className='text-lg font-medium ml-48'>Price</h2>
                    <h3 className='text-lg font-medium ml-48'>Quantity</h3>
                    <h4 className='text-lg font-medium ml-28'>Subtotal</h4>
                </div>
                <div className='flex flex-row ml-28 mt-20'>
                    <div className='bg-[#F9F1E7] rounded-xl w-28 h-28'>
                        <Image src="/sofa_5.svg" alt='' width={150} height={150} className='mt-3'/>
                    </div>
                    <h1 className='mt-11 ml-12 text-lg text-[#9F9F9F]'>Asgaard sofa</h1>
                    <h1 className='mt-11 ml-32 text-lg text-[#9F9F9F]'>Rs. 250,000.00</h1>
                    <h1 className='mt-11 ml-40 pl-4 pr-4 pt-1 mb-7 text-lg border-2 border-gray-400 rounded-lg'>1</h1>
                    <h1 className='text-lg mt-11 ml-32'>Rs. 250,000.00</h1>
                    <Image src="/delete.svg" alt='' width={30} height={30} className='ml-16'/>
                </div>
            </div>
            <div className='w-1/3 mt-20'>
                <div className='bg-[#F9F1E7] flex flex-col w-[460px] h-[460px] items-center'>
                    <h1 className='text-4xl font-semibold mt-5'>Cart Totals</h1>
                    <div className='flex flex-row mt-24'>
                        <h1 className='text-lg font-semibold'>Subtotal</h1>
                        <p className='text-[#9F9F9F] text-lg ml-20'>Rs. 250,000.00</p>
                    </div>
                    <div className='flex flex-row mt-16'>
                        <h1 className='text-lg font-semibold'>Total</h1>
                        <p className='text-xl text-[#B88E2F] ml-20'>Rs. 250,000.00</p>
                    </div>
                    <Link href="/checkout">
                        <div className='mt-12 pt-5 ml-6 w-[220px] h-[68px] border border-black rounded-xl justify-center items-center text-center'>
                            <h1 className='text-xl'>Check Out</h1>
                        </div>
                    </Link>
                </div>
            </div>
        </div>

        <div className='bg-[#FAF3EA] py-28 flex flex-row pl-32 mt-44 mb-5'>
            <div className='flex flex-row'>
                <Image src="/trophy1.svg" alt='' width={70} height={70}/>
                <div className='ml-4'>
                    <h1 className='text-2xl font-semibold'>High Quality</h1>
                    <h2 className='text-xl text-[#898989] font-medium mt-2'>crafted from top materials</h2>
                </div>
            </div>
            <div className='flex flex-row ml-32'>
                <Image src="/tick.svg" alt='' width={70} height={70}/>
                <div className='ml-4'>
                    <h1 className='text-2xl font-semibold'>Warranty Protection</h1>
                    <h2 className='text-xl text-[#898989] font-medium mt-2'>Over 2 years</h2>
                </div>
            </div>
            <div className='flex flex-row ml-32'>
                <Image src="/free_ship.svg" alt='' width={70} height={70}/>
                <div className='ml-4'>
                    <h1 className='text-2xl font-semibold'>Free Shipping</h1>
                    <h2 className='text-xl text-[#898989] font-medium mt-2'>Order over 150 $</h2>
                </div>
            </div>
            <div className='flex flex-row ml-32'>
                <Image src="/support.svg" alt='' width={70} height={70}/>
                <div className='ml-4'>
                    <h1 className='text-2xl font-semibold'>24 / 7 Support</h1>
                    <h2 className='text-xl text-[#898989] font-medium mt-2'>Dedicated support</h2>
                </div>
            </div>
        </div>

        <Footer/>

    </div>
  )
}

export default Cart