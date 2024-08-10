"use client";

import { useController, useFormContext } from "react-hook-form";
import { type InputHTMLAttributes, useId, useState } from "react";
import { FaEye } from "react-icons/fa";

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
  showPasswordIcon?: boolean;
  label?: string;
  name?: string;
};

export default function AuthInputComponent({
  showPasswordIcon,
  label,
  ...inputProps
}: FormInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const { register, control } = useFormContext();
  const { fieldState } = useController({
    control,
    name: inputProps.name,
  });
  const id = useId();

  return (
    <div className="w-full relative">
      <div className="input-box flex flex-col gap-2">
        <label htmlFor={id} className="bg-[#ffffff] text-black ">
          {label}
        </label>
        <div className="flex flex-row justify-between border-[2px] rounded-lg max-w-[18rem] px-2">
          <input
            {...inputProps}
            className={
              inputProps.className +
              (fieldState.error?.message ? " border-red-500 " : "")
            }
            {...register(inputProps.name)}
            name={inputProps.name}
            type={
              (showPasswordIcon && showPassword
                ? "text"
                : !inputProps.type && " password") || inputProps.type
            }
            placeholder=""
            autoComplete="on"
            id={id}
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            type="button"
            className={`${
              showPasswordIcon ? " block " : " hidden "
            } z-50 translate-y-[-50%] mt-5`}
          >
            <FaEye />
          </button>
        </div>
      </div>
      {fieldState.error?.message && (
        <p className="absolute text-red-500">{fieldState.error?.message}</p>
      )}
    </div>
  );
}
