'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import ToolsList from "../toolsList"
import { Checkbox } from "@/components/ui/checkbox"
import img from "../../assets/discoverourtoolsbg.png"
import Image from "next/image"
export default function DiscoverOurTools({ tools }: { tools: any }) {
  const searchParams = useSearchParams()
  const pathname = usePathname();
  const router = useRouter();
  

  const params = new URLSearchParams(searchParams);
  const existingCategories = params.getAll('category');


  const handleCategorySelected = (value: string) => {
    if (existingCategories.includes(value)) {
      return;
    }
    // Add the new category to the URL
    params.append('category', value);
   
  router.replace( `${pathname}?${params.toString()}`, { scroll: false });
  };
  



  const handleCategoryUnchecked = (value: string) => {
    params.delete("category", value)
    router.replace( `${pathname}?${params.toString()}`, { scroll: false });


  }
  return <div className=" p-2">
    <h2 className="mb-4 text-3xl mt-20 text-center font-semibold  md:text-4xl">Discover Available<span className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/6390526ac2a607693620c97b_Rectangle%2010.svg')] bg-cover bg-center px-4 text-white">Tools”</span>
    </h2>
    <div className=" ourToolWrraper md:grid md:grid-cols-4 md:gap-6 md:p-8 p-3 rounded-xl m-4 mt-10">
      <div className="bg-white row-start-1 md:h-[300px] rounded-xl p-6 w-full md:w-[200px] lg:w-[270px]">
        <h3 className="font-semibold mb-6">Choose a category</h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="">
            <div className="flex gap-2">
              <Checkbox id="category-1" onCheckedChange={(checked) => checked ? handleCategorySelected("category-1") : handleCategoryUnchecked("category-1")} />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="category-1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Category-1
                </label>
            </div>


            </div>
            <div className="flex gap-2 mt-3">
              <Checkbox id="category-2" onCheckedChange={(checked) => checked ? handleCategorySelected("category-2") : handleCategoryUnchecked("category-2")} />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="category-2"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Category-2
                </label>
            </div>


            </div>
            <div className="flex gap-2 mt-3">
              <Checkbox className="relative" id="category-3"  onCheckedChange={(checked) => checked ? handleCategorySelected("category-3") : handleCategoryUnchecked("category-3")} />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="category-1"
                  className="text-sm mlabel font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Category-3
                </label>
            </div>
            </div>

           
          </div>
        </div>
      </div>
     
         {tools?.length !== 0 && <ToolsList tools={tools} />}
        <div className="col-span-2  row-start-1">
          {tools?.length === 0 && <p className="mx-auto  self-center md:mt-32 text-white text-lg  text-center">No result ...</p>}
        </div>
      
    </div>
  </div>

}