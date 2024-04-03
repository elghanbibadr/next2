"use client"
import { supabase } from '@/supabase/supabase';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams);
    const toolId = params.get('tool_id');
    const planType = params.get('plan');


    useEffect( ()=>{
      console.log("running")
      console.log('plan',planType)
      console.log('id',toolId)
        if(!toolId)return
        const updateTool=async ()=>{
            const { data, error } = await supabase
      .from('tools')
      .update({isToolSponsored:true,Plan:planType })
      .eq('id', toolId)
      .select()
      
      if(error){
        console.log(error)
      }
        }

        updateTool()
    },[toolId,planType])


  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="bg-white rounded-md p-6  md:mx-auto">
        <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
            <path fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
            </path>
        </svg>
        <div className="text-center text-gray-600">
            <h3 className="md:text-2xl text-base mb-10 text-gray-900 font-semibold text-center">Payment Done!</h3>
            <p className=" my-2 ">Thank you for completing your secure online payment.</p>
            <p className='w-[90%] mx-auto text-center'> Your Tool will be available as soon as our admins approve its   Have a great day!  </p>
            <div className="py-10 text-center">
                <Link href="/" className="px-12 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                    GO BACK 
               </Link>
            </div>
        </div>
    </div>
  </div>
  );
}
