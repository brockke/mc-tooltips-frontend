import useMouse from "@react-hook/mouse-position";
import { useRef, useState } from "react";

function VideoOverlay() {
  const ref = useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 });
  const onMouseMove = (e: any) =>
    setCursorPosition({ top: e.screenY, left: e.screenX });
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
          <h1>MOVING</h1>
        </div>
      </div>
    </div>
  );
}

export default VideoOverlay;
