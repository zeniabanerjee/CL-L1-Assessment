"use client";

import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import AuthInputComponent from "../../ui/globals/inputs/authInputComponent";
import { signUpValidationResolver } from "../../resolvers/authResolvers";
import { poppins } from "@/app/helper/fonts";

type SignUpType = {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
};

export default function SignUpPage() {
  const form = useForm<SignUpType>({
    resolver: yupResolver(signUpValidationResolver),
  });

  const handeSubmit = (formValues: SignUpType) => {
    console.log(formValues);
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={(e) => form.handleSubmit(handeSubmit)(e)}
        className="flex relative z-[1] flex-col gap-10 items-center justify-center w-full md:w-2/3 xl:w-1/2 2xl:w-1/3 bg-white p-10 rounded-2xl overflow-y-scroll"
      >
        <h1 className={`text-center text-xl font-bold ${poppins.className}`}>
          Project Management Tool
        </h1>
        <div className="flex flex-col items-center">
          <h2 className={`text-2xl mb-3 font-semibold ${poppins.className}`}>
            Create your own account
          </h2>
          <div>
            <AuthInputComponent
              name="name"
              label="Name"
              className="w-full bg-transparent p-2  outline-none"
              type="text"
            />
            <AuthInputComponent
              name="email"
              label="Email"
              className="w-full bg-transparent p-2  outline-none"
              type="text"
            />
            <AuthInputComponent
              name="password"
              label="Password"
              type="password"
              showPasswordIcon
              className="w-full bg-transparent p-2  outline-none"
            />
            <AuthInputComponent
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              showPasswordIcon
              className="w-full bg-transparent p-2  outline-none"
            />
          </div>
        </div>

        <button
          className={`bg-[#111111] p-2 rounded-lg font-bold text-white w-[8rem] hover:bg-[#646464] hover:text-black ${poppins.className}`}
          type="submit"
        >
          Signup
        </button>
      </form>
    </FormProvider>
  );
}
