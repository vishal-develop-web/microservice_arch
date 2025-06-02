import http from "http";
import { Server as SocketIoServer } from "socket.io";

export const initSocketServer = (server: http.Server) => {
    const io = new SocketIoServer(server);
    io.on("connection", (socket) => {
        console.log("user connected");
        socket.on("notification", (data) => {
            io.emit("newNotification", data);
        });
        socket.on("startStream", (data) => {
        });
        socket.on("sendMessage", (datas) => {
            io.emit("recieveMessage", datas);
        });
        socket.on("disconnect", () => {
            console.log("user disconnected");
        });
    });
};
