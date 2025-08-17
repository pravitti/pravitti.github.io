'use client';

const YOUTUBE_URL = "https://www.youtube.com/channel/UCUqBuKKyxnimiYXPzo4vICw";

export default function Home() {
  const handleClick = () => {
    window.open(YOUTUBE_URL, "_blank", "noopener,noreferrer");
  };

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
          What exactly is 'Pravitti'? <br/>It is a theme and a way of thinking. The word
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
          {/* VIDEO TILE: clickable, but video controls still work */}
          <div
            className="video-content relative border border-black flex-1 flex items-center justify-center min-h-0 overflow-hidden bg-black cursor-pointer"
            onClick={handleClick} // tile click => open YouTube
          >
            <video
              src="/videos/Digital_Transformation_in_Southeast_Asia.mp4"
              controls
              playsInline
              className="w-full h-full object-contain"
              onClick={(e) => e.stopPropagation()} // let controls work, don't trigger tile redirect
            />

            {/* CTA button anchored INSIDE the tile */}
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-3 px-3 py-1 rounded text-sm bg-red-600 text-white shadow hover:opacity-90"
              onClick={(e) => e.stopPropagation()} // avoid double open from tile onClick
            >
              Watch on YouTube!
            </a>
          </div>

          <div className="game-content border border-black flex-1 flex items-center justify-center min-h-0">
            Games go here
          </div>
        </div>
      </div>
    </div>
  );
}
