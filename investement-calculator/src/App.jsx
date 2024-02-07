import Header from "./components/Header.jsx";
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput.jsx";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isValidDuration = userInput.duration > 0;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [inputIdentifier]: +newValue };
    });
    console.log(`${inputIdentifier} changed to ${newValue}`);
  }

  return (
    <>
      <Header></Header>
      <UserInput userInput={userInput} onChange={handleChange}></UserInput>
      {!isValidDuration && <p className="center">Please Enter a valid duration!</p>}
      {isValidDuration && <Results input={userInput}></Results>}
    </>
  );
}

export default App;
