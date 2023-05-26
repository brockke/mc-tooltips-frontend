import { useRef, useState } from "react";

function VideoOverlay() {
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

  const gridItems = 36;
  const gridRowLength = 9;
  const inventoryData: { index: number; data: string }[] = Array.from(
    { length: gridItems },
    (_, i) => ({
      index: i,
      data: "",
    })
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
  return <div className="p-8 bg-rose-800">{props.data.index}</div>;
};

export default VideoOverlay;
