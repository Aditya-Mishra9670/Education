import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { CourseSkeleton } from "../components";
import sample from "../sampleStore/sample";

const Courses = () => {
  const [courses, setCourses] = useState(sample);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();

  //   const fetchCourses = useCallback(async () => {
  //     if (!hasMore) return;
  //     setLoading(true);
  //     try {
  //       const response = await fetch(`/api/courses?page=${page}`);
  //       const data = await response.json();
  //       setCourses((prev) => [...prev, ...data.courses]);
  //       setHasMore(data.hasMore);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }, [page, hasMore]);

  //   useEffect(() => {
  //     fetchCourses();
  //   }, [fetchCourses]);


  // Filters will be added for the sorting of courses (Date Posted, length, Category(options))


  
  //   useEffect(() => {
  //     const handleScroll = () => {
  //       const { scrollTop, clientHeight, scrollHeight } =
  //         document.documentElement;
  //       if (
  //         scrollHeight - scrollTop - clientHeight < 300 &&
  //         !loading &&
  //         hasMore
  //       ) {
  //         setPage((prev) => prev + 1);
  //       }
  //     };

  //     window.addEventListener("scroll", handleScroll);
  //     return () => window.removeEventListener("scroll", handleScroll);
  //   }, [loading, hasMore]);

  return (
    <div className="pt-20 px-5 bg-base-100">
      <h1 className="text-3xl font-bold text-center mb-8">Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            onClick={() => navigate(course.title)}
            className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <figure>
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{course.title}</h2>
              <p className="text-sm">{course.description}</p>
              <div className="flex justify-between text-sm mt-4">
                <span className="badge badge-primary">{course.language}</span>
                <span className="font-semibold">{course.level}</span>
              </div>
              <p className="text-sm mt-2">
                Category:{" "}
                <span className="text-primary">{course.category}</span>
              </p>
              <p className="text-sm">
                Rating: <span className="text-primary">{course.rating}</span>
              </p>
              <p className="text-sm">
                Teacher:{" "}
                <span className="text-primary">{course.teacherName}</span>
              </p>
              <div className="card-actions mt-4">
                <button className="btn btn-primary w-full">View Course</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {loading && <CourseSkeleton />}
    </div>
  );
};

export default Courses;
