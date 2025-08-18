'use client';

import { useState } from "react";

const YOUTUBE_URL = "https://www.youtube.com/channel/UCUqBuKKyxnimiYXPzo4vICw";

export default function App() {
  const [registered, setRegistered] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to register");

      const data = await res.json();
      console.log("Saved user:", data);

      setRegistered(true); // show homepage
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const handleClick = () => {
    window.open(YOUTUBE_URL, "_blank", "noopener,noreferrer");
  };

  // ================= REGISTRATION PAGE =================
  if (!registered) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-200 to-yellow-300">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Register for Pravitti
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ================= HOME PAGE =================
  return (
    <div className="font-sans min-h-screen flex flex-col gap-8">
      {/* Title */}
      <div className="event-title text-[36pt] font-bold bg-[#FFAF35] w-full flex items-center justify-center p-5">
        Pravitti
      </div>

      <div className="flex-1 grid grid-rows-[auto_1fr] gap-8 w-full px-10 pb-10">
        {/* Intro */}
        <div className="intro-content grid place-items-center text-[13pt] text-center max-w-prose mx-auto">
          Welcome <b>{formData.name}</b> 🎉 <br /><br />
          Pravitti is about effort, learning, and progress... <br />
        </div>

        {/* Two columns */}
        <div className="flex gap-8 h-full min-h-0">
          {/* Video */}
          <div
            className="video-content relative border border-black flex-1 flex items-center justify-center min-h-0 overflow-hidden bg-black cursor-pointer"
            onClick={handleClick}
          >
            {/* Responsive YouTube Embed */}
            <div className="relative w-full aspect-video">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/VIDEO_ID?rel=0&modestbranding=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>

          {/* Games */}
          <div className="game-content border border-black flex-1 flex items-center justify-center min-h-0">
            Games go here
          </div>
        </div>
      </div>
    </div>
  );
}


