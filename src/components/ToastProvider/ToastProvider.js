import React, { createContext, useEffect, useState } from "react";
import useEscapekey from "../../hooks/use-key-down";

export const ToasttContext = createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([
    {
      id: crypto.randomUUID(),
      message: "Oh-no",
      variant: "notice",
    },
    {
      id: crypto.randomUUID(),
      message: "OhYes",
      variant: "warning",
    },
  ]);

  useEscapekey(() => {
    setToasts([]);
  });

  function creatToast(variant, message) {
    const nextToasts = [...toasts, { id: crypto.randomUUID(), message, variant }];
    setToasts(nextToasts);
  }

  function dismissToast(id) {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });
    setToasts(nextToasts);
  }
  return (
    <ToasttContext.Provider value={{ toasts, creatToast, dismissToast }}>
      {children}
    </ToasttContext.Provider>
  );
}

export default ToastProvider;
