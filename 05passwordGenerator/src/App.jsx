import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numsAllowed, setNumsAllowed] = useState(false);
  const [charsAllowed, setCharsAllowed] = useState(false);
  const [password, setPassword] = useState("");
  
  //useRef hook to get the reference of the generated password so we can use it to copy it to our clipboard
  const passwordRef = useRef(null);
  
  //a function "passwordGenerator" is defined to generate password & we used "useCallback" hook for the optimization purpose,not necessary.

  //"useCallback" hook basically cache a function definition between re-renders. (seedha seedha ye ke is hook se function ka data cache mein save ho jata hai aur re-renders ke time cache se data utha ke webpage pe show krta hai for optimization purposes only.)
  
  //password generator function
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numsAllowed) str += "0123456789";
    if (charsAllowed) str += "!@#$%^&*";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numsAllowed, charsAllowed]);

  //function for copying the password to clipboard
  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password); //window object helps to copy(write data to clipboard)
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numsAllowed, charsAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden my-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0 hover:bg-blue-300"
            onClick={copyToClipboard}>
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numsAllowed}
              id="numberInput"
              onChange={() => {
                setNumsAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charsAllowed}
              id="characterInput"
              onChange={() => {
                setCharsAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
