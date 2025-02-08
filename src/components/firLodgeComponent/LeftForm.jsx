import React from "react";
import MyInputs from "@/components/MyInputs";
import MyCalendar from "./MyCalendar";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function LeftForm({ register, errors, control }) {
  return (
    <div>
      <div className="flex flex-col justify-between ">
        <p className="text-[#b1b1b1] mx-2">Crime Description</p>
        <p></p>
        <MyInputs
          type="textarea"
          placeholder="Description"
          register={register}
          name="description"
          errors={errors.description}
          control={control} // Pass control
          styles=" rounded-xl h-[15vh] bg-[#383838]"
        />
      </div>

      <div className="">
        <MyInputs
          label="Type of crime"
          type="text"
          placeholder="TypeOfCrime"
          register={register}
          name="TypeOfCrime"
          errors={errors.TypeOfCrime}
          control={control} // Pass control
          styles=" rounded-xl w-[40%] bg-[#383838]"
        />
        {/* tags */}
      </div>
      <div className="">
        <MyInputs
          label="Type of crime"
          type="text"
          placeholder="TypeOfCrime"
          register={register}
          name="TypeOfCrime"
          errors={errors.TypeOfCrime}
          control={control} // Pass control
          styles=" rounded-xl w-[40%] bg-[#383838]"
        />
        {/* <MyInputs
                label="date"
                type="date"
                placeholder="TypeOfCrime"
                register={register}
                name="TypeOfCrime"
                errors={errors.TypeOfCrime}
                control={control} // Pass control
                styles=" rounded-xl w-[40%] bg-[#383838]"
                /> */}
        {/* time */}
      </div>

      <div className="">
        {/* <MyCalendar value={[]} onChange={[]} /> */}
      </div>
    </div>
  );
}
