import Link from 'next/link'
import React from 'react'

export default function GoBack({href}:{href:string}) {
  return (
    <Link href={href}>
        <div  className="inline-flex cursor-pointer m-6 items-center px-5 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg className="w-3.5 h-3.5   rtl:rotate-180 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          <span className='inline-block  ml-2'>Go Back </span>
         </div>
    </Link>
  )
}
