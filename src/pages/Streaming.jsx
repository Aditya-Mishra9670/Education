import React, { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import { ChevronDown, ChevronUp } from "lucide-react";

const Streaming = () => {
  const { id } = useParams();
  const [showDescription, setShowDescription] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const thumbnail =
    "https://do6gp1uxl3luu.cloudfront.net/banner+and+logos/njw.webp";
  const url =
    "https://res.cloudinary.com/dzitsseoz/video/upload/v1739382842/sampleVideo/bs2rewkuiowbi3or8r21.mp4";

  const videoSources = useMemo(() => {
    const [base, path] = url.split("/upload/");
    const qualities = [
      { quality: 99, size: 1080 },
      { quality: 80, size: 720 },
      { quality: 60, size: 480 },
      { quality: 40, size: 360 },
      { quality: 30, size: 240 },
      { quality: 10, size: 144 },
    ];

    return {
      type: "video",
      sources: qualities.map(({ quality, size }) => ({
        src: `${base}/upload/f_auto:video,q_${quality}/${path.replace(
          ".mp4",
          ""
        )}`,
        type: "video/mp4",
        size,
      })),
    };
  }, []);

  const plyrOptions = useMemo(
    () => ({
      controls: [
        "play",
        "pause",
        "progress",
        "buffered",
        "current-time",
        "duration",
        "mute",
        "volume",
        "captions",
        "settings",
        "pip",
        "airplay",
        "fullscreen",
      ],
      settings: ["quality", "speed", "loop"],
      quality: {
        default: 480,
        options: [1080, 720, 480, 360, 240, 144],
      },
      speed: {
        selected: 1,
        options: [0.5, 1, 1.25, 1.5, 1.75, 2],
      },
      loop: { active: false },
    }),
    []
  );

  const similarVideos = [
    {
      id: 1,
      title: "Introduction to React",
      thumbnail: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Advanced State Management",
      thumbnail: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "React Hooks Explained",
      thumbnail: "https://via.placeholder.com/150",
    },
  ];

  return (
    <main className="pt-[69px] bg-base-100 min-h-screen flex flex-col items-center">
      <section className="w-full max-w-4xl p-4">
        <div className="relative w-full rounded-lg overflow-hidden shadow-lg aspect-video">
          {!isPlaying && (
            <img
              src={thumbnail}
              alt="Video Thumbnail"
              className="absolute inset-0 w-full h-full object-cover cursor-pointer"
              onClick={() => setIsPlaying(true)}
            />
          )}
          {isPlaying && (
            <Plyr
              source={videoSources}
              options={plyrOptions}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
          )}
        </div>
      </section>

      <section className="w-full max-w-4xl p-4">
        <button
          className="flex items-center gap-2 text-primary font-medium"
          onClick={() => setShowDescription(!showDescription)}
        >
          {showDescription ? "Hide Description" : "Show Description"}
          {showDescription ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </button>
        {showDescription && (
          <p className="text-base text-justify mt-2 text-base-content">
            This is a detailed description of the video content. It explains key
            points covered in the session and provides additional insights for
            viewers.
          </p>
        )}
      </section>

      <section className="w-full max-w-4xl p-4">
        <h2 className="text-xl font-bold mb-4">Similar Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {similarVideos.map((video) => (
            <Link to={`/course/video/${video.id}`} key={video.id}>
              <div className="bg-base-200 rounded-lg p-2 shadow-md hover:shadow-lg transition-shadow">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-40 object-cover rounded-lg"
                  loading="lazy"
                />
                <h3 className="text-sm font-medium mt-2 text-center line-clamp-2">
                  {video.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Streaming;
