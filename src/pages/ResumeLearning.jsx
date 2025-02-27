import React, { useEffect, useState } from "react";
import { useLearnStore } from "../store/useLearnStore";
import { Loader } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const ResumeLearning = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { selectedCourse, setSelectedCourse, setSelectedVideo,getSelectedCourse } = useLearnStore();
  const [loading, setLoading] = useState(false);

  const handleWatch = (lecture) => {
    setSelectedVideo(lecture);
    console.log(lecture)
    navigate(`/course/video/${lecture._id}`);
  };

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        const course = await getSelectedCourse(courseId);
        setSelectedCourse(course);
      } finally {
        setLoading(false);
      }
    };

    if (!selectedCourse || selectedCourse?.courseId?._id !== courseId) {
      fetchCourse();
    }
  }, [selectedCourse, courseId, getSelectedCourse, setSelectedCourse]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader className="size-10 animate-spin text-primary" />
      </div>
    );
  }

  if (!selectedCourse || selectedCourse?.courseId?._id !== courseId) {
    return (
      <div className="flex items-center justify-center min-h-screen text-error text-xl font-semibold">
        Course not found.
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 pt-[69px]">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold">{selectedCourse.courseId.title}</h1>
        <div className="mt-3 w-full max-w-md mx-auto bg-gray-200 rounded-full h-4 overflow-hidden">
          <div
            className="bg-primary h-full rounded-full transition-all duration-300"
            style={{ width: `${selectedCourse.progress}%` }}
          ></div>
        </div>
        <p className="text-sm mt-1 font-medium">{selectedCourse.progress}% Completed</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {selectedCourse.courseId.lectures.map((lecture) => (
          <div key={lecture._id} className="card bg-base-100 shadow-xl rounded-xl overflow-hidden transition-transform transform hover:scale-105">
            <figure className="relative h-48">
              <img
                src={lecture.thumbnail}
                alt={lecture.title}
                className="w-full h-full object-cover"
              />
              <p className="absolute bottom-2 right-2 bg-black bg-opacity-90 text-white text-xs px-2 py-1 rounded-md">
                {new Date(lecture.duration * 1000).toISOString().substr(11, 8)}
              </p>
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-lg font-semibold">{lecture.title}</h2>
              <button
                className="btn btn-primary w-full mt-3"
                onClick={() => handleWatch(lecture)}
              >
                Watch Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeLearning;
