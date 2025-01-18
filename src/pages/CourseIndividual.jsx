import React, { useState } from "react";
import { User } from "lucide-react";
import sample from "../sampleStore/sample";

const CourseIndividual = () => {
  const [loading, setLoading] = useState(false);
  const isRegistered = false;
  const course = sample[5];

  const handleAction = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };
 //better styling needed
  return (
    <div className="pt-20 px-4 bg-base-100 min-h-screen flex justify-center items-start">
      <div className="card w-full max-w-5xl bg-base-200 shadow-xl">
        <div className="flex flex-col lg:flex-row">
          <figure className="lg:w-1/3">
            <img
              src={course?.thumbnail}
              alt={course?.title}
              className="w-full h-full object-contain rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none"
            />
          </figure>
          <div className="card-body lg:w-2/3 p-6">
            <h1 className="text-4xl font-bold mb-4">{course?.title}</h1>
            <div className="overflow-hidden max-h-48 lg:max-h-64 relative mb-6">
              <p className="text-sm leading-6 pr-3 text-justify overflow-y-auto scrollbar-thin scrollbar-thumb-base-300">
                {course?.description}
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <p>
                <span className="font-semibold">Category:</span>{" "}
                <span className="text-primary">{course?.category}</span>
              </p>
              <p>
                <span className="font-semibold">Language:</span>{" "}
                <span className="text-primary">{course?.language}</span>
              </p>
              <p>
                <span className="font-semibold">Length:</span>{" "}
                <span className="text-primary">{course?.length}</span>
              </p>
            </div>
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-sm">
                  <span className="font-semibold">Teacher:</span>{" "}
                  <span className="text-primary">{course?.teacherName}</span>
                </p>
                <p className="text-sm mt-2">
                  <span className="font-semibold">Rating:</span>{" "}
                  <span className="text-primary">{course?.rating}</span>
                </p>
              </div>
              <div className="avatar">
                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src={course?.teacherImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRW4A7U_-p0YVaW4AXeq0LOqucj0ludkVVUQ&s"}
                    alt="Teacher"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-6">
              <User className="w-5 h-5 text-base-content" />
              <span className="text-sm">{course?.enrolledStudents || 20} Students Enrolled</span>
            </div>
            <div className="card-actions">
              <button
                className={`btn w-full ${
                  isRegistered ? "btn-success" : "btn-primary"
                }`}
                onClick={handleAction}
                disabled={loading}
              >
                {loading
                  ? "Processing..."
                  : isRegistered
                  ? "Continue Course"
                  : "Enroll Now"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    // Similar courses recommendation for students
  );
};

export default CourseIndividual;
