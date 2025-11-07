import React, { useEffect, useState } from "react";
import { getGuildStatus } from "../lib/api";

export default function Status() {
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    const fetchStatus = async () => {
      const data = await getGuildStatus();
      setStatus(data.status);
    };
    fetchStatus();
    const interval = setInterval(fetchStatus, 300000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-b from-black to-red-900 min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold text-red-500 mb-6">Guild Status</h1>
      <p className="text-lg bg-black/60 px-6 py-4 rounded-xl shadow-lg">{status}</p>
    </div>
  );
}
