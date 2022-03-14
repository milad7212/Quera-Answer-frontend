import React, { useEffect, useState } from "react";
import "./Timer.css";

export const Timer = () => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const timing = setInterval(() => {
      setTime(time + 1);
    }, 1000);
    return () => clearInterval(timing);
  }, [time]);

  return (
    <div className="container">
      <div className="timer">{time}</div>{" "}
      <button onClick={() => setTime(0)}> Reset Timer </button>{" "}
    </div>
  );
};
