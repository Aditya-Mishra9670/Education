import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CourseSkeleton } from "../components";
import { Star, StarHalf } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useUserStore } from "../store/useuserStore";

const Courses = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const userInterests = user?.interests || [];
  const { allCourses, getAllCourses, allCoursesLoading } = useUserStore();

  const [filteredCourses, setFilteredCourses] = useState([]);
  const [filters, setFilters] = useState({
    latest: false,
    highlyRated: false,
    myInterests: false,
  });

  useEffect(() => {
    getAllCourses();
  }, []);

  useEffect(() => {
    setFilteredCourses(allCourses);
  }, [allCourses]);

  const toggleHandler = (filter) => {
    setFilters((prev) => {
      const newFilters = { ...prev, [filter]: !prev[filter] };
      applyFilters(newFilters);
      return newFilters;
    });
  };

  const applyFilters = (filters) => {
    let filtered = [...allCourses];

    if (filters.myInterests) {
      filtered = filtered.filter((course) =>
        course?.tags?.some((tag) => userInterests.includes(tag))
      );
    }

    if (filters.highlyRated || filters.latest) {
      filtered.sort((a, b) => {
        if (filters.highlyRated && filters.latest) {
          return b.rating === a.rating
            ? new Date(b.date) - new Date(a.date)
            : b.rating - a.rating;
        }
        return filters.highlyRated
          ? b.rating - a.rating
          : new Date(b.date) - new Date(a.date);
      });
    }

    setFilteredCourses(filtered);
  };

  return (
    <main className="pt-20 px-5 mb-5 bg-base-100">
      <div className="flex my-5 flex-wrap items-center justify-center gap-6">
        {[
          { label: "Latest", key: "latest" },
          { label: "Highly Rated", key: "highlyRated" },
          { label: "My Interests", key: "myInterests" },
        ].map(({ label, key }) => (
          <div key={key} className="flex items-center gap-2">
            <input
              type="checkbox"
              className="toggle toggle-sm sm:toggle-md toggle-info"
              checked={filters[key]}
              onChange={() => toggleHandler(key)}
            />
            <span>{label}</span>
          </div>
        ))}
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.length > 0 &&
          filteredCourses?.map((course, index) => (
            <article
              key={index}
              className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden flex flex-col"
            >
              <figure className="w-full h-52 sm:mt-5 flex-shrink-0">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover sm:m-7 sm:rounded-3xl"
                />
              </figure>
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-xl font-bold">{course.title}</h2>
                <div className="flex flex-wrap gap-2 mt-2">
                  {course.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="badge bg-primary/10 text-primary font-semibold px-2 py-1 rounded-md"
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
                        <Star
                          key={i}
                          className="w-5 h-5"
                          color="yellow"
                          fill="yellow"
                        />
                      )
                    )}
                    {course.rating % 1 > 0 && (
                      <StarHalf
                        className="w-5 h-5"
                        color="yellow"
                        fill="yellow"
                      />
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span className="flex items-center">
                    <strong>Teacher:</strong>{" "}
                    <span className="text-primary ml-1">
                      {course.teacherId.name}
                    </span>
                  </span>
                  <img
                    src={course.teacherId.profilePic}
                    alt={course.teacherId.name}
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
      {filteredCourses.length === 0 && !allCoursesLoading && (
        <main className="pt-20 px-5 mb-5 bg-base-100">
          <div className="flex justify-center items-center h-[50vh]">
            <h1 className="text-2xl font-bold">No Courses Found</h1>
          </div>
        </main>
      )}
      {allCoursesLoading && <CourseSkeleton />}
    </main>
  );
};

export default Courses;
