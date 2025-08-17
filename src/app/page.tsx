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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registered user:", formData);

    // 👉 After registration, show Home page
    setRegistered(true);
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
                placeholder="Enter your name"
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
                placeholder="you@example.com"
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
                placeholder="••••••••"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Register
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
        {/* Intro row */}
        <div className="intro-content grid place-items-center text-[13pt] text-center max-w-prose mx-auto">
          Pravitti is about effort, learning, and progress. <br /> <br />
          What exactly is {"'"}Pravitti{"'"}? <br />
          It is a theme and a way of thinking. The word
          stands for positivity, mindfulness, and an effort-based approach to life. It
          reminds us that progress is not about sudden change, but about small, steady
          actions that add up to something meaningful. <br /><br />
          Pravitti is not about being perfect. It is about showing up, trying,
          experimenting, and learning. Every person who takes part adds value through
          their effort, and together we shape a more hopeful and purposeful future. <br />
          Pravitti is where curiosity meets effort, and effort shapes the future.
        </div>

        {/* Two columns */}
        <div className="flex gap-8 h-full min-h-0">
          {/* VIDEO TILE */}
          <div
            className="video-content relative border border-black flex-1 flex items-center justify-center min-h-0 overflow-hidden bg-black cursor-pointer"
            onClick={handleClick}
          >
            <video
              src="/videos/Digital_Transformation_in_Southeast_Asia.mp4"
              controls
              playsInline
              className="w-full h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* CTA button */}
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-3 px-3 py-1 rounded text-sm bg-red-600 text-white shadow hover:opacity-90"
              onClick={(e) => e.stopPropagation()}
            >
              Watch on YouTube!
            </a>
          </div>

          {/* Games Column */}
          <div className="game-content border border-black flex-1 flex items-center justify-center min-h-0">
            Games go here
          </div>
        </div>
      </div>
    </div>
  );
}

