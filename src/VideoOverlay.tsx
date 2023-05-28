import { useEffect, useRef, useState } from "react";

function VideoOverlay() {
  const gridItems = 36;
  const gridRowLength = 9;
  const inventoryData: { index: number; data: string }[] = Array.from(
    { length: gridItems },
    (_, i) => ({
      index: i,
      data: "",
    })
  );

  // start listening to PubSub events
  window.Twitch.ext.listen(
    "broadcast",
    (_target: string, contentType: string, message: string) => {
      // verify content type
      if (contentType !== "application/json") {
        console.debug(`Unexpected contentType "${contentType}"`);
        return;
      }

      // TODO: Put a type on this so only something
      // that is the correct "shape will be parsed"
      const jsonObj = JSON.parse(message);

      console.log(jsonObj);
    }
  );

  return (
    <div className="grid h-screen place-items-center">
      <div className={`grid grid-cols-${gridRowLength} gap-1`}>
        {inventoryData.map((item) => (
          <InventoryBox key={item.index} data={item} />
        ))}
      </div>
    </div>
  );
}

const InventoryBox = (props: { data: { index: number; data: string } }) => {
  return <div className="bg-rose-800 p-8">{props.data.index}</div>;
};

export default VideoOverlay;
