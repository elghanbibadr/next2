import { authMiddleware} from "@clerk/nextjs";
// import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: ["/","/pricing","/tool/(.*)"],
 
}) 



export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
};


