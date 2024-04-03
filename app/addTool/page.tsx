"use client"
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { useAuth } from "@clerk/nextjs";
import { supabase } from "@/supabase/supabase"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { createCheckoutSession } from "@/actions"
import { useState } from "react"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import toast from "react-hot-toast"
import Loader from "@/components/ui/loader"
import Image from "next/image"

import proIcon from "../../assets/icon-pro.svg"
import arcadIcon from "../../assets/icon-arcade.svg"
const supabaseImageStoragePath = 'https://niybaycgkllaekcjjkfc.supabase.co/storage/v1/object/public/toolsimg/'



interface Tool {
  username: string
  email: string;
  websiteurl: string;
  tooldescription: string;
  toolcategory: string;
  Plan:string;
  toolImage?: any
  // isToolSponsored:boolean

}
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  emailadress: z.string().email(),
  websiteurl: z.string().max(120, {
    message: "description should not be more than 120 word",
  }),
  tooldescription: z.string().min(10, {
    message: "Username must be at least 10 characters.",
  }),
  toolcategory: z.enum(["category-1", "category-2", "category-3"]),


})


export default function AddTool() {
  const [imgfileName, setimgfileName] = useState('')
  const [imgFile, setImgFile] = useState<any>({})
  const [isAddingTool, setIsAddingTool] = useState(false)
  const [plan, setPlan] = useState('free')
  const { isLoaded, userId } = useAuth();
  const [isToolSponsored, setIsSponsoredTool] = useState<string>("")


   

  const handleRadioChange = (value: string) => setIsSponsoredTool(value);

  const form = useForm<z.infer<typeof formSchema>>(
    {
      resolver: zodResolver(formSchema),
      defaultValues: {
        emailadress: "",
        username: '',
        websiteurl: "",
        tooldescription: "",
      

      }
    }
  )

  const uploadFile = async (event: any) => {
    setImgFile(event.target.files[0])
    setimgfileName(event.target.files[0].name)
    console.log("image file", typeof event.target.files[0])

   



  }




  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    const toolData: Tool = {
      username: values.username,
      email: values.emailadress, websiteurl: values.websiteurl, tooldescription: values.tooldescription, toolcategory: values.toolcategory,Plan:"free"
    }




    setIsAddingTool(true)
    const existingTool = await supabase
      .from('tools')
      .select('*')
      .eq('username', toolData.username)
      .eq('email', toolData.email)
      .eq('websiteurl', toolData.websiteurl)
      .eq('tooldescription', toolData.tooldescription)
      .eq('toolcategory', toolData.toolcategory)
      .single();


    if (!existingTool.error?.details.includes('0')) {
      toast.error('oops..!  Tool Already Exist')
      setIsAddingTool(false)
      return
    }





    const {data,error}=  await supabase.storage.from('toolsimg')
        .upload(imgfileName, imgFile)
   

      if(error){
        setIsAddingTool(false)
       return toast.error("tool image already exist please use another image")
      }  
   



    // UPLOAD TOOL DETAILS TO SUPABASE
    try {
      const { data, error } = await supabase
        .from('tools')

        .insert([{ ...toolData, toolstatus: "pending", toolImageUrl: `${supabaseImageStoragePath}${imgfileName}`, userId: userId ,isToolSponsored:false,Plan:"free"}])
        .select();
      if (!error) {
        toast.success('Tool Added Successfully!');
        console.log("data", data)
        form.reset()

        if(plan!=="free"){
       

          console.log('mode', process.env.NODE_ENV)
          const priceId = plan === "monthly" ? 
          (process.env.NODE_ENV === 'production' ? 'price_1P0sUdBI1bZYeRpv5QqGaoCS':'price_1Oygu6BI1bZYeRpv02J8clnA') 
          :(process.env.NODE_ENV === 'production' ? 'price_1P1Ho7BI1bZYeRpvn3dECHuW':'price_1OsWeBBI1bZYeRpvqwu4j4bm');
         
          await createCheckoutSession(data[0].id,priceId,plan);
        }

      }
    } catch (error) {
    
      toast.error("something went wrong")
    } finally {

      setIsAddingTool(false)
    }

  }


  return (
    <>
      <div className="bg-white relative">
        {/* <GoBack href="/"/> */}
        <div className="flex flex-col items-center justify-between pt-0 px-3 md:pr-10 pb-0  mt-0 mr-auto mb-0 ml-auto max-w-7xl
      xl:px-5 lg:flex-row">
          <div className="flex flex-col items-center w-full pt-5  md:pr-10 pb-20 md:pl-10 lg:pt-20 lg:flex-row">
            <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
              <div className="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
              <img  src="https://res.cloudinary.com/macxenon/image/upload/v1631570592/Run_-_Health_qcghbu.png" alt="form illustration image" />
              </div>
            </div>


            <div className="w-full mt-10 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
              <div className="flex flex-col items-start justify-start pt-10  pb-10  bg-white shadow-2xl rounded-xl
            relative z-10">
                <p className="w-full text-4xl font-medium text-center leading-snug font-serif">Add Your Tool </p>
                <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">

                  <Form {...form} >
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8  p-8 rounded-md  ">
                      <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                          <FormItem className="relative mb-12 formItem" >
                            <FormLabel className="label">Tool Name</FormLabel>
                            <FormControl className="border bg-white placeholder-gray-400 focus:outline-none
                focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block 
                border-gray-300 rounded-md">
                              <Input placeholder="Tool Name" className="input" {...field} disabled={isAddingTool} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="emailadress"
                        render={({ field }) => (
                          <FormItem className="mb-12 formItem">
                            <FormLabel className="label">Email Adress</FormLabel>
                            <FormControl>
                              <Input className="input" placeholder="Email " {...field} disabled={isAddingTool} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      {/*  WEBSITE URL INPUT */}
                      <FormField
                        control={form.control}
                        name="websiteurl"
                        render={({ field }) => (
                          <FormItem className="formItem">
                            <FormLabel className="label">Website Url</FormLabel>
                            <FormControl>
                              <Input className="input mb-20" placeholder="Enter your website Url" type="text" {...field} disabled={isAddingTool} />
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
                          <FormItem className="my-20 formItem ">
                            <FormLabel className="label">Tool Category</FormLabel>
                            <Select onValueChange={field.onChange} >
                              <FormControl>


                                <SelectTrigger className="w-full" >
                                  <SelectValue placeholder="Tool Category" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="category-1">category-1</SelectItem>
                                <SelectItem value="category-2">category-2</SelectItem>
                                <SelectItem value="category-3">category-3</SelectItem>
                              </SelectContent>

                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />


                      {/* TOOL DESCIPTION INPUT */}
                      <FormField
                        control={form.control}
                        name="tooldescription"
                        render={({ field }) => (
                          <FormItem className="mb-12 formItem ">
                            <FormLabel className="label">Tool description</FormLabel>
                            <FormControl>
                              <Input className="input" disabled={isAddingTool} placeholder="Enter your tool description" type="text" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />


                      <RadioGroup defaultValue="no" onValueChange={(value) => handleRadioChange(value)}  >
                        <FormLabel className="mb-2">Tool Sponsored</FormLabel>
                        <div onClick={() => console.log("clicked")} className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="no" />
                          <Label htmlFor="no">No</Label>
                        </div>

                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="yes" />
                          <Label htmlFor="yes">Yes</Label>
                        </div>
                      </RadioGroup>


                      {isToolSponsored === "yes" && <div className="flex gap-2">

                        {<div onClick={() => setPlan('yearly')} className={`p-3 h-[130px]  planCard cursor-pointer border ${plan !== "monthly" ? "border-blue-600" : "border-black"} w-fit rounded-md`}>
                          <Image src={proIcon} height={30} className="block mb-6" width={40} alt="hello" />
                          <h3 className="text-gray-900 text-bold font-semibold text-base">Yearly</h3>
                          <p className="text-gray-400 mb-6 text-xs font-medium">29$/year</p>
                          
                        </div>}
                        {<div onClick={() => setPlan('monthly')} className={`p-3  h-[130px]  planCard cursor-pointer border ${plan === "monthly" ? "border-blue-600" : "border-black"}  w-fit rounded-md`}>
                        <Image src={arcadIcon} height={30} className="block mb-6" width={40} alt="hello" />
                          <h3 className="text-gray-900 font-semibold text-base">Monthly</h3>
                          <p className="text-gray-400 mb-6 text-xs font-medium">9$/month</p>
                          
                        </div>}
                      </div>}
                      <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="picture " >Picture</Label>
                        <Input disabled={isAddingTool} onChange={uploadFile} id="picture" type="file" />
                      </div>
                      <Button type="submit" className="w-full inline-block pt-6 pr-5 pb-6 pl-5 text-xl inline-flex items-center font-medium text-center text-white bg-indigo-500
                     rounded-lg transition duration-200 hover:bg-indigo-600 ease">
                      <span className="inline-block mr-2">Add Tool</span>
                      {isAddingTool && <Loader  color="white"/> }
                     </Button>
                      {/* <Loader  loading={true} /> */}
                    </form>
                  </Form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


    </>

  )
}