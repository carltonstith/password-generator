"use client";
import { useState } from "react";

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
  // const [includeUppercase, setIncludeUppercase] = useState(false);
  // const [includeLowercase, setIncludeLowercase] = useState(false);
  // const [includeNumbers, setIncludeNumbers] = useState(false);
  // const [includeSymbols, setIncludeSymbols] = useState(false);
  const [options, setOptions] = useState(allOptions);
  const [length, setLength] = useState(0);
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  // const [isGenerating, setIsGenerating] = useState(false);

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
    // console.log("validChars", validChars);
    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[randomIndex];
    }
    setPassword(generatedPassword);
  };
  const onHandleChange = (index) => {
    // console.log("index", index);
    setOptions(
      options.map((option, currentIndex) => {
        return currentIndex === index
          ? { ...option, checked: !option.checked }
          : option;
      })
    );
    // setIncludeUppercase(event.target.checked);
    // setIncludeLowercase(event.target.checked);
    // setIncludeNumbers(event.target.checked);
    // setIncludeSymbols(event.target.checked);
    // console.log("Include Uppercase:", includeUppercase);
    // console.log("Include Lowercase:", includeLowercase);
    // console.log("Include Numbers:", includeNumbers);
    // console.log("Include Symbols:", includeSymbols);
    // console.log("Length:", length);
  };
  const resetForm = () => {
    setLength(0);
    setPassword("");
    setOptions(
      options.map((option) => {
        return { ...option, checked: false };
      })
    );
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 w-full max-w-lg mx-auto mt-20">
      <h1 className="text-2xl">Password Generator</h1>
      <p className="text-lg mt-10 text-gray-700">
        Generate strong passwords with ease.
      </p>
      <div className="mt-8">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <label htmlFor="length">Enter length</label>
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
              <label htmlFor={option.name.toLowerCase()}>{option.name}</label>
            </div>
          ))}
          <div className="mt-8">
            <button
              className="mr-4 bg-blue-500 text-white rounded-lg px-4 py-2"
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
          </div>
          {/* <div className="flex items-center">
            <input
            key={Math.random()}
              type="checkbox"
              id="uppercase"
              className="mr-2"
              checked={includeUppercase}
              onChange={onHandleChange}
            />
            <label htmlFor="uppercase">Include Uppercase</label>
          </div>
          <div className="flex items-center">
            <input
            key={Math.random()}
              type="checkbox"
              id="lowercase"
              className="mr-2"
              checked={includeLowercase}
              onChange={checkHandler}
            />
            <label htmlFor="lowercase">Include Lowercase</label>
          </div>
          <div className="flex items-center">
            <input
            key={Math.random()}
              type="checkbox"
              id="numbers"
              className="mr-2"
              checked={includeNumbers}
              onChange={checkHandler}
            />
            <label htmlFor="numbers">Include Numbers</label>
          </div>
          <div className="flex items-center">
            <input
            key={Math.random()}
              type="checkbox"
              id="symbols"
              className="mr-2"
              checked={includeSymbols}
              onChange={checkHandler}
            />
            <label htmlFor="symbols">Include Symbols</label>
          </div>
          <div className="mt-8">
            <button
              className="mr-4 bg-blue-500 text-white rounded-lg px-4 py-2"
              type="submit"
            >
              Generate
            </button>
            <input
              type="text"
              className="border border-gray-300 rounded-lg p-2"
              placeholder="Generated Password"
            />
          </div> */}
        </form>
      </div>
      <div className="mt-8">
        
      </div>
    </div>
  );
}
