import React from "react";

export default function Loader() {
  return (
    <div
      className="bg-white h-screen w-screen flex items-center justify-center fixed
     top-0 left-0 z-50"
    >
      <div className="loader "></div>
    </div>
  );
}
