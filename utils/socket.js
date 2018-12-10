import io from "socket.io-client";
import store from "./store";

const socket = io("https://api.dashpoll.net", { autoConnect: false, transports: ["websocket"] });

export function connect() {
    socket.connect();
    console.log("[Socket] Connected");
}


socket.on("connect", () => {
    socket.emit("authentification", store.getState().user.user.token)
});


export default socket;