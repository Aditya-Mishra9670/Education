import React, { useState, useMemo, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import { ChevronDown, ChevronUp, Loader, Play, X } from "lucide-react";
import { useUserStore } from "../store/useuserStore";
import { useLearnStore } from "../store/useLearnStore";
import { useAuthStore } from "../store/useAuthStore";
import toast from "react-hot-toast";

const Streaming = () => {
  const { id } = useParams();
  const { user } = useAuthStore();
  const { getVideo, getSimilarVideos } = useUserStore();
  const { selectedVideo, getComments, addComment } = useLearnStore();
  const [videoData, setVideoData] = useState({});
  const [similarVideos, setSimilarVideos] = useState([]);
  const [showDescription, setShowDescription] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [comments, setComments] = useState("");
  const [commentsList, setCommentsList] = useState([]);
  const [addingComment, setAddingComment] = useState(false);
  const [showAllComments, setShowAllComments] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!selectedVideo || selectedVideo._id !== id) {
        const video = await getVideo(id);
        setVideoData(video);
      } else {
        setVideoData(selectedVideo);
      }
      const similar = await getSimilarVideos(id);
      setSimilarVideos(similar);

      const comments = await getComments(id);
      setCommentsList(comments);
    };
    fetchData();
  }, [id, getVideo, getSimilarVideos, getComments]);

  const handleCommentSubmit = async () => {
    if (comments.trim()) {
      setAddingComment(true);
      try {
        await addComment({ videoId: id, comment: comments });
        setCommentsList([
          {
            comment: comments,
            id: Date.now(),
            studentId: {
              name: user.name,
              profilePic: user.profilePic,
            },
          },
          ...commentsList,
        ]);
        setComments("");
      } catch (error) {
        console.log(error);
      } finally {
        setAddingComment(false);
      }
    } else {
      toast.error("Please write something before posting.");
    }
  };

  return (
    <main className="pt-20 bg-base-100 min-h-screen flex flex-col items-center">
      <section className="w-full max-w-4xl p-4">
        <div className="relative w-full rounded-xl overflow-hidden shadow-xl aspect-video">
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
            <Plyr
              source={{
                type: "video",
                sources: [{ src: videoData.url, type: "video/mp4" }],
              }}
            />
          )}
        </div>
      </section>

      <section className="w-full max-w-4xl p-4 space-y-4">
        <h3 className="text-xl font-semibold line-clamp-2">
          {videoData.title}
        </h3>
        <button
          className="flex items-center gap-2 font-medium text-primary"
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
          <p className="text-base text-justify mt-2">{videoData.description}</p>
        )}
      </section>

      <section className="w-full max-w-4xl p-4 space-y-4">
        <h2 className="text-lg font-semibold">Comments</h2>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Write a comment..."
            className="input input-bordered w-full"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleCommentSubmit}>
            {addingComment ? (
              <Loader className="size-5 animate-spin" />
            ) : (
              "Post"
            )}
          </button>
        </div>
        <div className="space-y-3">
          {commentsList.length > 0 && (
            <div className="bg-base-200 p-3 rounded-xl shadow-md">
              <p className="font-semibold">{commentsList[0].studentId.name}</p>
              <p className="text-sm">{commentsList[0].comment}</p>
            </div>
          )}
          {commentsList.length > 1 && (
            <button
              className="text-primary font-medium mt-2"
              onClick={() => setShowAllComments(true)}
            >
              View all comments
            </button>
          )}
        </div>
      </section>

      {showAllComments && (
        <div className="fixed inset-0 z-30 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-base-100 max-w-lg w-full p-4 rounded-xl shadow-xl relative">
            <button
              className="absolute top-2 right-2 btn btn-sm btn-circle btn-error"
              onClick={() => setShowAllComments(false)}
            >
              <X size={20} />
            </button>
            <h2 className="text-lg font-semibold mb-4 text-primary">
              All Comments
            </h2>
            <div className="max-h-80 overflow-y-auto space-y-3 p-2">
              {commentsList.length > 0 ? (
                commentsList.map((comment) => {
                  const dateIST = new Date(comment.createdAt).toLocaleString(
                    "en-IN",
                    {
                      timeZone: "Asia/Kolkata",
                      hour: "2-digit",
                      minute: "2-digit",
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    }
                  );

                  return (
                    <div
                      key={comment._id}
                      className="bg-base-200 p-3 rounded-lg flex items-start gap-3"
                    >
                      <div className="avatar">
                        <div className="w-10 rounded-full">
                          <img
                            src={comment.studentId.profilePic}
                            alt="Profile"
                          />
                        </div>
                      </div>

                      <div className="flex-1">
                        <p className="font-semibold text-secondary">
                          {comment.studentId.name}
                        </p>
                        <p className="text-sm text-base-content">
                          {comment.comment}
                        </p>
                      </div>

                      <p className="text-xs text-gray-500">{dateIST}</p>
                    </div>
                  );
                })
              ) : (
                <p className="text-center text-base-content">
                  No comments yet.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Streaming;
