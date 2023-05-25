import { useRef, useState } from "react";

function VideoOverlay() {
  const ref = useRef(null);

  const [cursorPosition, setCursorPosition] = useState({ bottom: 0, left: 0 });
  const onMouseMove = (e: React.MouseEvent) =>
    setCursorPosition({
      bottom: window.innerHeight - e.pageY,
      left: e.pageX + 10,
    });
  const [style, setStyle] = useState("invisible");

  // start listening to PubSub events
  window.Twitch.ext.listen(
    "broadcast",
    (_target: string, contentType: string, message: string) => {
      // verify content type
      if (contentType !== "application/json") {
        console.debug(`Unexpected contentType "${contentType}"`);
        return;
      }

      console.log(message);
      // push into queue
      // const m: Message = JSON.parse(message);
      // this.queue.write(m, new Date().getTime());
    }
  );

  return (
    <div className="grid h-screen place-items-center">
      <div className="absolute bottom-0 bg-red-500" onMouseMove={onMouseMove}>
        <div className="flex" ref={ref}>
          <div
            onMouseEnter={() => {
              setStyle("visible");
            }}
            onMouseLeave={() => {
              setStyle("invisible");
            }}
          >
            <h1>Test1</h1>
          </div>
          <div>
            <h1>Test2</h1>
          </div>
          <div>
            <h1>Test3</h1>
          </div>
          <div>
            <h1>Test4</h1>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", ...cursorPosition }}>
        <div className={style}>
          <div className="bg-blue-500">
            <h1>MOVING</h1>
            <h1>MOVING1</h1>
            <h2>MOVING2</h2>
            <h3>MOVING3</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoOverlay;
