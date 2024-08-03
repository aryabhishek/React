import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";

export default forwardRef(function Modal({ children, buttonText }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/95 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <button className="bg-stone-900 text-stone-300 px-2 py-2 rounded hover:text-stone-100 hover:bg-stone-800 transition-shadow hover:shadow-lg hover:shadow-gray-400">
          {buttonText}
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});
