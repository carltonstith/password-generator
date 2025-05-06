"use client";
import { useState } from "react";

export default function RangeSlider() {
  const [value, setValue] = useState(0);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(value);
    setValue(Number(value));
    // Perform any action with the value
  };
  return (
    <>
      {/* <div className="flex flex-col items-center justify-center bg-base-200"> */}
        <input
          type="range"
          min={0}
          max="40"
          value={value}
          className="range"
          onChange={handleChange}
        />
        <p>{value}</p>
      {/* </div> */}
    </>
  );
}
