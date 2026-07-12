"use client";
import React from "react";
import Button from "./components/UI/Button/Button";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const { push } = useRouter();
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center gap-4">
      <div className="font-display text-7xl sm:text-8xl font-bold text-primary">404</div>
      <p className="text-foreground-muted">The page cannot be found.</p>
      <Button
        onClick={() => push("/")}
        label="Back to home"
        size="md"
        type="primary"
      />
    </div>
  );
};

export default NotFound;
