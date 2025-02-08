"use client"
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import MyInputs from "@/components/MyInputs";


const schema = z.object({
    place: z.string().min(3, "Place must be at least 3 characters long"),
    time: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format (HH:MM)"),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)"),
    description: z.string().min(10, "Description must be at least 10 characters"),
    crimeAct: z.string().min(2, "Crime Act must be specified"),
    crimeSection: z.string().min(1, "Crime Section must be specified"),
  
    victim: z.object({
      name: z.string().min(3, "Victim's name must be at least 3 characters"),
      age: z.number().int().min(0, "Age must be a positive number"),
      gender: z.enum(["Male", "Female", "Other"]),
      alive: z.boolean(),
    }),
  
    witnesses: z
      .array(
        z.object({
          name: z.string().min(3, "Witness name must be at least 3 characters"),
          adhaar: z.string().regex(/^\d{12}$/, "Aadhaar must be a 12-digit number"),
        })
      )
      .optional(),
  });



export default function page() {

    const {
        register,
        handleSubmit,
        control, // Pass control for MyInputs
        formState: { errors },
      } = useForm({
        resolver: zodResolver(schema),
      });
    
      const onSubmit = (data) => {
        console.log("Form Submitted:", data);
      };


  return (
    <div>
        <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4"
      >


      </form>
    </div>
  )
}
