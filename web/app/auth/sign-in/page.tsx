"use client";

import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import AuthInputComponent from "../../ui/globals/inputs/authInputComponent";
import { signInValidationResolver } from "../../resolvers/authResolvers";
import { poppins } from "@/app/helper/fonts";

type LogInType = {
  email: string;
  password: string;
};

export default function SignInPage() {
  const searchParams = useSearchParams();

  const form = useForm<LogInType>({
    resolver: yupResolver(signInValidationResolver),
  });

  const handeSubmit = (formValues: LogInType) => {
    console.log(formValues);
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={(e) => form.handleSubmit(handeSubmit)(e)}
        className="flex h-full items-center justify-center rlative flex-col gap-8 w-full md:w-2/3 xl:w-1/2 2xl:w-1/3 bg-white p-10 rounded-2xl"
      >
        <h1 className={`text-center text-xl font-bold ${poppins.className}`}>
          Project Management Tool
        </h1>
        <div className="flex flex-col items-center">
          <h2 className={`text-3xl font-semibold ${poppins.className}`}>
            Sign-in
          </h2>
          <p className="mt-1 ">To your account</p>
          <div>
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
              className="w-full bg-transparent p-2 outline-none"
            />
          </div>
        </div>
        <button
          className={`bg-[#111111] p-2 rounded-lg font-bold text-white w-[8rem] hover:bg-[#646464] hover:text-black ${poppins.className}`}
          type="submit"
        >
          Login
        </button>
      </form>
    </FormProvider>
  );
}
