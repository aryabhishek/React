import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  const timeInMs = targetTime * 1000;

  const [timeRemaining, setTimeRemaining] = useState(timeInMs);
  const isTimerActive = timeRemaining > 0 && timeRemaining < timeInMs;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset() {
    setTimeRemaining(timeInMs);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open();
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        onReset={handleReset}
        timeLeft={timeRemaining}
      ></ResultModal>
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <button onClick={!isTimerActive ? handleStart : handleStop}>
          {isTimerActive ? "Stop" : "Start"} Challenge
        </button>
        <p className={isTimerActive ? "active" : "inactive"}>
          {isTimerActive ? "Timer is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
