import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../lib/api";

export default function Application() {
  const [form, setForm] = useState({ name: "", uid: "", region: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "applications"), form);
    setSuccess(true);
  };

  return (
    <div className="bg-gradient-to-b from-black to-red-900 min-h-screen text-white flex flex-col items-center py-12">
      <h1 className="text-4xl text-red-500 font-bold mb-6">Join TFF TEAM</h1>
      {success ? (
        <p className="text-green-400">Application submitted successfully!</p>
      ) : (
        <form onSubmit={handleSubmit} className="bg-black/70 p-6 rounded-2xl shadow-xl w-80 flex flex-col gap-4">
          <input type="text" name="name" placeholder="Your Name" className="p-2 rounded bg-gray-900 border border-red-700" onChange={handleChange} required />
          <input type="text" name="uid" placeholder="Free Fire UID" className="p-2 rounded bg-gray-900 border border-red-700" onChange={handleChange} required />
          <input type="text" name="region" placeholder="Region" className="p-2 rounded bg-gray-900 border border-red-700" onChange={handleChange} required />
          <button className="bg-red-700 hover:bg-red-800 rounded p-2 font-bold">Submit</button>
        </form>
      )}
    </div>
  );
}
