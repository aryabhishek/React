import { useImperativeHandle, forwardRef, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, onReset, timeLeft },
  ref
) {
  const dialog = useRef();
  const timeInSeconds = (timeLeft / 1000).toFixed(2);
  const gameLost = timeLeft <= 0;
  const score = Math.round((1 - timeLeft / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {gameLost && <h2>You Lost!</h2>}
      {!gameLost && <h2>Your score: {score}</h2>}
      <p>
        The target time was {targetTime} second{targetTime > 1 ? "s" : ""}.
      </p>
      {gameLost && <p>You couldn't stop it in time ☹️</p>}
      {!gameLost && (
        <p>
          You stopped it with{" "}
          <strong>
            {timeInSeconds} seconds left.{timeInSeconds < 1 && <span>😲</span>}
          </strong>
        </p>
      )}
      <form action="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
