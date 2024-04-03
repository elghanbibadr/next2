import Link from "next/link";
import Loader from "../ui/loader";
import Image from "next/image";

export default function Hero() {
    return (
  <section>
  
    <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
  
      <div className="grid grid-cols-1 items-center gap-12 sm:gap-20 lg:grid-cols-2 lg:gap-28">
     
        <div className="max-w-[720px] lg:max-w-[842px]">
          <h1 className="mb-4 text-4xl font-semibold md:text-6xl">Receive new tools published  <span className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/6390526ac2a607693620c97b_Rectangle%2010.svg')] bg-cover bg-center px-4 text-white">every month”</span>
          </h1>
          <p className="mb-6 max-w-[528px] text-xl text-[#636262] md:mb-10 lg:mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus</p>
          <Link href="/addTool" ><button className="inline-block rounded-xl bg-black px-8 py-4 text-center font-semibold text-white [box-shadow:rgb(19,_83,_254)_6px_6px]">Post a tool</button></Link>
        </div>
        {/* Image Div */}
        <div className="relative mx-auto h-full max-h-[640px] w-[90%] max-w-[640px] lg:w-full lg:max-w-[480px]">
          <Image  width={300} height={300} src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63915d1cb654acd795a72b12_magicpattern-ixxjruC7Gg4-unsplash.jpg" alt="" className="h-full w-full max-w-[800px] object-cover" />
          {/* Testimonial Div */}
          <div className="absolute -left-[7.5%] bottom-[10%] right-auto top-auto flex h-28 w-80 flex-col items-start justify-center border border-solid border-black bg-white px-5 py-3 [box-shadow:rgb(0,_0,_0)_4px_4px] lg:left-[-45%]">
            {/* Testimonial Text */}
            <div className="mb-4 flex h-auto items-start">
              {/* <Image  width={30} height={30} src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63906655aa174e025702f043_Group%20(1).svg" alt="" className="mr-2 inline-block" /> */}
              <p className="pt-1.5 text-sm text-[#636262]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
            </div>
            <div className="flex h-auto w-full items-center justify-between">
              {/* Author */}
              <div className="flex items-center">
                <Image  width={30} height={30} src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905430069fb027f83abb71_Ellipse-3.jpg" alt="" className="mr-2 inline-block h-8" />
                <div>
                  <p className="text-sm font-bold">Harry Parker</p>
                  <p className="text-sm">Marketing</p>
                </div>
              </div>
              {/* Stars Review */}
              <div>
                <Image  width={30} height={30} src="https://assets.website-files.com/63904f663019b0d8edf8d57c/6390676b385b0525c99b09a8_Vector.svg" alt="" className="mr-1 inline-block w-3.5" />
                <Image  width={30} height={30} src="https://assets.website-files.com/63904f663019b0d8edf8d57c/6390676b385b0525c99b09a8_Vector.svg" alt="" className="mr-1 inline-block w-3.5" />
                <Image  width={30} height={30} src="https://assets.website-files.com/63904f663019b0d8edf8d57c/6390676b385b0525c99b09a8_Vector.svg" alt="" className="mr-1 inline-block w-3.5" />
                <Image  width={30} height={30} src="https://assets.website-files.com/63904f663019b0d8edf8d57c/6390676b385b0525c99b09a8_Vector.svg" alt="" className="mr-1 inline-block w-3.5" />
                <Image  width={30} height={30} src="https://assets.website-files.com/63904f663019b0d8edf8d57c/6390676b385b0525c99b09a8_Vector.svg" alt="" className="mr-1 inline-block w-3.5" />
              </div>
            </div>
          </div>
          {/* Testimonial Div */}
          <div className="absolute -left-[7.5%] -right-[5%] bottom-1/2 top-auto flex h-28 w-80 flex-col items-start justify-center border border-solid border-black bg-white px-5 py-3 [box-shadow:rgb(0,_0,_0)_4px_4px] sm:bottom-[35%] lg:left-auto lg:right-[-10%]">
            {/* Testimonial Text */}
            <div className="mb-4 flex h-auto items-start">
              <Image  width={30} height={30} src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63906655aa174e025702f043_Group%20(1).svg" alt="" className="mr-2 inline-block" />
              <p className="pt-1.5 text-sm text-[#636262]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
            </div>
            <div className="flex h-auto w-full items-center justify-between">
              {/* Author */}
              <div className="flex items-center">
                <Image  width={30} height={30} src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905430069fb027f83abb71_Ellipse-3.jpg" alt="" className="mr-2 inline-block h-8" />
                <div>
                  <p className="text-sm font-bold">Harry Parker</p>
                  <p className="text-sm">Marketing</p>
                </div>
              </div>
              {/* Stars Review */}
              <div>

                <Image width={30} height={30} src="https://assets.website-files.com/63904f663019b0d8edf8d57c/6390676b385b0525c99b09a8_Vector.svg" alt="" className="mr-1 inline-block w-3.5" />
                <Image width={30} height={30}  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/6390676b385b0525c99b09a8_Vector.svg" alt="" className="mr-1 inline-block w-3.5" />
                <Image  width={30} height={30} src="https://assets.website-files.com/63904f663019b0d8edf8d57c/6390676b385b0525c99b09a8_Vector.svg" alt="" className="mr-1 inline-block w-3.5" />
                <Image width={30} height={30}  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/6390676b385b0525c99b09a8_Vector.svg" alt="" className="mr-1 inline-block w-3.5" />
                <Image width={300} height={300}  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/6390676b385b0525c99b09a8_Vector.svg" alt="" className="mr-1 inline-block w-3.5" />
              </div>
            </div>
          </div>
     
          <div className="absolute bottom-0 left-4 right-0 top-4 -z-10 h-full w-full -rotate-[4.5deg] bg-[#1353fe]"></div>
          <div className="absolute bottom-0 left-4 right-0 top-4 -z-10 h-full w-full -rotate-[10deg] bg-[#1353fe33]"></div>
        </div>
      </div>
    </div>


  
    <Image width={300}  height={300} src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63906ac023b5302b668e8a80_Frame%20427322870.svg" alt="" className="absolute bottom-0 left-auto right-0 top-auto w-[300px] -z-10 hidden md:bottom-auto md:left-auto md:right-0 md:top-0 md:inline-block" />
  </section>
      );
    }
  