import React, { useState, useMemo, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import { ChevronDown, ChevronUp, Play } from "lucide-react";
import { useUserStore } from "../store/useuserStore";

const Streaming = () => {
  const { id } = useParams();
  const { getVideo, getSimilarVideos } = useUserStore();
  const [videoData, setVideoData] = useState({});
  const [similarVideos, setSimilarVideos] = useState([]);
  const [showDescription, setShowDescription] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const res = getVideo(id);
    setVideoData(res);
    setSimilarVideos(getSimilarVideos(res?.category));
  }, [id, getVideo, getSimilarVideos]);

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
      quality: { default: 480, options: [1080, 720, 480, 360, 240, 144] },
      speed: { selected: 1, options: [0.5, 1, 1.25, 1.5, 1.75, 2] },
      loop: { active: false },
    }),
    []
  );

  const videoSources = useMemo(
    () => ({
      type: "video",
      sources: [{ src: videoData.videoUrl, type: "video/mp4" }],
      poster: videoData.thumbnail,
    }),
    [videoData]
  );

  return (
    <main className="pt-[69px] bg-base-100 min-h-screen flex flex-col items-center">
      <section className="w-full max-w-4xl p-4">
        <div className="relative w-full rounded-lg overflow-hidden shadow-lg aspect-video">
          {!isPlaying ? (
            <div
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer"
              onClick={() => setIsPlaying(true)}
            >
              <img
                src={videoData.thumbnail}
                alt="Video Thumbnail"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <Play size={60} className="text-white z-10" />
            </div>
          ) : (
            <Plyr source={videoSources} options={plyrOptions} />
          )}
        </div>
      </section>

      <section className="w-full max-w-4xl p-4">
        <button
          className="flex items-center gap-2 text-primary font-medium"
          onClick={() => setShowDescription(!showDescription)}
        >
          {showDescription ? "Hide Description" : "Show Description"}
          {showDescription ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        {showDescription && (
          <p className="text-base text-justify mt-2 text-base-content">
            {videoData.description}
          </p>
        )}
      </section>

      <section className="w-full max-w-4xl p-4">
        <h2 className="text-xl font-bold mb-4">Continue Watching</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {similarVideos.map((video) => (
            <Link to={`/course/video/${video.id}`} key={video.id} className="block">
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
