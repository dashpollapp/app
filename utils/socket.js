import io from 'socket.io-client';
import store from "./store";

const socket = io("https://api.dashpoll.net", { autoConnect: false, transports: ['websocket'] });
let date;

export function connect() {
    socket.connect();
    console.log("SOCKET CONNECTED");
}


socket.on("connect", () => {
    socket.emit("authentification", store.getState().user.user.token)
});


export default socket;