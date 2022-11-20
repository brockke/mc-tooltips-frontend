import { useRef, useState } from "react";

function VideoOverlay() {
  const ref = useRef(null);

  const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 });
  const onMouseMove = (e: React.MouseEvent) =>
    setCursorPosition({ top: e.pageY, left: e.pageX + 20 });
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoOverlay;
