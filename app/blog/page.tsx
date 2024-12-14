import React from 'react'
import Header from '@/components/header'
import Image from 'next/image'
import Icon from '@/public/Meubel_House_Logos-05.svg'
import Search_Icon from '@/public/icons_search.svg'
import Footer from '@/components/footer'

const Blog = () => {
  return (
    <div className='poppins'>
        <Header/>
        <div className='hero'>
            <Image src="/shop_1.svg" alt='' fill={true} className='bg-img '/>
            <div className='flex flex-col items-center py-32'>
            <Image src={Icon} alt="" width={80} height={80} className='mb-2'/>
                <h1 className='text-5xl font-bold'>Blog</h1>
                <div className='flex flex-row pt-6'>
                    <h1 className='text-lg font-medium'>Home </h1>
                    <Image src="/right_arrow.svg" alt="" width={10} height={10} className="ml-2" />
                    <h1 className='text-lg ml-2 font-light'> Blog</h1>
                </div>
            </div>
        </div>

        <div className='flex flex-row'>
            <div className='w-2/3 flex flex-col ml-52 mt-40'>
                <Image src="/rectangle_68.svg" alt='' width={1000} height={500} className=''/>
                <div className='flex flex-row mt-6 ml-3'>
                    <Image src="/person.svg" alt='' width={20} height={20} className='mr-3'/>
                    <p className='text-lg text-[#9F9F9F]'>Admin</p>
                    <Image src="/calender.svg" alt='' width={20} height={20} className='mr-3 ml-10'/>
                    <p className='text-lg text-[#9F9F9F]'>14 Oct 2022</p>
                    <Image src="/tag.svg" alt='' width={20} height={20} className='mr-3 ml-10'/>
                    <p className='text-lg text-[#9F9F9F]'>Wood</p>
                </div>

                <h1 className='text-3xl font-medium mt-10'>Going all-in with millennial design</h1>
                <p className='text-[#9F9F9F] mt-5 mr-32'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero.
                Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>

                <h1 className='text-lg mt-14'>Read more</h1>
                <div className='my-2 w-24'> 
                    <Divider/>
                </div>

                <div className='mt-28'>
                    <Image src="/rectangle_67.svg" alt='' width={1000} height={500} className=''/>
                    <div className='flex flex-row mt-6 ml-3'>
                        <Image src="/person.svg" alt='' width={20} height={20} className='mr-3'/>
                        <p className='text-lg text-[#9F9F9F]'>Admin</p>
                        <Image src="/calender.svg" alt='' width={20} height={20} className='mr-3 ml-10'/>
                        <p className='text-lg text-[#9F9F9F]'>14 Oct 2022</p>
                        <Image src="/tag.svg" alt='' width={20} height={20} className='mr-3 ml-10'/>
                        <p className='text-lg text-[#9F9F9F]'>Handmade</p>
                    </div>

                    <h1 className='text-3xl font-medium mt-10'>Exploring new ways of decorating</h1>
                    <p className='text-[#9F9F9F] mt-5 mr-32'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero.
                    Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>

                    <h1 className='text-lg mt-14'>Read more</h1>
                    <div className='my-2 w-24'> 
                        <Divider/>
                    </div>

                </div>

                <div className='mt-28'>
                    <Image src="/rectangle_66.svg" alt='' width={1000} height={500} className=''/>
                    <div className='flex flex-row mt-6 ml-3'>
                        <Image src="/person.svg" alt='' width={20} height={20} className='mr-3'/>
                        <p className='text-lg text-[#9F9F9F]'>Admin</p>
                        <Image src="/calender.svg" alt='' width={20} height={20} className='mr-3 ml-10'/>
                        <p className='text-lg text-[#9F9F9F]'>14 Oct 2022</p>
                        <Image src="/tag.svg" alt='' width={20} height={20} className='mr-3 ml-10'/>
                        <p className='text-lg text-[#9F9F9F]'>Handmade</p>
                    </div>

                    <h1 className='text-3xl font-medium mt-10'>Handmade pieces that took time to make</h1>
                    <p className='text-[#9F9F9F] mt-5 mr-32'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero.
                    Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>

                    <h1 className='text-lg mt-14'>Read more</h1>
                    <div className='my-2 w-24'> 
                        <Divider/>
                    </div>
                </div>

                <div className='flex flex-row justify-center my-32 ml-96'>
                <button className='w-16 h-16 bg-[#B88E2F] rounded-xl text-white'>1</button>
                <button className='w-16 h-16 bg-[#F9F1E7] rounded-xl ml-12'>2</button>
                <button className='w-16 h-16 bg-[#F9F1E7] rounded-xl ml-12'>3</button>
                <button className='w-24 h-16 bg-[#F9F1E7] rounded-xl ml-12'>Next</button>
                </div>

            </div>

            <div className='w-1/3 mt-40'>
                <div className='w-[320px] h-[60px] border-2 rounded-xl flex justify-end'>
                    <Image src={Search_Icon} alt='' width={20} height={20} className='mr-5'/>
                </div>

                <h1 className='text-2xl font-medium mt-14 ml-8'>Categories</h1>
                <div className='text-lg text-[#9F9F9F] flex flex-row mt-10 ml-8'>
                    <h1>Crafts</h1>
                    <p className='ml-48'>2</p>
                </div>
                <div className='text-lg text-[#9F9F9F] flex flex-row mt-10 ml-8'>
                    <h1>Design</h1>
                    <p className='ml-[188px]'>8</p>
                </div>
                <div className='text-lg text-[#9F9F9F] flex flex-row mt-10 ml-8'>
                    <h1>Handmade</h1>
                    <p className='ml-[150px]'>7</p>
                </div>
                <div className='text-lg text-[#9F9F9F] flex flex-row mt-10 ml-8'>
                    <h1>Interior</h1>
                    <p className='ml-48'>1</p>
                </div>
                <div className='text-lg text-[#9F9F9F] flex flex-row mt-10 ml-8'>
                    <h1>Wood</h1>
                    <p className='ml-[205px]'>6</p>
                </div>

                <h1 className='text-2xl font-medium ml-8 mt-40'>Recent Posts</h1>

                <div className='flex flex-row'>
                    <Image src="/rectangle_65.svg" alt='' width={100} height={100} className='ml-8 mt-10'/>
                    <div className='flex flex-col mt-12 ml-4'>
                        <h1 className=' w-52'>Going all-in with millennial design</h1>
                        <p className='text-[#9F9F9F] mt-2'>03 Aug 2022</p>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <Image src="/rectangle_64.svg" alt='' width={100} height={100} className='ml-8 mt-10'/>
                    <div className='flex flex-col mt-12 ml-4'>
                        <h1 className=' w-52'>Exploring new ways of decorating</h1>
                        <p className='text-[#9F9F9F] mt-2'>03 Aug 2022</p>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <Image src="/rectangle_63.svg" alt='' width={100} height={100} className='ml-8 mt-10'/>
                    <div className='flex flex-col mt-12 ml-4'>
                        <h1 className=' w-52'>Handmade pieces that took time to make</h1>
                        <p className='text-[#9F9F9F] mt-2'>03 Aug 2022</p>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <Image src="/rectangle_62.svg" alt='' width={100} height={100} className='ml-8 mt-10'/>
                    <div className='flex flex-col mt-12 ml-4'>
                        <h1 className=' w-32'>Modern home in Milan</h1>
                        <p className='text-[#9F9F9F] mt-2'>03 Aug 2022</p>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <Image src="/rectangle_61.svg" alt='' width={100} height={100} className='ml-8 mt-10'/>
                    <div className='flex flex-col mt-12 ml-4'>
                        <h1 className=' w-32'>Colorful office redesign</h1>
                        <p className='text-[#9F9F9F] mt-2'>03 Aug 2022</p>
                    </div>
                </div>

            </div>

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

const Divider = () => {
    return (
        <hr
            style={{ borderTop: "3px solid lightgrey" }}
        ></hr>
    );
};

export default Blog