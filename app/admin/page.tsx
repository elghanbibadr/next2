// "use client"
import { DataTableDemo } from "@/components/TestTable";

import { getTools } from "@/actions";


export default  async function  dashboard() {
   const toolsData=await getTools()


  return (
    <> 
    <div className="container mx-auto py-10">
      <DataTableDemo data={toolsData}/> 
    </div>
    </>
  );
}

