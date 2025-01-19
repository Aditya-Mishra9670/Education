import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CourseSkeleton } from "../components";
import sample from "../sampleStore/sample";
import { Star, StarHalf } from "lucide-react";

const Courses = () => {
  const [courses] = useState(sample);
  const [loading] = useState(false);
  const navigate = useNavigate();

  return (
    <main className="pt-20 px-5 mb-5 bg-base-100">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Courses</h1>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <article
            key={index}
            className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden flex flex-col"
          >
            <figure className="w-full h-52 mt-5 flex-shrink-0">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-full m-7 rounded-3xl object-cover"
              />
            </figure>
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold">{course.title}</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {course.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="badge bg-primary/25 text-primary px-2 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between text-sm mt-4">
                <span className="badge badge-primary font-bold px-3 py-1 rounded-full">
                  {course.language}
                </span>
                <span className="font-semibold">{course.level}</span>
              </div>
              <p className="text-sm mt-3">
                <strong>Category:</strong>{" "}
                <span className="text-primary">{course.category}</span>
              </p>
              <div className="text-sm mt-2 flex items-center">
                <strong className="mr-2">Rating: {course.rating}</strong>
                <div className="flex items-center gap-[2px] text-primary">
                  {Array.from(
                    { length: Math.floor(course.rating) },
                    (_, i) => (
                      <Star key={i} className="w-5 h-5" color="yellow" fill="yellow" />
                    )
                  )}
                  {course.rating % 1 > 0 && (
                    <StarHalf className="w-5 h-5" color="yellow" fill="yellow" />
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <span className="flex items-center">
                  <strong>Teacher:</strong>{" "}
                  <span className="text-primary ml-1">{course.teacherName}</span>
                </span>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRW4A7U_-p0YVaW4AXeq0LOqucj0ludkVVUQ&s"
                  alt={course.teacherName}
                  className="w-8 h-8 rounded-full object-cover"
                />
              </div>
              <div className="mt-4 flex-grow flex items-end">
                <button
                  className="btn btn-primary w-full py-2 rounded-lg font-medium"
                  onClick={() => navigate(course.title)}
                >
                  View Course
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
      {loading && <CourseSkeleton />}
    </main>
  );
};

export default Courses;
