import React from 'react'
import Header from '@/components/header'
import Image from 'next/image'
import Icon from '@/public/Meubel_House_Logos-05.svg'
import Footer from '@/components/footer'

const Checkout = () => {
  return (
    <div className='poppins'>
        <Header/>
        <div className='hero'>
            <Image src="/shop_1.svg" alt='' fill={true} className='bg-img '/>
            <div className='flex flex-col items-center py-32'>
                <Image src={Icon} alt="" width={80} height={80} className='mb-2'/>
                <h1 className='text-5xl font-bold'>Checkout</h1>
                <div className='flex flex-row pt-6'>
                    <h1 className='text-lg font-medium'>Home </h1>
                    <Image src="/right_arrow.svg" alt="" width={10} height={10} className="ml-2" />
                    <h1 className='text-lg ml-2 font-light'> Checkout</h1>
                </div>
            </div>
        </div>

        <div className='flex flex-row'>
            <div className='w-1/2'>
                <h1 className='font-semibold text-[40px] mt-28 ml-40'>Billing details</h1>
                <div className='flex flex-row'>
                    <div className='flex flex-col'>
                        <h2 className='mt-12 ml-40 text-lg font-medium'>First Name</h2>
                        <input type="text" className='ml-40 border border-[#9F9F9F] w-56 h-[75px] mt-4 rounded-xl' />
                    </div>
                    <div>
                        <h2 className='mt-12 ml-12 text-lg font-medium'>Last Name</h2>
                        <input type="text" className='ml-12 border border-[#9F9F9F] w-56 h-[75px] mt-4 rounded-xl' />
                    </div>
                </div>

                <h2 className='mt-12 ml-40 text-lg font-medium'>Company Name (Optional)</h2>
                <input type="text" className='ml-40 border border-[#9F9F9F] w-[500px] h-[75px] mt-4 rounded-xl' />

                <h2 className='mt-12 ml-40 text-lg font-medium'>Country / Region</h2>
                <input type="text" placeholder="Sri Lanka" className='ml-40 border border-[#9F9F9F] w-[500px] h-[75px] mt-4 rounded-xl pl-10' />

                <h2 className='mt-12 ml-40 text-lg font-medium'>Street address</h2>
                <input type="text" className='ml-40 border border-[#9F9F9F] w-[500px] h-[75px] mt-4 rounded-xl pl-10' />

                <h2 className='mt-12 ml-40 text-lg font-medium'>Town / City</h2>
                <input type="text" className='ml-40 border border-[#9F9F9F] w-[500px] h-[75px] mt-4 rounded-xl pl-10' />

                <h2 className='mt-12 ml-40 text-lg font-medium'>Province</h2>
                <input type="text" placeholder='Western Province' className='ml-40 border border-[#9F9F9F] w-[500px] h-[75px] mt-4 rounded-xl pl-10' />

                <h2 className='mt-12 ml-40 text-lg font-medium'>ZIP code</h2>
                <input type="text" className='ml-40 border border-[#9F9F9F] w-[500px] h-[75px] mt-4 rounded-xl pl-10' />

                <h2 className='mt-12 ml-40 text-lg font-medium'>Phone</h2>
                <input type="text" className='ml-40 border border-[#9F9F9F] w-[500px] h-[75px] mt-4 rounded-xl pl-10' />

                <h2 className='mt-12 ml-40 text-lg font-medium'>Email address</h2>
                <input type="text" className='ml-40 border border-[#9F9F9F] w-[500px] h-[75px] mt-4 rounded-xl pl-10' />

                <input type="text" placeholder='Additional information' className='ml-40 border border-[#9F9F9F] w-[500px] h-[75px] my-24 rounded-xl pl-10' />

            </div>
            <div className='w-1/2'>
                <div className='flex flex-col'>
                    <div className='flex flex-row mt-40'>
                        <h1 className='text-2xl font-medium'>Product</h1>
                        <h1 className='text-2xl font-medium ml-[470px]'>Subtotal</h1>
                    </div>
                    <div className='flex flex-row text-lg mt-9'>
                        <h1 className='text-[#9F9F9F]'>Asgaard sofa</h1>
                        <p className='ml-2 font-medium'>X</p>
                        <p className='ml-2 font-medium'>1</p>
                        <h1 className='ml-96 font-light'>Rs. 250,000.00</h1>
                    </div>
                    <div className='flex flex-row text-lg mt-9'>
                        <h1>Subtotal</h1>
                        <h1 className='ml-[465px]'>Rs. 250,000.00</h1>
                    </div>
                    <div className='flex flex-row mt-9'>
                        <h1 className='text-lg'>Total</h1>
                        <h1 className='ml-[460px] text-2xl text-[#B88E2F] font-bold'>Rs. 250,000.00</h1>
                    </div>
                    
                    <div className='mt-12 mr-64'>
                        <Divider/>
                    </div>

                    <div className='flex flex-row'>
                        <div className='w-4 h-4 bg-black rounded-full mt-[46px]'></div>
                        <h1 className='text-lg mt-10 ml-6'>Direct Bank Transfer</h1>
                    </div>

                    <p className='text-lg font-light text-[#9F9F9F] mt-5 mr-64'>Make your payment directly into our bank account.
                        Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                    
                    <div className='flex flex-row'>
                        <div className='w-4 h-4 border bg-white rounded-full mt-[46px]'></div>
                        <h1 className='text-lg mt-10 ml-6 text-[#9F9F9F]'>Direct Bank Transfer</h1>
                    </div>

                    <div className='flex flex-row'>
                        <div className='w-4 h-4 border bg-white rounded-full mt-[46px]'></div>
                        <h1 className='text-lg mt-10 ml-6 text-[#9F9F9F]'>Cash On Delivery</h1>
                    </div>

                    <p className='text-lg font-light mt-5 mr-64'>Your personal data will be used to support your experience throughout this website,
                        to manage access to your account, and for other purposes described in our privacy policy.</p>
                    
                    <div className='mt-16 pt-5 pb-5 ml-48 w-[320px] border border-black rounded-xl justify-center items-center text-center'>
                        <h1 className='text-xl'>Place order</h1>
                    </div>
                </div>
            </div>
        </div>

        <div className='bg-[#FAF3EA] py-28 flex flex-row pl-32 mt-16 mb-5'>
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

const Divider = () => {
    return (
        <hr
            style={{ borderTop: "2px solid lightgrey" }}
        ></hr>
    );
  };

export default Checkout