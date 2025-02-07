import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import MyInputs from "./MyInputs";

// Validation Schema using Zod
const schema = z.object({
  firstName: z.string().min(3, "First Name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  gender: z.enum(["female", "male", "other"], {
    message: "Gender is required",
  }),
  phone: z
    .string()
    .length(10, { message: "Phone number must be exactly 10 digits" })
    .regex(/^[0-9]+$/, { message: "Only digits are allowed" }),
});

export default function Form() {
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
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4"
      >
        <MyInputs
          label="First Name"
          type="text"
          placeholder="Enter your name"
          register={register}
          name="firstName"
          errors={errors.firstName}
          control={control} // Pass control
        />

        <MyInputs
          label="Email"
          type="email"
          placeholder="Enter your email"
          register={register}
          name="email"
          errors={errors.email}
          control={control} // Pass control
        />

        {/* Gender Select Field - No need to use Controller in Form.js */}
        <MyInputs
          label="Gender"
          type="select"
          name="gender"
          control={control} // Pass control
          errors={errors.gender}
          options={["female", "male", "other"]}
          placeholder="Select your gender"
        />

        <MyInputs
          label="Phone Number"
          type="text"
          placeholder="Enter your phone number"
          register={register}
          name="phone"
          errors={errors.phone}
          control={control} // Pass control
        />
        {/* checkbox not working needs to be corrected */}

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
}
