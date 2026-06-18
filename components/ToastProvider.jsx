"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 4000,
        style: {
          borderRadius: "12px",
          background: "#0F172A",
          color: "#fff",
          fontFamily: "var(--font-inter)",
          fontSize: "14px",
        },
      }}
    />
  );
}
