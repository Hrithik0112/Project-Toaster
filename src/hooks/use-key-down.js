import React, { useEffect } from "react";

function useEscapekey(callback) {
  useEffect(() => {
    function handleKeydown(event) {
      if (event.code === "Escape") {
        callback(event);
      }
    }

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [callback]);
}

export default useEscapekey;
