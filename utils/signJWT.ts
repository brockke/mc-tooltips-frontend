import * as dotenv from 'dotenv'
import jwt from "jsonwebtoken";

dotenv.config({ path: '../.env' })

const sharedSecret = process.env.JWT_SECRET;
const broadcasterId = process.env.JWT_BROADCASTER_ID ?? 0;
// console.log(sharedSecret);
// console.log(broadcasterId);

const makeJWT = function () {
  if (sharedSecret == undefined) return;
  const secret = Buffer.from(sharedSecret, "base64");
  const jwt_payload = {
    exp: Math.floor(new Date().getTime() / 1000) + 2 * 60 * 60,
    user_id: broadcasterId,
    role: "external",
    channel_id: broadcasterId,
    pubsub_perms: {
      send: ["broadcast"],
    },
  };
  return jwt.sign(jwt_payload, secret);
};

const payload = {
  target: ["broadcast"],
  broadcaster_id: broadcasterId,
  message: JSON.stringify("POGGERS"),
};
const serialized = JSON.stringify(payload);

await fetch(`https://api.twitch.tv/helix/extensions/pubsub`, {
  method: "POST",
  headers: {
    Authorization: `Bearer ${makeJWT()}`,
    "Client-Id": "1xzpdykdy3126qhgj0npkycdln1d0c",
    "Content-Type": "application/json; charset=utf-8",
    // "Content-Length": payload.length
  },
  body: serialized,
}).then((res) => {
  console.log(`statusCode: ${res.status}`);
  res
    .text()
    .then((text) => {
      console.log(res.headers);
      console.log(text);
    })
    .catch((error) => {
      console.error(error);
    });
});

export { };
