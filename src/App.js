import React, { useEffect, useState } from "react";
import { formatTime } from "./util";

function App() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [startTime, setStartTime] = useState(null);
  const [splitList, setSplitList] = useState([]);

  useEffect(() => {
    if (!isPaused) {
      let timer = setInterval(() => {
        setTime(() => {
          const elapsedTime = Date.now() - startTime;
          return elapsedTime;
        });
      }, 4);
      return () => clearInterval(timer);
    }
  }, [isPaused, startTime]);

  const startTimer = () => {
    setStartTime(Date.now() - time);
    setIsPaused((p) => !p);
    if (!isPaused) addSplitValue("Pause");
  };

  const resetTimer = () => {
    setTime(0);
    setIsPaused(true);
    setSplitList([]);
  };

  const splitTimer = () => {
    addSplitValue("Split");
  };

  const addSplitValue = (reason) => {
    setSplitList((split) => [...split, { time, reason }]);
  };

  const isReset = time === 0;
  const timerState = !isPaused ? "Pause" : "Start";

  return (
    <div>
      {formatTime(time)}
      <div>
        <button onClick={startTimer}>{timerState}</button>
        <button disabled={isReset || isPaused} onClick={splitTimer}>
          Split
        </button>
        <button disabled={isReset || !isPaused} onClick={resetTimer}>
          Reset
        </button>
      </div>
      <div>
        {splitList.map((x, i, arr) => {
          const interval = i > 0 ? x.time - arr[i - 1].time : x.time;
          return (
            <div key={x.time}>
              #{i} {formatTime(interval)} {x.reason}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
