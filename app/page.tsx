
import { getTools } from "@/actions"
import { auth, currentUser } from "@clerk/nextjs";
import Hero from "@/components/hero/Hero";
import DiscoverOurTools from "@/components/discoverOurTool/discoverOurTool";




const Home =  async ({
  searchParams,
}: {
  searchParams?: {
    category?:any;
  };
}) => {
  console.log(searchParams)
  const categoryList:any = searchParams?.category  ;

  const toolsData=await getTools()
  const filteredByStatus=toolsData?.filter(item => item.toolstatus==="approved")
  const filteredData = !categoryList  ? filteredByStatus : filteredByStatus?.filter(item => typeof categoryList==='string' ? item.toolcategory === categoryList : categoryList.includes(item.toolcategory));

  

  const { userId } = auth();

  const user = await currentUser()
  console.log("userrrr",user?.publicMetadata.admin)

  
  return (
         <div>
           <Hero/>
           <DiscoverOurTools tools={filteredData} />
         </div>

  )
}

export default  Home