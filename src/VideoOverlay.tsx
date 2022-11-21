import { useRef, useState } from "react";

function VideoOverlay() {
  const ref = useRef(null);

  const [cursorPosition, setCursorPosition] = useState({ bottom: 0, right: 0 });
  const onMouseMove = (e: React.MouseEvent) =>
    setCursorPosition({
      bottom: window.innerHeight - e.pageY,
      right: window.innerWidth - e.pageX + 20,
    });
  const [style, setStyle] = useState("invisible");

  return (
    <div>
      <div className="h-auto w-auto">
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
