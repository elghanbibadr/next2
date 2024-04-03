import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";


export default function Loader({color}:{color:string}) {


  return (
   

     
<ClipLoader color={color} size={22} />
   
  );
}