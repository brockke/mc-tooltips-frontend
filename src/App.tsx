import "./App.css";

import {
  createReactRouter,
  createRouteConfig,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router";
import { useState } from "react";

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
        <div className="flex space-x-4">
          <router.Link to="/">Home</router.Link>
          <router.Link to="/config">Config</router.Link>
          <router.Link to="/video_overlay">Video Overlay</router.Link>
        </div>
        <hr />
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

function Config() {
  return <div>Hello from Config!</div>;
}

function VideoOverlay() {
  return <div>Hello from Video Overlay!</div>;
}

export default App;
