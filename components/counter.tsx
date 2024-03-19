"use client";

import React, { useEffect, useState } from 'react';
import styles from "@/styles/counter.module.scss";

//styling

interface propTypes{
    number: string,
    duration: string,
    label: string
}
const Counter:React.FC<propTypes> = ({number, duration, label}) => {
  // number to increment to
  // duration of count in seconds

  // number displayed by component
  const [count, setCount] = useState<string>()

  useEffect(() => {
    let start = 0;
    // first three numbers from props
    const end = parseInt(number.substring(0,3))
    // if zero, return
    if (start === end) return;

    // find duration per increment
    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 1000;

    // timer increments start counter 
    // then updates count
    // ends if start reaches end
    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + number.substring(3))
      if (start === end) clearInterval(timer)       
    }, incrementTime);

    // dependency array
  }, [number, duration]);

  return (
    <div className={styles.container}>
      <h3>
        <i>{count? count + "+": "0+"}</i>
      </h3>
      <p>{label}</p>
    </div>
  );
}

export default Counter;
