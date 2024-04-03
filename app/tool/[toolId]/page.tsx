
import { supabase } from "@/supabase/supabase";
import Image from "next/image";

export default async function Page({ params }: { params: { toolId: string } }) {
    let { data, error }: {data:any,error:any} = await supabase
   .from('tools')
   .select('*')
   .eq('id',params.toolId)
  



   console.log("data",data)

    return  <div>
        
        <div className="md:grid p-10 justify-center items-center md:grid-cols-2">
        
            <div className="px-5 mx-auto mt-2">
        
        <h5 className="mb-2 text-lg lowercase font-semibold tracking-tight text-gray-900 dark:text-white">@{data[0].username}</h5>
        
        <p className="mt-4 text-sm  text-gray-700 font-light leading-7 tracking-wide text-dark-200 lg:text-lg lowercase md:w-[90%]">
        {data[0].tooldescription}
        {/* The All-in-one Tailwind CSS Admin Dashboard Template. The all-in-one admin dashboard template for creating stunning and fully responsive web applications. Mosaic is built on top of Tailwind CSS and coded in HTML, React, Vue, and Laravel. */}
        </p>
        <div className="inline-flex items-center px-8 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-2xl mt-4 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        {data[0].toolcategory}
        
        </div>
        </div>
          <Image width={100} height={100} 	quality={100} className="rounded object-cover mt-6 md:mt-1 lg:w-[80%]" src={data[0]?.toolImageUrl} alt="image icon" />
        </div>
    </div>
  }