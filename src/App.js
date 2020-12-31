import React, { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    let timer = setInterval(() => {
      if (!isPaused) {
        setCounter((counter) => {
          return counter + 1;
        });
      }
    }, 1);
    return () => clearInterval(timer);
  }, [isPaused]);

  const playCounter = () => {
    if (counter === 0) {
      setIsPaused(false);
      return;
    }

    setIsPaused((p) => !p);
  };

  const resetCounter = () => {
    setCounter(0);
    setIsPaused(true);
  };

  return (
    <div>
      StopWatch {counter}
      <div>
        <button onClick={playCounter}>Start</button>
        <button>Split</button>
        <button onClick={resetCounter}>Reset</button>
      </div>
    </div>
  );
}

export default App;
