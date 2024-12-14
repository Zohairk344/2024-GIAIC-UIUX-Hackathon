import React from 'react'
import Header from '@/components/header'
import Image from 'next/image'
import Icon from '@/public/Meubel_House_Logos-05.svg'
import Footer from '@/components/footer'

const Product_comparision = () => {
  return (
    <div className='poppins'>
        <Header/>
        <div className='hero'>
            <Image src="/shop_1.svg" alt='' fill={true} className='bg-img '/>
            <div className='flex flex-col items-center py-32'>
            <Image src={Icon} alt="" width={80} height={80} className='mb-2'/>
                <h1 className='text-5xl font-bold'>Product Comparison</h1>
                <div className='flex flex-row pt-6'>
                    <h1 className='text-lg font-medium'>Home </h1>
                    <Image src="/right_arrow.svg" alt="" width={10} height={10} className="ml-2" />
                    <h1 className='text-lg ml-2 font-light'> Comparison</h1>
                </div>
            </div>
        </div>

        <div className='flex flex-row'>
            <div className='flex flex-col ml-32 mt-20'>
                <h1 className='text-[28px] font-medium w-60'>Go to Product page for more Products</h1>
                <p className='text-xl font-medium text-[#727272] mt-6 underline'>View More</p>
            </div>
            <div className='flex flex-col ml-20 mt-16'>
                <div className='bg-[#F9F1E7] w-[350px] h-[220px] ml-16 rounded-xl'>
                    <Image src="/sofa_5.svg" alt='' width={300} height={200} className=''/>
                </div>
                <h1 className='text-2xl font-medium ml-16 mt-4'>Asgaard Sofa</h1>
                <p className='ml-16 mt-2 text-lg font-medium'>Rs. 250,000.00</p>
                <div className='flex flex-row'>
                    <h1 className='text-lg font-medium ml-16 mt-2'>4.7</h1>
                    <Image src="/group_88.svg" alt='' width={150} height={150} className='ml-3 mt-1'/>
                    <div className="vl-2 mt-2"></div>
                    <p className='text-[#9F9F9F] text-sm mt-3 ml-4'>204 Review</p>
                </div>
            </div>

            <div className='flex flex-col ml-10 mt-16'>
                <div className='bg-[#F9F1E7] w-[350px] h-[220px] ml-16 rounded-xl'>
                    <Image src="/sofa_1.svg" alt='' width={300} height={400} className=''/>
                </div>
                <h1 className='text-2xl font-medium ml-16 mt-4'>Outdoor Sofa Set</h1>
                <p className='ml-16 mt-2 text-lg font-medium'>Rs. 224,000.00</p>
                <div className='flex flex-row'>
                    <h1 className='text-lg font-medium ml-16 mt-2'>4.2</h1>
                    <Image src="/group_88.svg" alt='' width={150} height={150} className='ml-3 mt-1'/>
                    <div className="vl-2 mt-2"></div>
                    <p className='text-[#9F9F9F] text-sm mt-3 ml-4'>145 Review</p>
                </div>
            </div>

            <div className='flex flex-col'>
                <h1 className='text-2xl font-semibold mt-32 ml-32'>Add A Product</h1>
                <div className='flex pl-4 w-[250px] h-[40px] ml-32 mt-4 bg-[#B88E2F] rounded-md text-white items-center'>Choose a Product
                <Image src="/white_down.svg" alt='' width={20} height={10} className='ml-14'/>
                </div>
            </div>
        </div>

        <div className='pt-32'>
            <Divider/>
        </div>

        <div className='flex flex-row'>
            <div className='flex flex-col pt-20 ml-32'>
                <h1 className='text-3xl font-medium '>General</h1>
                <p className='text-xl pt-10'>Sales Package</p>
                <p className='text-xl pt-10'>Model Number</p>
                <p className='text-xl pt-10'>Secondary Material</p>
                <p className='text-xl pt-10'>Configuration</p>
                <p className='text-xl pt-10'>Upholstery Material</p>
                <p className='text-xl pt-10'>Upholstery Color</p>

                <h1 className='text-3xl font-medium pt-40'>Product</h1>
                <p className='text-xl pt-10'>Filling Material</p>
                <p className='text-xl pt-10'>Finish Type</p>
                <p className='text-xl pt-10'>Adjustable Headrest</p>
                <p className='text-xl pt-10 w-40'>Maximum Load Capacity</p>
                <p className='text-xl pt-10'>Origin of Manufacture</p>

                <h1 className='text-3xl font-medium pt-40'>Dimensions</h1>
                <p className='text-xl pt-10'>Width</p>
                <p className='text-xl pt-10'>Height</p>
                <p className='text-xl pt-10'>Depth</p>
                <p className='text-xl pt-10 w-40'>Weight</p>
                <p className='text-xl pt-10'>Seat Height</p>
                <p className='text-xl pt-10'>Leg Height</p>

                <h1 className='text-3xl font-medium pt-40'>Warranty</h1>
                <p className='text-xl pt-10'>Warranty Summary</p>
                <p className='text-xl pt-[70px]'>Warranty Service Type</p>
                <p className='text-xl pt-32'>Covered in Warranty</p>
                <p className='text-xl pt-[120px] w-40'>Not Covered in Warranty</p>
                <p className='text-xl pt-44'>Domestic Warranty</p>
                
            </div>

                <div className='vl-compare ml-16'></div>

            <div className='mt-[152px] ml-28'>
                <p className='text-xl'>1 sectional sofa</p>
                <p className='text-xl mt-10'>TFCBLIGRBL6SRHS</p>
                <p className='text-xl mt-10'>Solid Wood</p>
                <p className='text-xl mt-10'>L-shaped</p>
                <p className='text-xl mt-10'>Fabric + Cotton</p>
                <p className='text-xl mt-10'>Bright Grey & Lion</p>

                <p className='text-xl mt-60'>Foam</p>
                <p className='text-xl mt-10'>Bright Grey & Lion</p>
                <p className='text-xl mt-10'>No</p>
                <p className='text-xl mt-10'>280 KG</p>
                <p className='text-xl mt-16'>India</p>

                <p className='text-xl mt-60'>265.32 cm</p>
                <p className='text-xl mt-10'>76 cm</p>
                <p className='text-xl mt-10'>167.76 cm</p>
                <p className='text-xl mt-10'>45 KG</p>
                <p className='text-xl mt-10'>41.52 cm</p>
                <p className='text-xl mt-10'>5.46 cm</p>

                <p className='text-xl mt-[237px] w-60'>1 Year Manufacturing Warranty</p>
                <p className='text-xl mt-10 w-60'>For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com</p>
                <p className='text-xl mt-10 w-60'>Warranty Against Manufacturing Defect</p>
                <p className='text-xl mt-[96px] w-60'>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</p>
                <p className='text-xl mt-10 w-60'>1 Year</p>
                
                <div className='w-[215px] h-16 bg-[#B88E2F] text-white text-xl justify-center flex items-center mt-20'>Add To Cart</div>

            </div>

                <div className='vl-compare ml-32'></div>

            <div className='mt-[152px] ml-20'>
                <p className='text-xl'>1 Three Seater, 2 Single Seater</p>
                <p className='text-xl mt-10'>DTUBLIGRBL568</p>
                <p className='text-xl mt-10'>Solid Wood</p>
                <p className='text-xl mt-10'>L-shaped</p>
                <p className='text-xl mt-10'>Fabric + Cotton</p>
                <p className='text-xl mt-10'>Bright Grey & Lion</p>

                <p className='text-xl mt-60'>Matte</p>
                <p className='text-xl mt-10'>Bright Grey & Lion</p>
                <p className='text-xl mt-10'>yes</p>
                <p className='text-xl mt-10'>300 KG</p>
                <p className='text-xl mt-16'>India</p>

                <p className='text-xl mt-60'>265.32 cm</p>
                <p className='text-xl mt-10'>76 cm</p>
                <p className='text-xl mt-10'>167.76 cm</p>
                <p className='text-xl mt-10'>45 KG</p>
                <p className='text-xl mt-10'>41.52 cm</p>
                <p className='text-xl mt-10'>5.46 cm</p>

                <p className='text-xl mt-[237px] w-60'>1.2 Year Manufacturing Warranty</p>
                <p className='text-xl mt-10 w-60'>For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com</p>
                <p className='text-xl mt-10 w-60'>Warranty of the product is limited to manufacturing defects only.</p>
                <p className='text-xl mt-10 w-60'>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</p>
                <p className='text-xl mt-10 w-60'>3 Months</p>
                
                <div className='w-[215px] h-16 bg-[#B88E2F] text-white text-xl justify-center flex items-center mt-20'>Add To Cart</div>

            </div>

            <div className='vl-compare ml-24'></div>

        </div>

        <div className='bg-[#FAF3EA] py-28 flex flex-row pl-32 mt-40 mb-5'>
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
            style={{ borderTop: "1px solid lightgrey" }}
        ></hr>
    );
  };

export default Product_comparision