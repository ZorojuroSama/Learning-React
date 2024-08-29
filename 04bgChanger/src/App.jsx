import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")
  return (
    <div className="w-full h-screen duration-350" 
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center items-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-slate-800 px-5 py-4 rounded-3xl">
          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}>
            Red
          </button>
          <button 
          onClick={() => setColor("olive")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "olive"}}>
            Olive
          </button>
          <button
          onClick={() => setColor("lavender")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "lavender"}}>
            Lavender
          </button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}>
            Blue
          </button>
          <button
          onClick={() => setColor("rgb(30 41 28")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "rgb(30 41 28"}}>
            Midnight
          </button>
          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}>
            Green
          </button>
          <button
          onClick={() => setColor("#0AF094")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "#0AF094"}}>
            Sea Green
          </button>
          <button
          onClick={() => setColor("#d5df20")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "#d5df20"}}>
            Yellowish
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
