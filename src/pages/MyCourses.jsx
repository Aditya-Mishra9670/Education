import React from "react";
import { Star, Download, StarHalf } from "lucide-react";
import { enrollments } from "../sampleStore/sample";
import { useNavigate } from "react-router-dom";

const CourseList = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6 pt-[69px]">
      {enrollments.map((enrollment, index) => (
        <article
        key={index}
        className="card bg-base-200 shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden flex flex-col sm:flex-row items-center sm:items-start p-4 space-y-4 sm:space-y-0 sm:space-x-4"
      >
        <div className="w-full sm:w-1/3">
          <img
            src={enrollment.courseId.thumbnail}
            alt={enrollment.courseId.title}
            className="rounded-lg w-full h-48 sm:h-full object-cover"
          />
        </div>
          <div className="p-4 flex flex-col w-full sm:w-2/3">
            <h2 className="text-2xl font-bold mb-2">
              {enrollment.courseId.title}
            </h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {enrollment.courseId.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="badge bg-primary/10 text-primary font-semibold px-2 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center text-sm mb-3">
              <span className="badge badge-primary font-bold px-3 py-1 rounded-full">
                {enrollment.courseId.language}
              </span>
              <span className="font-semibold">{enrollment.courseId.level}</span>
            </div>
            <p className="text-sm mb-3">
              <strong>Category:</strong>{" "}
              <span className="text-primary">
                {enrollment.courseId.category}
              </span>
            </p>
            <div className="text-sm flex items-center mb-4">
              <strong className="mr-2">
                Rating: {enrollment.courseId.rating}
              </strong>
              <div className="flex items-center gap-[2px] text-primary">
                {Array.from(
                  { length: Math.floor(enrollment.courseId.rating) },
                  (_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5"
                      color="yellow"
                      fill="yellow"
                    />
                  )
                )}
                {enrollment.courseId.rating % 1 > 0 && (
                  <StarHalf className="w-5 h-5" color="yellow" fill="yellow" />
                )}
              </div>
            </div>
            <div className="flex items-center justify-between text-sm mb-3">
              <span className="flex items-center">
                <strong>Teacher:</strong>{" "}
                <span className="text-primary ml-1">
                  {enrollment.courseId.teacherName}
                </span>
              </span>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRW4A7U_-p0YVaW4AXeq0LOqucj0ludkVVUQ&s"
                alt={enrollment.courseId.teacherName}
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
            <div className="w-full mb-4">
              <progress
                className="progress progress-primary w-full"
                value={enrollment.progress}
                max="100"
              />
              <span className="text-sm font-semibold mt-1 block text-right">
                {enrollment.progress}% completed
              </span>
            </div>
            <div className="flex items-center justify-between gap-2">
              {!enrollment.completed && (
                <button
                  className="btn btn-primary w-1/2 py-2 font-medium"
                  onClick={() => navigate(`/course/${enrollment.courseId._id}`)}
                >
                  Continue
                </button>
              )}
              {enrollment.certificateUrl && (
                <a
                  href={enrollment.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-1/2 py-2 btn hover:btn-info btn-outline  font-medium"
                >
                  
                  View Certificate
                </a>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default CourseList;
