"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loader from "./ui/globals/loader";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/projects");
    }, 2000);
  });

  return <Loader />;
}
