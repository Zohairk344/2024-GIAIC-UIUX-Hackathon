import Image from 'next/image'
import React from 'react'
import Icon from '@/public/Meubel_House_Logos-05.svg'
import Account_Icon from "@/public/Vector.svg"
import Search_Icon from '@/public/icons_search.svg'
import Heart_Icon from '@/public/icons_heart.svg'
import Shopping_Cart_Icon from '@/public/shopping_cart.svg'
import { Card, CardTitle } from "@/components/ui/card";
import Featured_1 from "@/public/featured_1.svg"
import Featured_2 from "@/public/featured_2.svg"
import Featured_2_5 from "@/public/featured_2_5.svg"
import Featured_3 from "@/public/featured_3.svg"
import Footer from '@/components/footer';
import Link from 'next/link';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
  

const Cart_Sidebar = () => {
  return (
    <div className='poppins'>
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

                    <div className='mt-1'>
                        <Sheet>
                            <SheetTrigger><Image src={Shopping_Cart_Icon} alt="" width={30} height={30} className='mt-1 mr-10'/></SheetTrigger>
                            <SheetContent >
                                    <h1 className='text-2xl font-semibold'>Shopping Cart</h1>
                                    <div className='mt-8 mr-20'>
                                        <Divider/>
                                    </div>
                                    <div className='flex flex-row mt-16'>
                                        <div className=' bg-[#F9F1E7] w-[110px] h-[110px] rounded-xl'>
                                            <Image src="/sofa_5.svg" alt='' width={150} height={150} className='text-center'/>
                                        </div>
                                        <div className='flex flex-row'>
                                            <div className='flex flex-col ml-4 mt-5'>
                                                <h1 className='text-lg'>Asgaard sofa</h1>
                                                <div className='flex flex-row mt-3'>
                                                    <h1 className='text-lg'>1</h1>
                                                    <h1 className='mt-[2px] ml-3'>x</h1>
                                                    <h1 className='text-[#B88E2F] mt-[2px] ml-3 font-medium'>Rs. 250,000.00</h1>
                                                </div>
                                            </div>
                                            <Image src="cancel.svg" alt='' width={20} height={20} className='ml-8'/>
                                        </div>
                                    </div>
                                    <div className='flex flex-row mt-12'>
                                        <div className=' w-[110px] h-[110px] '>
                                            <Image src="/sofa_6.svg" alt='' width={150} height={150} className='text-center rounded-xl'/>
                                        </div>
                                        <div className='flex flex-row'>
                                            <div className='flex flex-col ml-4 mt-5'>
                                                <h1 className='text-lg'>Casaliving Wood</h1>
                                                <div className='flex flex-row mt-3'>
                                                    <h1 className='text-lg'>1</h1>
                                                    <h1 className='mt-[2px] ml-3'>x</h1>
                                                    <h1 className='text-[#B88E2F] mt-[2px] ml-3 font-medium'>Rs. 270,000.00</h1>
                                                </div>
                                            </div>
                                            <Image src="cancel.svg" alt='' width={20} height={20} className='ml-8'/>
                                        </div>
                                    </div>
                                <div className='flex flex-col'>
                                    <div className='flex flex-row text-lg mt-96'>
                                        <h1>Subtotal</h1>
                                        <p className='text-[#B88E2F] ml-20'>Rs. 520,000.00</p>
                                    </div>
                                    <div className='my-5'>
                                        <Divider/>
                                    </div>
                                    <div className='flex flex-row'>
                                        <Link href="/cart"><h1 className='border border-black rounded-3xl w-[90px] h-[30px] mt-2 flex justify-center items-center font-normal'>Cart</h1></Link>
                                        <Link href="/checkout"><h1 className='border border-black rounded-3xl w-[110px] h-[30px] mt-2 flex justify-center items-center font-normal ml-4'>Checkout</h1></Link>
                                        <Link href="/product-compare"><h1 className='border border-black rounded-3xl w-[130px] h-[30px] mt-2 flex justify-center items-center font-normal ml-4'>Comparison</h1></Link>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </div>


        <div className='py-10 bg-[#F9F1E7] pl-40 flex flex-row'>
          <h1 className='text-[#9F9F9F] text-lg mt-2'>Home</h1>
          <Image src="/right_arrow.svg" alt='' width={10} height={10} className='ml-6'/>
          <h1 className='text-[#9F9F9F] text-lg ml-7 mt-2'>Shop</h1>
          <Image src="/right_arrow.svg" alt='' width={10} height={10} className='ml-7'/>
          <div className="vl ml-9 mt-1"></div>
          <h1 className='mt-3 text-lg ml-14'>Asgaard sofa</h1>
        </div>

        <div className='flex flex-row'>
          <div className='flex flex-col'> 
            <div className='w-20 h-24 bg-[#F9F1E7] rounded-xl mt-12 ml-40'>
              <Image src="/sofa_1.svg" alt='' width={150} height={150} className='text-center'/>
            </div>
            <div className='w-20 h-24 bg-[#F9F1E7] rounded-xl mt-12 ml-40'>
              <Image src="/sofa_2.svg" alt='' width={150} height={150} className='text-center'/>
            </div>
            <div className='w-20 h-24 bg-[#F9F1E7] rounded-xl mt-12 ml-40'>
              <Image src="/sofa_3.svg" alt='' width={150} height={150} className='text-center'/>
            </div>
            <div className='w-20 h-24 bg-[#F9F1E7] rounded-xl mt-12 ml-40'>
              <Image src="/sofa_4.svg" alt='' width={150} height={150} className='text-center'/>
            </div>
          </div>

          <div className='bg-[#F9F1E7] w-[550px] h-[600px] ml-12 mt-12 rounded-xl'>
            <Image src="/sofa_5.svg" alt='' width={900} height={900} className='mt-12 px-0'/>
          </div>

          <div className='flex flex-col'>
            <h1 className='text-5xl ml-28 mt-12'>Asgaard sofa</h1>
            <h2 className='text-[#9F9F9F] text-2xl mt-5 ml-28'>Rs. 250,000.00</h2>
            <div className='flex flex-row'>
              <Image src="/group_88.svg" alt='' width={150} height={150} className='ml-28 mt-5'/>
              <div className="vl ml-9 mt-6"></div>
              <h1 className='text-[#9F9F9F] ml-8 mt-8 '>5 Customer Review</h1>
            </div>
            
            <p className='pl-28 mt-5 w-[650px]'>Setting the bar as one of the loudest speakers in its class,
              the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
            
            <h1 className='ml-28 mt-9 text-[#9F9F9F]'>Size</h1>
            <div className='flex flex-row'>
              <h1 className='h-8 w-8 bg-[#B88E2F] text-white ml-28 mt-3 rounded-lg text-center'>L</h1>
              <h2 className='h-8 w-8 bg-[#F9F1E7] ml-8 mt-3 rounded-lg text-center'>XL</h2>
              <h3 className='h-8 w-8 bg-[#F9F1E7] ml-8 mt-3 rounded-lg text-center'>XS</h3>
            </div>

            <h1 className='text-[#9F9F9F] ml-28 mt-9'>Color</h1>
            <div className='flex flex-row'>
              <div className='w-8 h-8 bg-[#816DFA] ml-28 mt-3 rounded-full'></div>
              <div className='w-8 h-8 bg-black ml-8 mt-3 rounded-full'></div>
              <div className='w-8 h-8 bg-[#B88E2F] ml-8 mt-3 rounded-full'></div>
            </div>

            <div className='flex flex-row'>
              <Image src="/group_93.svg" alt='' width={130} height={70} className='ml-28 mt-10'/>
              <Link href="/cart">
                <div className='mt-10 pt-5 pb-5 ml-6 w-[220px] border border-black rounded-xl justify-center items-center text-center'>
                  <h1 className='text-xl'>Add To Cart</h1>
                </div>
              </Link>
              <Link href="/product-compare">
                <div className='mt-10 pt-5 pb-5 ml-6 w-[220px] border border-black rounded-xl justify-center items-center text-center'>
                  <h1 className='text-xl'>+ Compare</h1>
                </div>
              </Link>
            </div>

            <div className='ml-28 mt-9'>
              <Divider/>
            </div>

            <div className='flex flex-col mt-9 ml-28 text-[#9F9F9F]'>
              <div className='flex flex-row'>
                <h1 className='text-lg'>SKU </h1>
                <h1 className='text-lg ml-20'>:</h1>
                <h1 className='text-lg ml-2'>SS001</h1>
              </div>
              <div className='flex flex-row mt-3'>
                <h1 className='text-lg'>Category </h1>
                <h1 className='text-lg ml-8'>:</h1>
                <h1 className='text-lg ml-2'>Sofas</h1>
              </div>
              <div className='flex flex-row mt-3'>
                <h1 className='text-lg'>Tags </h1>
                <h1 className='text-lg ml-[74px]'>:</h1>
                <h1 className='text-lg ml-2'>Sofa, Chair, Home, Shop</h1>
              </div>
              <div className='flex flex-row mt-3'>
                <h1 className='text-lg'>Share </h1>
                <h1 className='text-lg ml-[74px]'>:</h1>
                <div className='text-lg ml-2 flex flex-row space-x-7'>
                  <Image src="/facebook.svg" alt='' width={30} height={30} className='ml-3'/>
                  <Image src="/linkedin.svg" alt='' width={30} height={30} className='ml-3'/>
                  <Image src="/twitter.svg" alt='' width={35} height={35} className='ml-3'/>
                </div>
              </div>
            </div>
          </div>

        </div>
        
        <div className='pt-10'>
          <Divider/>
        </div>

        <div className='flex flex-col'>
          <div className='flex flex-row justify-center text-2xl space-x-28 py-16'>
            <h1>Description</h1>
            <h1 className='text-[#9F9F9F]'>Additional Information</h1>
            <h1 className='text-[#9F9F9F]'>Reviews [5]</h1>
          </div>
          <p className='ml-72 text-lg text-[#9F9F9F] w-[1200px]'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall,
            unplugs the chords, and takes the show on the road.</p>
          <p className='ml-72 text-lg text-[#9F9F9F] w-[1200px] mt-12'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class,
            the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
          <Image src="/Group_109.svg" alt='' width={1920} height={500} className='my-16'/>
        </div>

        <div className='py-6'>
          <Divider/>
        </div>

        <div className='flex justify-center mt-14 mb-10'>
          <h1 className='text-3xl'>Related Products</h1>
        </div>

        <div className='flex flex-col justify-center'>
          <div className="flex flex-row gap-12 justify-center">  
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

        <div className='flex justify-center mt-12 mb-28'>
          <button className="bg-white text-[#B88E2F] h-16 w-64 border border-[#B88E2F] ">Show More</button>
        </div>

          <Divider/>

          <Footer/>

    </div>
  )
}

const Divider = () => {
    return (
        <hr
        style={{ borderTop: "2px solid lightgrey" }}
        ></hr>
    );
};

export default Cart_Sidebar