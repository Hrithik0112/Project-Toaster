import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toastes, handleDismiss }) {
  return (
    <ol className={styles.wrapper}>
      {toastes.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast id={toast.id} variant={toast.variant} handleDismiss={handleDismiss}>
            {toast.messege}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
