import { useState } from "react";

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

  const [inventory, setInventory] = useState(inventoryData)

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

      const updateValue = inventory.map(item => {
        if (item.index == jsonObj.index) {
          return {
            index: item.index,
            data: jsonObj.value
          }
        }
        else {
          return item
        }
      })
      setInventory(updateValue)

      console.log(jsonObj);
    }
  );

  return (
    <div className="overflow-auto text-center h-screen">
      <div className={`grid grid-cols-${gridRowLength.toString()} gap-2`}>
        {inventory.map((item) => (
          <InventoryBox key={item.index} data={item} />
        ))}
      </div>
    </div>
  );
}

const InventoryBox = (props: { data: { index: number; data: string } }) => {
  return <div className={`${props.data.data != '' ? 'bg-blue-700' : 'bg-rose-800'} p-8`}>{props.data.data != '' ? props.data.data : props.data.index}</div>;
};

export default VideoOverlay;
