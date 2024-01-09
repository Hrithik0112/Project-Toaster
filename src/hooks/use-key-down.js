import React, { useEffect } from "react";

function usekeyDown(key, callback) {
  useEffect(() => {
    function handleKeydown(event) {
      if (event.code === key) {
        callback(event);
      }
    }

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [key, callback]);
}

export default usekeyDown;
