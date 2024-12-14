import React from 'react'
import Header from '@/components/header'
import Image from 'next/image'
import { Card, CardTitle } from "@/components/ui/card";
import Featured_1 from "@/public/featured_1.svg"
import Featured_2 from "@/public/featured_2.svg"
import Featured_2_5 from "@/public/featured_2_5.svg"
import Featured_3 from "@/public/featured_3.svg"
import Footer from '@/components/footer';


const Shop = () => {
  return (
    <div className='poppins'>
        <Header/>
        <div className='hero'>
            <Image src="/shop_1.svg" alt='' fill={true} className='bg-img '/>
            <div className='flex flex-col items-center py-32'>
                <h1 className='text-5xl font-bold'>Shop</h1>
                <div className='flex flex-row pt-6'>
                    <h1 className='text-lg font-medium'>Home </h1>
                    <Image src="/right_arrow.svg" alt="" width={10} height={10} className="ml-2" />
                    <h1 className='text-lg ml-2 font-light'> Shop</h1>
                </div>
            </div>
        </div>

        <div className='bg-[#F9F1E7] flex flex-row py-8 '>
            <Image src="/filter.svg" alt='' width={25} height={25} className='ml-32'/>
            <h1 className='text-xl ml-9 mt-[14px]'>Filter</h1>
            <Image src="/big_round.svg" alt='' width={25} height={25} className='ml-16'/>
            <Image src="/view_list.svg" alt='' width={25} height={25} className='ml-16'/>
            <div className="vl ml-9 mt-2"></div>
            <h1 className='mt-[14px] ml-9 text-lg'>Showing 1–16 of 32 results</h1>
            <div className='flex flex-row'>
                <h1 className='text-xl mt-[14px] ml-[600px]'>Show</h1>
                <input type="text" placeholder='16' className='ml-4 h-[55px] w-[55px] flex text-center text-xl'/>
                <h1 className='text-xl mt-[15px] ml-10'>Short by</h1>
                <input type="text" placeholder='Default' className='w-[188px] h-[55px] ml-5 text-xl text-center' />
            </div>
        </div>

        <div className='flex flex-col justify-center ml-28'>
            <div className="flex flex-row gap-14 mt-12">
            <Card className="rounded-none bg-[#F4F5F7]">
                <Image src={Featured_1} alt="" width={380} height={300}/>
                <CardTitle className="text-[24px] ml-3 mt-3">Syltherine</CardTitle>
                <p className="ml-3 mb-3 mt-2 text-sm text-gray-400">Stylish cafe chair</p>
                <div className="ml-3 flex flex-row gap-4">
                <p className="mb-4 font-semibold text-[20px]">Rp 2.500.000</p>
                <p className="mt-1 text-[#B0B0B0] text-[16px]"><s>Rp 3.500.000</s></p>
                </div>
            </Card>
            <Card className="rounded-none bg-[#F4F5F7]">
                <Image src={Featured_2_5} alt="" width={380} height={300}/>
                <CardTitle className="text-[24px] ml-3 mt-3">Leviosa</CardTitle>
                <p className="ml-3 mb-3 mt-2 text-sm text-gray-400">Stylish cafe chair</p>
                <div className="ml-3 flex flex-row gap-4">
                <p className="mb-4 font-semibold text-[20px]">Rp 2.500.000</p>
                </div>
            </Card>
            <Card className="rounded-none bg-[#F4F5F7]">
                <Image src={Featured_2} alt="" width={380} height={300}/>
                <CardTitle className="text-[24px] ml-3 mt-3">Lolito</CardTitle>
                <p className="ml-3 mb-3 mt-2 text-sm text-gray-400">Luxury big sofa</p>
                <div className="ml-3 flex flex-row gap-4">
                <p className="mb-4 font-semibold text-[20px]">Rp 7.000.000</p>
                <p className="mt-1 text-[#B0B0B0] text-[16px]"><s>Rp 14.000.000</s></p>
                </div>
            </Card>
            <Card className="rounded-none bg-[#F4F5F7]">
                <Image src={Featured_3} alt="" width={380} height={300}/>
                <CardTitle className="text-[24px] ml-3 mt-3">Respira</CardTitle>
                <p className="ml-3 mb-3 mt-2 text-sm text-gray-400">Outdoor bar table and stool</p>
                <div className="ml-3 flex flex-row gap-4">
                <p className="mb-4 font-semibold text-[20px]">Rp 500.000</p>
                </div>
            </Card>
            </div>
            <div className="flex flex-row gap-14 mt-12">
            <Card className="rounded-none bg-[#F4F5F7]">
                <Image src={Featured_1} alt="" width={380} height={300}/>
                <CardTitle className="text-[24px] ml-3 mt-3">Syltherine</CardTitle>
                <p className="ml-3 mb-3 mt-2 text-sm text-gray-400">Stylish cafe chair</p>
                <div className="ml-3 flex flex-row gap-4">
                <p className="mb-4 font-semibold text-[20px]">Rp 2.500.000</p>
                <p className="mt-1 text-[#B0B0B0] text-[16px]"><s>Rp 3.500.000</s></p>
                </div>
            </Card>
            <Card className="rounded-none bg-[#F4F5F7]">
                <Image src={Featured_2_5} alt="" width={380} height={300}/>
                <CardTitle className="text-[24px] ml-3 mt-3">Leviosa</CardTitle>
                <p className="ml-3 mb-3 mt-2 text-sm text-gray-400">Stylish cafe chair</p>
                <div className="ml-3 flex flex-row gap-4">
                <p className="mb-4 font-semibold text-[20px]">Rp 2.500.000</p>
                </div>
            </Card>
            <Card className="rounded-none bg-[#F4F5F7]">
                <Image src={Featured_2} alt="" width={380} height={300}/>
                <CardTitle className="text-[24px] ml-3 mt-3">Lolito</CardTitle>
                <p className="ml-3 mb-3 mt-2 text-sm text-gray-400">Luxury big sofa</p>
                <div className="ml-3 flex flex-row gap-4">
                <p className="mb-4 font-semibold text-[20px]">Rp 7.000.000</p>
                <p className="mt-1 text-[#B0B0B0] text-[16px]"><s>Rp 14.000.000</s></p>
                </div>
            </Card>
            <Card className="rounded-none bg-[#F4F5F7]">
                <Image src={Featured_3} alt="" width={380} height={300}/>
                <CardTitle className="text-[24px] ml-3 mt-3">Respira</CardTitle>
                <p className="ml-3 mb-3 mt-2 text-sm text-gray-400">Outdoor bar table and stool</p>
                <div className="ml-3 flex flex-row gap-4">
                <p className="mb-4 font-semibold text-[20px]">Rp 500.000</p>
                </div>
            </Card>
            </div>
            <div className="flex flex-row gap-14 mt-12">
            <Card className="rounded-none bg-[#F4F5F7]">
                <Image src={Featured_1} alt="" width={380} height={300}/>
                <CardTitle className="text-[24px] ml-3 mt-3">Syltherine</CardTitle>
                <p className="ml-3 mb-3 mt-2 text-sm text-gray-400">Stylish cafe chair</p>
                <div className="ml-3 flex flex-row gap-4">
                <p className="mb-4 font-semibold text-[20px]">Rp 2.500.000</p>
                <p className="mt-1 text-[#B0B0B0] text-[16px]"><s>Rp 3.500.000</s></p>
                </div>
            </Card>
            <Card className="rounded-none bg-[#F4F5F7]">
                <Image src={Featured_2_5} alt="" width={380} height={300}/>
                <CardTitle className="text-[24px] ml-3 mt-3">Leviosa</CardTitle>
                <p className="ml-3 mb-3 mt-2 text-sm text-gray-400">Stylish cafe chair</p>
                <div className="ml-3 flex flex-row gap-4">
                <p className="mb-4 font-semibold text-[20px]">Rp 2.500.000</p>
                </div>
            </Card>
            <Card className="rounded-none bg-[#F4F5F7]">
                <Image src={Featured_2} alt="" width={380} height={300}/>
                <CardTitle className="text-[24px] ml-3 mt-3">Lolito</CardTitle>
                <p className="ml-3 mb-3 mt-2 text-sm text-gray-400">Luxury big sofa</p>
                <div className="ml-3 flex flex-row gap-4">
                <p className="mb-4 font-semibold text-[20px]">Rp 7.000.000</p>
                <p className="mt-1 text-[#B0B0B0] text-[16px]"><s>Rp 14.000.000</s></p>
                </div>
            </Card>
            <Card className="rounded-none bg-[#F4F5F7]">
                <Image src={Featured_3} alt="" width={380} height={300}/>
                <CardTitle className="text-[24px] ml-3 mt-3">Respira</CardTitle>
                <p className="ml-3 mb-3 mt-2 text-sm text-gray-400">Outdoor bar table and stool</p>
                <div className="ml-3 flex flex-row gap-4">
                <p className="mb-4 font-semibold text-[20px]">Rp 500.000</p>
                </div>
            </Card>
            </div>
            <div className="flex flex-row gap-14 mt-12">
            <Card className="rounded-none bg-[#F4F5F7]">
                <Image src={Featured_1} alt="" width={380} height={300}/>
                <CardTitle className="text-[24px] ml-3 mt-3">Syltherine</CardTitle>
                <p className="ml-3 mb-3 mt-2 text-sm text-gray-400">Stylish cafe chair</p>
                <div className="ml-3 flex flex-row gap-4">
                <p className="mb-4 font-semibold text-[20px]">Rp 2.500.000</p>
                <p className="mt-1 text-[#B0B0B0] text-[16px]"><s>Rp 3.500.000</s></p>
                </div>
            </Card>
            <Card className="rounded-none bg-[#F4F5F7]">
                <Image src={Featured_2_5} alt="" width={380} height={300}/>
                <CardTitle className="text-[24px] ml-3 mt-3">Leviosa</CardTitle>
                <p className="ml-3 mb-3 mt-2 text-sm text-gray-400">Stylish cafe chair</p>
                <div className="ml-3 flex flex-row gap-4">
                <p className="mb-4 font-semibold text-[20px]">Rp 2.500.000</p>
                </div>
            </Card>
            <Card className="rounded-none bg-[#F4F5F7]">
                <Image src={Featured_2} alt="" width={380} height={300}/>
                <CardTitle className="text-[24px] ml-3 mt-3">Lolito</CardTitle>
                <p className="ml-3 mb-3 mt-2 text-sm text-gray-400">Luxury big sofa</p>
                <div className="ml-3 flex flex-row gap-4">
                <p className="mb-4 font-semibold text-[20px]">Rp 7.000.000</p>
                <p className="mt-1 text-[#B0B0B0] text-[16px]"><s>Rp 14.000.000</s></p>
                </div>
            </Card>
            <Card className="rounded-none bg-[#F4F5F7]">
                <Image src={Featured_3} alt="" width={380} height={300}/>
                <CardTitle className="text-[24px] ml-3 mt-3">Respira</CardTitle>
                <p className="ml-3 mb-3 mt-2 text-sm text-gray-400">Outdoor bar table and stool</p>
                <div className="ml-3 flex flex-row gap-4">
                <p className="mb-4 font-semibold text-[20px]">Rp 500.000</p>
                </div>
            </Card>
            </div>
        </div>

        <div className='flex flex-row justify-center my-28 '>
            <button className='w-16 h-16 bg-[#B88E2F] rounded-xl text-white'>1</button>
            <button className='w-16 h-16 bg-[#F9F1E7] rounded-xl ml-12'>2</button>
            <button className='w-16 h-16 bg-[#F9F1E7] rounded-xl ml-12'>3</button>
            <button className='w-24 h-16 bg-[#F9F1E7] rounded-xl ml-12'>Next</button>
        </div>

        <div className='bg-[#FAF3EA] py-28 flex flex-row pl-32'>
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

export default Shop