'use client';
import { useState } from "react";
const YOUTUBE_URL = "https://www.youtube.com/channel/UCUqBuKKyxnimiYXPzo4vICw";

export default function App() {
  const [registered, setRegistered] = useState(false);
  const [formData] = useState({
    name: "",
    email: "",
    password: "",
  });
  // Removed handleChange, handleSubmit, loading -- not needed

  const handleClick = () => {
    window.open(YOUTUBE_URL, "_blank", "noopener,noreferrer");
  };

  // === REGISTRATION PAGE =======
  if (!registered) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white shadow-xl rounded-2xl w-full max-w-md overflow-hidden border border-gray-100">
          {/* Accent Header */}
          <div className="bg-gradient-to-r from-orange-400 to-orange-500 h-2 w-full"></div>
          <div className="p-10">
            <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">
              Register for Pravitti
            </h1>
            <p className="text-center text-gray-500 mb-8 text-sm">
              Effort • Learning • Progress
            </p>
            <div className="text-center mt-8">
              <a
                href="https://forms.gle/aNfjebXjtDhxA1X29"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-orange-500 text-white py-2.5 rounded-lg font-semibold shadow hover:bg-orange-600 transition inline-block"
                style={{ padding: "12px 24px", marginTop: "15px", textDecoration: "none" }}
              >
                Register via Google Form
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // === HOME PAGE =======
  return (
    <div className="font-sans min-h-screen flex flex-col gap-8">
      {/* Title */}
      <div className="event-title w-full flex items-center justify-center p-6 
                bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 
                rounded-b-3xl shadow-md">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide text-white drop-shadow-lg">
          Pravitti <span className="text-black">Skillforge</span>
        </h1>
      </div>
      {/* Intro */}
      <div className="intro-content grid place-items-center text-center max-w-prose mx-auto p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-md animate-fadeIn">
        <h2 className="text-2xl font-semibold">
          Welcome <span className="text-indigo-600">{formData.name}</span> 🎉
        </h2>
        <p className="mt-4 text-gray-600 text-base leading-relaxed">
          Pravitti is about effort, learning, and progress...
        </p>
      </div>
      {/* Two columns */}
      <div className="flex gap-8 px-8">
        {/* Video */}
        <div
          className="video-content relative flex-1 flex items-center justify-center overflow-hidden bg-black rounded-2xl shadow-lg cursor-pointer transition-transform hover:scale-[1.01]"
          onClick={handleClick}
        >
          <div className="relative w-full aspect-video">
            <iframe
              className="absolute inset-0 w-full h-full rounded-2xl"
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
        <div className="game-content flex-1 flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-100 rounded-2xl shadow-inner text-gray-700 font-medium">
          Games will go here 🎮
        </div>
      </div>
    </div>
  );
}
