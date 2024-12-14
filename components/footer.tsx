import React from 'react'

const Footer = () => {
  return (
    <div className='poppins border border-t-2'>
        <div className='ml-40 flex flex-row mt-12'>
            <div>
                <h1 className='text-2xl font-bold'>Funiro.</h1>
                <p className='text-[#9F9F9F] text-lg w-[330px] mt-20'>400 University Drive Suite 200 Coral Gables,</p>
                <p className='text-[#9F9F9F] text-lg'>FL 33134 USA</p>
            </div>

            <div className='ml-80 space-y-12'>
                <h1 className=' text-lg text-[#9F9F9F]'>Links</h1>
                <h1 className=' text-lg'>Home</h1>
                <h1 className=' text-lg'>Shop</h1>
                <h1 className=' text-lg'>About</h1>
                <h1 className=' text-lg'>Contact</h1>
            </div>

            <div className='ml-72 space-y-12'>
                <h1 className='text-lg text-[#9F9F9F]'>Help</h1>
                <h1 className='text-lg'>Payment Options</h1>
                <h1 className='text-lg'>Returns</h1>
                <h1 className='text-lg'>Privacy Policies</h1>
            </div>

            <div className='ml-32'>
                <h1 className='text-lg text-[#9F9F9F]'>Newsletter</h1>
                <div className='flex flex-row space-x-4'>
                    <input type="email" placeholder='Enter Your Email Address' className='mt-20 border-black border-b-2 '/>
                    <h1 className='border-black mt-20 border-b-2'>SUBSCRIBE</h1>
                </div>
            </div>
        </div>
        <div className='mx-32 mt-12'>
            <Divider/>
        </div>
        <h1 className='text-lg ml-32 my-8'>2023 furino. All rights reverved</h1>
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

export default Footer