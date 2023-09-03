import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import VideoOverlay from "./VideoOverlay";

// Authorize extension
window.Twitch.ext.onAuthorized((auth) => {
  console.log("JWT", auth.token);
  console.log("channelID", auth.channelId);
});

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <VideoOverlay />
  </React.StrictMode>
);
