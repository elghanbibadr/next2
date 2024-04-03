import Loader from "@/components/ui/loader"
export default function Loading(){
    return <div className="text-black mx-auto flex h-screen justify-center items-center  text-xl">
        <Loader color="text-blue-600" />
        </div>
}