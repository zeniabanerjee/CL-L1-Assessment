"use client";

import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import AuthInputComponent from "../ui/globals/inputs/authInputComponent";
import { signInValidationResolver } from "../resolvers/authResolvers";

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
        className="flex relative z-[1] flex-col gap-10 w-full md:w-2/3 xl:w-1/2 2xl:w-1/3 bg-white p-10 rounded-2xl"
      >
        <h1 className="text-center text-xl">Project Management Tool</h1>

        <div className="flex flex-col items-center">
          <h2 className=" text-3xl font-semibold text-[#300a0a]">Sign-in</h2>
          <p className="mt-1 text-[#300a0a]">To your account</p>
          <div>
            <AuthInputComponent
              name="email"
              label="Email"
              className="w-full border-[2px]"
              type="text"
            />
            <AuthInputComponent
              name="password"
              label="Password"
              type="password"
              showPasswordIcon
              className="w-full border-[2px]"
            />
          </div>
        </div>

        <button type="submit">Login</button>
      </form>
    </FormProvider>
  );
}
