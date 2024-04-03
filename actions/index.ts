'use server'
import { supabase } from "@/supabase/supabase"


import { revalidatePath } from 'next/cache'
import { stripe } from "@/lib/stripe";
import { redirect } from "next/navigation";




export const createCheckoutSession = async (toolId:number,priceId:string,planType:string): Promise<any> => {
    try {
      // Create a Stripe Checkout session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price:priceId,
            quantity:1
    
          },
        ],
        mode: "subscription",
        success_url: `http://localhost:3000/success?tool_id=${toolId}&plan=${planType}`, 
        cancel_url: `http://localhost:3000`,
      });
     
  
  
      session.url && redirect(session.url);
  
  
    } catch (error) {
      console.error("Error creating Checkout session:", error);
      throw error;
    }
  };
  



  export async function addTool(toolId:string) {
    
 
    }
    



export async function deleteTool(toolId:string) {
    
const { error } = await supabase
.from('tools')
.delete()
.eq('id', toolId)

if (!error){
    revalidatePath("/dashboard")
}
return {error}
}



export async function getTools() {
  console.log("datas being fetched",Math.random())
    let { data, error } = await supabase
        .from('tools')
        .select('*')
        // .eq('toolstatus', 'Approved'); 

        data?.sort((a, b) => {
          if (a.isToolSponsored && !b.isToolSponsored) {
              return -1;
          } else if (!a.isToolSponsored && b.isToolSponsored) {
              return 1;
          } else {
              return 0;
          }
      });
  

        revalidatePath('/')
     return  data
}



export async function approveTool(toolToApproveId:string,newStatus:String){
    console.log(toolToApproveId)
const {  error } = await supabase
.from('tools')
.update({toolstatus: newStatus })
.eq('id',toolToApproveId)
.select()


if (!error){
    revalidatePath("/dashboard")
}

return {error}

}


export async function updateFilters(formdata:FormData) {
  console.log(formdata)
  console.log("clicked")
}



export async function editTool(toolId:string,values:any){
  const { data, error } = await supabase
  .from('tools')
  .update(values)
  .eq('id', toolId)
  .select()

  if (!error){
    revalidatePath("/dashboard")
  }
// }else{
//   console.log('error updating a tool',error.message)
// }

return {error,data}
}