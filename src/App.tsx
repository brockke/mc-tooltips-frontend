import "./App.css";

import { useState } from "react";
import { Route } from "wouter";

import Config from "./Config";
import VideoOverlay from "./VideoOverlay";

function App() {
  return (
    <>
      <Route path="/config" component={Config} />
      <Route path="/video_overlay" component={VideoOverlay} />
      <Route path="/" component={Index} />
    </>
  );
}

function Index() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
