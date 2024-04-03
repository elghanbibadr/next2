"use client"

import { Tools } from "./TestTable";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";



export default function ToolsList({ tools }: { tools: any }) {



    console.log(tools)
    return (
        <div className="md:col-span-3 row-start-1 ">


            <div className=" xs:grid xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-3 mt-4 md:mx-6">
                {tools?.map((item: Tools) => {
                    { console.log(item.toolImageUrl) }

                    return (

                        <Link key={item.id} href={`tool/${item.id}`}>

                            <div  className="max-w-sm mb-4 pb-5 bg-white  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <img className="h-[240px] mb-2 rounded-lg object-cover w-full" src={item.toolImageUrl} alt="" />

                                <div className="px-5 mt-2">

                                    <h5 className="mb-2 text-lg lowercase font-semibold tracking-tight text-gray-900 dark:text-white">@{item.username}</h5>

                                    <p className="mb-3 font-normal text-sm text-blue-700 underline font-medium dark:text-gray-400">
                                        {item.websiteurl}
                                    </p>
                                    <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                                        {item.tooldescription}
                                    </p>
                                    <div className="inline-flex items-center px-5 py-1 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        {item.toolcategory}

                                    </div>
                                    {item.isToolSponsored && <span className="capitalize w-fit text-xs rounded-md  inline-flex  ml-3 font-medium p-1 px-6  bg-orange-500/10 text-orange-700" >Sponsored</span>}

                                </div>
                            </div>
                        </Link>

                    );
                })}
            </div>
        </div>
    );
}
