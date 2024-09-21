"use client"
import React from "react";
import Button from "./components/UI/Button/Button";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const { push } = useRouter();
  return (
    <div className="h-[90vh] text-center text-primary pt-[20%]">
      <div className="text-8xl font-black">404</div>
      <div className="mb-5">
        The page cannot be found
      </div>
        <Button onClick={() => push('/')} className="mx-auto" label="Back to home" size="sm" type="default" />
    </div>
  );
};

export default NotFound;
