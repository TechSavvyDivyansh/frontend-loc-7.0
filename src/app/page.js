"use client"

import Form from "@/components/Form";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useMyHackContext } from '@/context'; 
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import ThreeDModel from "@/components/ThreeDModel";
import Highlights from "@/components/Highlights";



export default function Home() {
  const { MyUserData } = useMyHackContext();  // Use the context
  useEffect(()=>{
    console.log(MyUserData)
  },[MyUserData])
  return (
      <div>
          <Navbar/>
          <ThreeDModel/>
          <div className="absolute top-[85vh] w-[100vw] mx-auto">
            <p className="mx-auto text-center text-2xl text-[#424242]">Invest in a safer way</p>
          </div>
          <Highlights/>
      </div>
  );
}
