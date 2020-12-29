import React, { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setCounter((counter) => {
        return counter + 1;
      });
    }, 1);
    return () => clearInterval(timer);
  }, []);

  return <div>StopWatch {counter}</div>;
}

export default App;
