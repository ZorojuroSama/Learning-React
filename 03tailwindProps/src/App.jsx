import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-600 text-black p-2 rounded-xl mb-4 ">
        Tailwind Test
      </h1>
      <Card username="Shubham" btnText="click karo" />
      <Card username="Akhouri" btnText="click kar bc" />
    </>
  );
}

export default App;
