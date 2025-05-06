"use client";

import { useEffect, useState } from "react";
import AnimatedText from "../animatedtext/page";

export default function Footer() {
  const [date, setDate] = useState(0);

  // const currentDate = new Date().getFullYear();
  // setDate(currentDate);

  useEffect(() => {
    const currentDate = new Date().getFullYear();
    setDate(currentDate);
  }, []);
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content">
      <div>
        <AnimatedText />
        <p>Copyright © {date} - All right reserved by Password Generator</p>
      </div>
    </footer>
  );
}
