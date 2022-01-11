import React, { useState } from 'react';
import { useStopwatch } from 'react-timer-hook'; 

const Togglebtn = () => {
  
  const {
    seconds,
    minutes,
    hours,
    days,
  start,
pause,
 reset,
  } = useStopwatch({ autoStart: false });
  const [clockIn, setClocikIn] = useState(true);
  const [mouseState, setMouseState] = useState(false);
  
  const setClockState = () => {
    setClocikIn(false);
  };
  const setClockOutState = () => {
    setClocikIn(true);
    setMouseState(false);
  };
  const onMouseEnter = (event) => {
    //event.target.style.background = "red";
    setMouseState(true);
  };
  const onMouseLeave = (event) => {
    //event.target.style.background = "blue";
    setMouseState(false);
  };
  console.log(mouseState);
  const pushContent = [];
  if (mouseState == true) {
    pushContent.push(
      <div
        style={{ display: 'inline-block' }}
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
        onClick ={start}
        onClick ={reset}
      >
        <button style={{ padding: '10px', background: '#f44336',
  color: 'white',
  display: 'inline-block'
}} onClick={setClockOutState}>
         WEB CLOCK OUT
        </button>
      </div>
    );
  } else if (clockIn) {
    pushContent.push(
      <button style={{ padding: '10px' }} onClick={setClockState}>
       WEB CLOCK IN
      </button>
    );
  } else if (clockIn == false) {
    pushContent.push(
      <div
        style={{
          padding: '10px',
          background: '#70BDF0',
          display: 'inline-block',
        }}
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
        onClick ={pause}
      >
        <div><h4>Clocked in</h4><span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span> </div>
      </div>
    );
  } else {
    pushContent.push(
      <button style={{   color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"}} onClick={setClockState}>
       WEB CLOCK IN
      </button>
    );
  }

  return (
    <div>{pushContent}</div>
  )
  
}

export default Togglebtn
