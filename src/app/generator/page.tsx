"use client";
import { useState } from "react";
import RangeSlider from "../rangeslider/page";
import Footer from "../footer/page";

const allOptions = [
  { id: 1, name: "Include Uppercase", checked: false },
  { id: 2, name: "Include Lowercase", checked: false },
  { id: 3, name: "Include Numbers", checked: false },
  { id: 4, name: "Include Symbols", checked: false },
];

interface CheckboxProps {
  isChecked: boolean;
  label: string;
  checkHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Checkbox = ({ isChecked, label, checkHandler }: CheckboxProps) => {
  return (
    <div>
      <form>
        <input
          type="checkbox"
          id="checkbox"
          checked={isChecked}
          onChange={checkHandler}
        />
        &nbsp;
        <label htmlFor="checkbox">{label}</label>
      </form>
    </div>
  );
};

export default function Generator() {
  const [options, setOptions] = useState(allOptions);
  const [length, setLength] = useState(0);
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const numbers = "0123456789";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
    let validChars = "";
    if (options[0].checked) {
      validChars += uppercase;
    }
    if (options[1].checked) {
      validChars += lowercase;
    }
    if (options[2].checked) {
      validChars += numbers;
    }
    if (options[3].checked) {
      validChars += symbols;
    }
    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[randomIndex];
    }
    setPassword(generatedPassword);
  };
  const onHandleChange = (index: number) => {
    setOptions(
      options.map((option, currentIndex) => {
        console.log(
          `currentIndex: ${currentIndex}, index: ${index}, option: ${option}`
        );
        return currentIndex === index
          ? { ...option, checked: !option.checked }
          : option;
      })
    );
  };
  return (
    <>
      <main>
        <div className="flex flex-col items-center justify-center  mx-auto m-15">
          <h1 className="mb-4 text-6xl font-semibold tracking-tighter text-center md:text-7xl">
            Password Generator
          </h1>
          <p className="max-w-[380px] m-auto mb-4 font-normal text-center text-gray-900 text-lg md:text-xl">
            Generate strong passwords with ease.
          </p>
          {/* create a new component*/}
          <div className="flex justify-center mt-2 mb-10">
            <div className="relative inline-flex w-full xs:w-auto">
              <div className="absolute inset-0 rounded-lg xs:rounded-[22px] bg-gradient-to-r from-[#FF1E56] to-[#0196FF] w-full xs:w-auto"></div>
              <div className="relative text-center rounded-md xs:rounded-[20px] m-[2px] bg-background-100 dark:bg-black px-4 py-1.5 md:px-5 md:py-0.5 w-full xs:w-auto">
                <span className="flex flex-col gap-0 items-center xs:flex-row sm:gap-1 text-base sm:text-xl leading-tight bg-gradient-to-r from-[#FF1E56] to-[#0196FF] bg-clip-text text-transparent">
                  <p className="inline-block tabular-nums min-w-[94.6875px] text-white">
                    5,904,906
                  </p>
                  <span className="text-white">hours of compute saved</span>
                </span>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* <RangeSlider /> */}
              <label htmlFor="length">Password Length</label>
              {/* <RangeSlider /> */}
              <input
                type="number"
                id="length"
                className="border border-gray-300 rounded-lg p-2 ml-2"
                placeholder="Length"
                min="1"
                max="128"
                defaultValue={length}
                onChange={(e) => setLength(parseInt(e.target.value))}
              />
              {options.map((option, index) => (
                <div key={option.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={option.name.toLowerCase()}
                    className="mr-2"
                    checked={option.checked}
                    onChange={() => onHandleChange(index)}
                  />
                  <label htmlFor={option.name.toLowerCase()}>
                    {option.name}
                  </label>
                </div>
              ))}
              <div className="mt-8">
                {/* <button
              className="mr-4 btn btn-lg btn-neutral  text-white rounded-lg px-4 py-2"
              type="submit"
            >
              Generate
            </button> */}
                <div className="w-full flex flex-wrap h-fit gap-3 2xs:gap-2 sm:gap-4 justify-center items-center">
                  <button
                    className="mr-4 btn btn-lg btn-neutral  text-white rounded-lg px-4 py-2"
                    type="submit"
                  >
                    Generate
                  </button>
                  <input
                    type="text"
                    className="border border-gray-300 rounded-lg p-2"
                    placeholder="Generated Password"
                    value={password}
                    readOnly
                    onClick={() => {
                      navigator.clipboard.writeText(password);
                      alert("Password copied to clipboard!");
                    }}
                  />
                  <button
                    type="button"
                    aria-label="Copy to clipboard"
                    className="absolute right-2 top-2 p-1 sm:p-2 rounded-md hover:bg-gray-800 transition-colors"
                    onClick={() => {
                      navigator.clipboard.writeText(password);
                      alert("Password copied to clipboard!");
                    }}
                  >
                    <span className="flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-copy"
                      >
                        <rect
                          width="14"
                          height="14"
                          x="8"
                          y="8"
                          rx="2"
                          ry="2"
                        ></rect>
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                      </svg>
                    </span>
                  </button>
                </div>
                {/* <div onClick={() => {
                navigator.clipboard.writeText(password);
                alert("Password copied to clipboard!");
              }}>
              <span>{password}</span>
              <button type="button" aria-label="Copy to clipboard" className="absolute right-2 top-2 p-1 sm:p-2 rounded-md hover:bg-gray-800 transition-colors"><span className="flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg></span></button>
            </div> */}
              </div>
            </form>
            {/* <div className="mt-10">
          <p>Share</p>
        </div> */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
