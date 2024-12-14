import Header from "@/components/header";
import Intro from "@/components/intro";
import Image from "next/image";
import Present_1 from "@/public/image_1.svg"
import Present_2 from "@/public/image_2.svg"
import Present_3 from "@/public/image_3.svg"
import { Card, CardTitle } from "@/components/ui/card";
import Featured_1 from "@/public/featured_1.svg"
import Featured_2_5 from "@/public/featured_2_5.svg"
import Featured_2 from "@/public/featured_2.svg"
import Featured_3 from "@/public/featured_3.svg"
import Featured_4 from "@/public/featured_4.svg"
import Featured_5 from "@/public/featured_5.svg"
import Featured_6 from "@/public/featured_6.svg"
import Featured_7 from "@/public/featured_7.svg"
import Products from "@/public/Products.svg"
import Funiro from "@/public/Funiro.svg"
import Footer from "@/components/footer";


export default function Home() {
  return (
    <div className="poppins">
      <Header/>

      <Intro/>

      <div className="bg-white flex flex-col items-center my-16">
        <h1 className="text-4xl">Browse The Range</h1>
        <p className="text-lg mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="flex flex-row gap-12 mt-12">
          <Image src={Present_1} alt="" width={430} height={540} className="rounded-xl"/>
          <Image src={Present_2} alt="" width={430} height={540} className="rounded-xl"/>
          <Image src={Present_3} alt="" width={430} height={540} className="rounded-xl"/>
        </div>
        <div className="flex flex-row gap-[400px] mt-12 text-2xl font-semibold">
          <h1>Dining</h1>
          <h1>Living</h1>
          <h1>Bedroom</h1>
        </div>

        <h1 className="text-[40px] font-bold mt-28">Our Products</h1>
        
        <div className="flex flex-row gap-12 mt-12">

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
        <div className="flex flex-row gap-12 mt-16">
          <Card className="rounded-none bg-[#F4F5F7]">
              <Image src={Featured_4} alt="" width={380} height={300}/>
              <CardTitle className="text-[24px] ml-3 mt-3">Grifo</CardTitle>
              <p className="ml-3 mb-3 mt-2 text-sm text-gray-400">Night lamp</p>
              <div className="ml-3 flex flex-row gap-4">
              <p className="mb-4 font-semibold text-[20px]">Rp 1.500.000</p>
              </div>
          </Card>

          <Card className="rounded-none bg-[#F4F5F7]">
              <Image src={Featured_5} alt="" width={380} height={300}/>
              <CardTitle className="text-[24px] ml-3 mt-3">Muggo</CardTitle>
              <p className="ml-3 mb-3 mt-2 text-sm text-gray-400">Small mug</p>
              <div className="ml-3 flex flex-row gap-4">
              <p className="mb-4 font-semibold text-[20px]">Rp 150.000</p>
              </div>
          </Card>

          <Card className="rounded-none bg-[#F4F5F7]">
              <Image src={Featured_6} alt="" width={380} height={300}/>
              <CardTitle className="text-[24px] ml-3 mt-3">Cute bed set</CardTitle>
              <p className="ml-3 mb-3 mt-2 text-sm text-gray-400">Rp 7.000.000</p>
              <div className="ml-3 flex flex-row gap-4">
              <p className="mb-4 font-semibold text-[20px]">Rp 7.000.000</p>
              <p className="mt-1 text-[#B0B0B0] text-[16px]"><s>Rp 14.000.000</s></p>
              </div>
          </Card>

          <Card className="rounded-none bg-[#F4F5F7]">
              <Image src={Featured_7} alt="" width={380} height={300}/>
              <CardTitle className="text-[24px] ml-3 mt-3">Potty</CardTitle>
              <p className="ml-3 mb-3 mt-2 text-sm text-gray-400">Minimalist flower pot</p>
              <div className="ml-3 flex flex-row gap-4">
              <p className="mb-4 font-semibold text-[20px]">Rp 500.000</p>
              </div>
          </Card>
        </div>
        <div>
          <button className="bg-white text-[#B88E2F] h-16 w-64 mt-24 border border-[#B88E2F] ">Show More</button>
        </div>
      </div>

      <div className="flex justify-between items-center h-screen bg-[#FCF8F3] ">
          <div className="w-1/4 mx-36">
            <h1 className="text-5xl font-bold w-[500px]">50+ Beautiful rooms inspiration</h1>
            <p className="text-lg mt-4 text-[#616161] w-[490px] ">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
            <button className="bg-[#B88E2F] text-white h-12 w-44 mt-9 ">Explore More</button>
          </div>
          <div className="w-3/4">
            <Image src={Products} alt="" width={1920} height={1200}/>
          </div>
      </div>

      <div className="bg-white flex flex-col items-center my-16">
        <h1 className="text-[20px] text-[#616161] font-semibold ">Share your setup with</h1>
        <h2 className="text-[40px] font-bold ">#FuniroFurniture</h2>
        <Image src={Funiro} alt="" width={1920} height={1200} className=""/>
      </div>

      <Footer/>
    </div>
  );
}
