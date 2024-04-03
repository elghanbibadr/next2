
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./form";
import { Input } from "./input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./dialog";
import { Button } from "./button";
import { z } from "zod";
import toast from "react-hot-toast";
import { approveTool, deleteTool, editTool } from "@/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Tools } from "../TestTable";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./dropdown-menu";

import { useState } from "react";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";







export const formSchema = z.object({
    username: z.string().min(2, {
      message: "Tool name must be at least 2 characters.",
    }),
    email: z.string().email(),
    websiteurl: z.string().min(6, {
      message: "website url should be at least 6 character",
    }).nonempty({
      message: "Website URL is required.",
    }),
    tooldescription: z.string().max(120, {
      message: "description should not be more than 120 word",
    }).nonempty({
      message: "Website URL is required.",
    }),
    toolcategory: z.enum(["category-1", "category-2", "category-3"]),

   
  });
export default function EditToolForm({tool}:{tool:Tools}){


  console.log(tool.id)
  const [open,setIsOpen]=useState(false)
    const form= useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: tool.email,
          username:tool.username,
          websiteurl:tool.websiteurl,
          tooldescription:tool.tooldescription,
          toolcategory:tool.toolcategory,
        },
      });



    const handleSubmit = async (values: z.infer<typeof formSchema>) => {

  
        const result=  formSchema.safeParse(values);
       
        console.log("updated values",values)
        if(result.success){
          console.log(result.success)
          // setIsopen(false)
        }
      
        if (tool.websiteurl === values.websiteurl && tool.tooldescription ===values.tooldescription && tool.toolcategory ===values.toolcategory ) {
          return  toast.error('nothing changed')
         }
     
        const {error}= await editTool(tool.id,values)
        
         if(!error){
          toast.success('tool updated successfuly')
         }else{
          toast.error('something went wrong  try later!')
         }
        
    
        }



        

      const deleteToolHandler=async (id:string)=>{
         
        console.log('tool id')
         const {error}= await deleteTool(id)

         if(!error){
          toast.success('tool Deleted Successfully')
         }else{
          console.log(error.message)
          toast.error('something went wrong  try later!')
         }
      }


      const changeToolStatus=async (id:string,newStatus:string) => {
        const {error} =await approveTool(id,newStatus)
        
        if(!error){
          toast.success('Tool Status Successfully Changed')
         }else{
          toast.error('something went wrong  try later!')
         }
      }

  

      console.log("tool",tool)
    return(
          

      <Dialog open={open} onOpenChange={setIsOpen}    >

         
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" >
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
       {tool.toolstatus ==='pending' &&   <DropdownMenuItem
          className="cursor-pointer"
            onClick={() => changeToolStatus(tool.id,'approved')}
          >
           Approve Tool
          </DropdownMenuItem>}
        {tool.toolstatus ==='approved' && <DropdownMenuItem
          className="cursor-pointer"
            onClick={() => changeToolStatus(tool.id,'pending')}
          >
           Disapprove Tool
          </DropdownMenuItem>}
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer" onClick={()=>deleteToolHandler(tool.id)}>Delete Tool</DropdownMenuItem>
          <DropdownMenuItem >
            <DialogTrigger className="cursor-pointer ">Edit Tool</DialogTrigger>
            </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DialogContent className=" overflow-y-scroll py-10 sm:max-w-[425px]">
          <DialogHeader >
            <DialogTitle className="mb-4">Edit Tool</DialogTitle>
          </DialogHeader>
          <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8 h-full w-1/2">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="w-[300px]">
                <FormLabel>Tool Name</FormLabel>
                <FormControl >
                  <Input placeholder="Tool Name" className="text-black w-full" {...field} disabled />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem  className="w-[300px]">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" className="text-black" {...field} disabled />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="websiteurl"
            render={({ field }) => (
              <FormItem  className="w-[300px]">
                <FormLabel>Website Url</FormLabel>
                <FormControl>
                  <Input className="text-black" placeholder="Enter your website Url" type="text" {...field} />

                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tooldescription"
            render={({ field }) => (
              <FormItem  className=" w-[300px]">
                <FormLabel>Tool Description</FormLabel>
                <FormControl>
                  <Input className="text-black" placeholder="Enter your tool description" type="text" {...field} />

                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
{/* CATEGORY */}
<FormField

                control={form.control}
                name="toolcategory"
                render={({ field }) => (
                  <FormItem className=" mt-[60px] relative top-4 w-[300px]">
                    <FormLabel className="label">Tool Category</FormLabel>
                    <Select  onValueChange={field.onChange}  {...field} >
                      <FormControl>


                        <SelectTrigger className="w-full" >
                          <SelectValue placeholder="Tool Category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent >
                        <SelectItem value="category-1">category-1</SelectItem>
                        <SelectItem value="category-2">category-2</SelectItem>
                        <SelectItem value="category-3">category-3</SelectItem>
                      </SelectContent>

                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />


          <DialogFooter className="relative top-5 left-4">

            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            
            </DialogClose>
            {/* <DialogClose asChild> */}
            {/* setIsopen(true) */}
              <Button onClick={()=> setIsOpen(false)} >
               Save changes
              </Button>
            
            {/* </DialogClose> */}
         
          </DialogFooter>
        </form>
      </Form>
         
        </DialogContent>
    </Dialog>
      
      
    )
}