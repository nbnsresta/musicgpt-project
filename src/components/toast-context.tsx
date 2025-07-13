import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";

export type ToastType = "success" | "error";

export interface Toast {
  id: string;
  type: ToastType;
  title: string;
  message: string;
}

interface ToastContextValue {
  success: (title: string, message?: string) => void;
  error: (title: string, message?: string) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback(
    (toast: Omit<Toast, "id"> & { type: ToastType }) => {
      const id = crypto.randomUUID();
      setToasts((prev) => [...prev, { ...toast, id }]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 3000);
    },
    []
  );

  const toast = useMemo(
    () => ({
      success: (title: string, message: string = "") =>
        showToast({ type: "success", title, message }),
      error: (title: string, message: string = "") =>
        showToast({ type: "error", title, message }),
    }),
    [showToast]
  );

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <div className="fixed top-5 right-5 z-[9999] flex flex-col gap-3 items-end">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`min-w-[260px] max-w-xs px-4 py-3 rounded-lg shadow-lg text-white animate-fade-in-up transition-all
              ${toast.type === "success" ? "bg-emerald-600" : "bg-rose-500"}
            `}
          >
            <div className="font-semibold text-base mb-1">{toast.title}</div>
            {toast.message && (
              <div className="text-sm opacity-90">{toast.message}</div>
            )}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within a ToastProvider");
  return ctx;
}
