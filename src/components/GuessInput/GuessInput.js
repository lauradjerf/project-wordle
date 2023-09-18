import React from "react";

function GuessInput({ handleSubmitGuesses }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ tentativeGuess });
    handleSubmitGuesses(tentativeGuess);
    setTentativeGuess("");
  }

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={tentativeGuess}
          onChange={(event) => {
            const nextGuess = event.target.value.toUpperCase();
            setTentativeGuess(nextGuess);
          }}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          maxLength={5}
          minLength={5}
          required
        />
      </form>
    </>
  );
}

export default GuessInput;
