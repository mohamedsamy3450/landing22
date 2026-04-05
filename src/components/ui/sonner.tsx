// Simple Toaster component (since sonner might not be installed)
import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
  return (
    <SonnerToaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: "#1a1f3a",
          border: "1px solid #2a3050",
          color: "#e0e0ff",
        },
      }}
    />
  );
}