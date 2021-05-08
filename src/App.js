import React, { useState, useEffect } from "react";
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import Buttons from "./Components/Buttons/Buttons";
import Container from "./Components/Container/Container";
import Watch from "./Components/Watch/Watch";

function App() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [doubleClick, setDoubleClick] = useState(false);

  useEffect(() => {
    const unsubscribe$ = new Subject();
    interval(10)
      .pipe(takeUntil(unsubscribe$))
      .subscribe(() => {
        if (isActive) {
          setTime((val) => val + 1);
        }
      });

    return () => {
      unsubscribe$.next();
      unsubscribe$.complete();
    };
  }, [isActive]);

  const resetTime = () => {
    setTime(0);
  };

  const handleStart = () => {
    setIsActive((prevState) => !prevState);
    if (isActive) {
      resetTime();
      return;
    }
  };

  const handleWait = () => {
    if (!doubleClick) {
      setTimeout(() => {
        setDoubleClick(false);
      }, 300);
      setDoubleClick(true);
      return;
    }
    if (doubleClick) {
      setIsActive(false);
    }
  };

  const handleReset = () => {
    resetTime();
    setIsActive(true);
  };

  return (
    <Container>
      <Watch time={time} />
      <Buttons
        isActive={isActive}
        handleStart={handleStart}
        handleWait={handleWait}
        handleReset={handleReset}
      />
    </Container>
  );
}

export default App;
