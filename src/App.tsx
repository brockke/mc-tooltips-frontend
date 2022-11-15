import "./App.css";

import {
  createReactRouter,
  createRouteConfig,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router";
import { useState } from "react";

import Config from "./Config";
import VideoOverlay from "./VideoOverlay";

const routeConfig = createRouteConfig().createChildren((createRoute) => [
  createRoute({
    path: "/",
    element: <Index />,
  }),
  createRoute({
    path: "config",
    element: <Config />,
  }),
  createRoute({
    path: "video_overlay",
    element: <VideoOverlay />,
  }),
]);

const router = createReactRouter({ routeConfig });

function App() {
  return (
    <>
      <RouterProvider router={router}>
        <Outlet />
      </RouterProvider>
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
