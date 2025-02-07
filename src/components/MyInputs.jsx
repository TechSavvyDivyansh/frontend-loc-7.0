import React from "react";
import { Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox"


export default function MyInputs({ label, type, placeholder, register, name, errors, options, control }) {
  if (type === "text" || type === "email" || type === "password" || type === "number" || type === "tel") {
    return (
      <div className="flex flex-col space-y-1">
        {label && <label className="text-white">{label}</label>}
        <Input type={type} placeholder={placeholder} {...register(name)} className="border p-2 rounded-lg w-[350px]" />
        {errors && <p className="text-red-500">{errors.message}</p>}
      </div>
    );
  }

  if (type === "select") {
    return (
      <div className="flex flex-col space-y-1">
        {label && <label className="text-white">{label}</label>}
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="w-[350px] border p-2 rounded-lg">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {options?.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
        {errors && <p className="text-red-500">{errors.message}</p>}
      </div>
    );
  }

  if (type === "file") {
    return (
      <div className="flex flex-col space-y-1">
        {label && <label className="text-white">{label}</label>}
        <input type="file" {...register(name)} className="border p-2 rounded-lg text-white" />
        {errors && <p className="text-red-500">{errors.message}</p>}
      </div>
    );
  }

  if (type === "checkbox") {
    return (
      <div className="flex items-center space-x-2">
        <Checkbox
                id={name}
                checked={name.value}
                onCheckedChange={name.onChange}
              />
        {errors && <p className="text-red-500">{errors.message}</p>}
      </div>
    );
  }
  

  if (type === "radio") {
    return (
      <div className="flex items-center space-x-2">
        <input type="radio" {...register(name)} className="w-5 h-5" />
        {label && <label className="text-white">{label}</label>}
        {errors && <p className="text-red-500">{errors.message}</p>}
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-1">
      <p className="text-red-500">Invalid input type</p>
      {errors && <p className="text-red-500">{errors.message}</p>}
    </div>
  );
}
