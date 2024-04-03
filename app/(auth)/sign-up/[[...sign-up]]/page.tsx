import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return <div className="mx-auto flex justify-center py-10">
      <SignUp  />
  </div>;
}