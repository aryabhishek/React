import { forwardRef } from "react";

const ResultModal = forwardRef(function ResultModal({result, targetTime}, ref) {
    return <dialog ref={ref} className="result-modal">
        <h2>You {result}!</h2>
        <p>The target time was {targetTime} second{targetTime > 1 ? "s" : ""}.</p>
        <p>You stopped it with <strong>X seconds left.</strong></p>
        <form action="dialog">
            <button>Close</button>
        </form>
    </dialog>;
})

export default ResultModal;