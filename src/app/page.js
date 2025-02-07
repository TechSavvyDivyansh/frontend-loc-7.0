"use client"

import Form from "@/components/Form";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useMyHackContext } from '@/context'; 
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import ThreeDModel from "@/components/ThreeDModel";



export default function Home() {
  const { MyUserData } = useMyHackContext();  // Use the context
  useEffect(()=>{
    console.log(MyUserData)
  },[MyUserData])
  return (
      <div>
          <Navbar/>
          <ThreeDModel/>
      </div>
  );
}
