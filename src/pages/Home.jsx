import React, { useEffect, useState } from "react";
import { getGuildInfo } from "../lib/api";

export default function Home() {
  const [guild, setGuild] = useState(null);

  useEffect(() => {
    getGuildInfo().then(setGuild);
  }, []);

  if (!guild) return <div className="text-center text-gray-400 mt-20">Loading guild info...</div>;

  return (
    <div className="text-white min-h-screen bg-gradient-to-b from-black to-red-900 flex flex-col items-center py-12">
      <h1 className="text-5xl font-bold text-red-500 mb-8">🔥 TFF TEAM 🔥</h1>
      <div className="bg-black/60 p-6 rounded-2xl shadow-xl w-11/12 md:w-2/3">
        <h2 className="text-2xl text-red-400 mb-2">{guild.name}</h2>
        <p><b>Leader:</b> {guild.leader}</p>
        <p><b>Region:</b> {guild.region}</p>
        <p><b>Members:</b> {guild.members}</p>
        <p><b>Join Date:</b> {guild.joinDate}</p>
      </div>
    </div>
  );
}
