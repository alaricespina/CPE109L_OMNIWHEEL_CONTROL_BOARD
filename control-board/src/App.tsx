import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <div className="w-28 h-28 bg-gray-700">
        <p>Omniwheel Bot</p>
      </div>

      {/* Basic Controls */}
      <button className="bg-blue-100">
        <p>Up</p>
      </button>
      <button className="bg-green-100">
        <p>Left</p>
      </button>
      <button className="bg-yellow-100">
        <p>Down</p>
      </button>
      <button className="bg-violet-100">
        <p>Right</p>
      </button>
      
      <button className="bg-blue-100" onClick={() => {console.log("A + Clicked")}}>
        <p>A +</p>
      </button>
      <button className="bg-green-100">
        <p>A -</p>
      </button>
      <button className="bg-yellow-100">
        <p>B +</p>
      </button>
      <button className="bg-violet-100">
        <p>B -</p>
      </button>
      <button className="bg-blue-100">
        <p>C +</p>
      </button>
      <button className="bg-green-100">
        <p>C -</p>
      </button>
      <button className="bg-yellow-100">
        <p>D +</p>
      </button>
      <button className="bg-violet-100">
        <p>D -</p>
      </button>


    </>
  )
}

export default App
