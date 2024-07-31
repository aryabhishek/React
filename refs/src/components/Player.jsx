import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  }
  function capitalize(string) {
    if (string == undefined) {
      return undefined;
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <section id="player">
      <h2>Welcome {capitalize(enteredPlayerName) ?? "unknown entity"}!</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
