"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastProvider } from "./toast-context";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>{children}</ToastProvider>
    </QueryClientProvider>
  );
}
