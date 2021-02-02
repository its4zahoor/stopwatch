import React, { useEffect, useState } from "react";
import { formatTime } from "./util";
import "./App.css";

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
    if (!isPaused) addSplitValue("pause");
  };

  const resetTimer = () => {
    setTime(0);
    setIsPaused(true);
    setSplitList([]);
  };

  const splitTimer = () => {
    addSplitValue("split");
  };

  const addSplitValue = (reason) => {
    setSplitList((split) => [...split, { time, reason }]);
  };

  const currentInterval = () => {
    const { length, [length - 2]: last2nd, [length - 1]: last } = splitList;
    if (isReset) return "SPLIT TIME";
    if (!last) return formatTime(time);
    if (isPaused) return formatTime(last.time - last2nd.time);
    return formatTime(time - last.time);
  };

  const isReset = time === 0;
  const timerState = !isPaused ? "Pause" : "Start";
  const formattedTime = formatTime(time);
  return (
    <div className="App">
      <div className="display">
        <span>{formattedTime.slice(0, -2)}</span>
        <span className="ms-end">{formattedTime.slice(-2)}</span>
      </div>
      <div className="current split">{currentInterval()}</div>
      <div>
        <button className={isPaused ? "start" : "pause"} onClick={startTimer}>
          {timerState}
        </button>
        <button
          className="split"
          disabled={isReset || isPaused}
          onClick={splitTimer}
        >
          Split
        </button>
        <button
          className="reset"
          disabled={isReset || !isPaused}
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>
      {splitList.length > 0 && <hr />}
      <div>
        {splitList.map((x, i, arr) => {
          const { time, reason } = x;
          const interval = i > 0 ? time - arr[i - 1].time : time;
          return (
            <div className="split-item" key={time}>
              <div>#{i + 1}</div>
              <div className={reason}>{formatTime(interval)}</div>
              <div>{reason}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
