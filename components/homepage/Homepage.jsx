"use client";

import { socket } from "@/socket";
import { useEffect, useState } from "react";

const Homepage = () => {
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        if (socket.connected) {
            onConnect();
        }

        function onConnect() {
            setIsConnected(true);

        }

        function onDisconnect() {
            setIsConnected(false);
        }

        socket.on("connect", onConnect);
        socket.on("disconnect", onDisconnect);

        return () => {
            socket.off("connect", onConnect);
            socket.off("disconnect", onDisconnect);
        };
    }, []);

    return (
        <div className="h-[350px] flex justify-center items-center bg-primary3">
            <h2 className="font-semibold text-2xl text-white">Landing Page</h2>
            <p>Status: {isConnected ? "connected" : "disconnected"}</p>
        </div>
    )
}

export default Homepage