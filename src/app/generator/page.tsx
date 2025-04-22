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
  const onHandleChange = (index) => {
    setOptions(
      options.map((option, currentIndex) => {
        return currentIndex === index
          ? { ...option, checked: !option.checked }
          : option;
      })
    );
  };
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
        </form>
      </div>
    </div>
  );
}
