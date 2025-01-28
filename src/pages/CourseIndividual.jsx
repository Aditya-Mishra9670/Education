import React, { useState } from "react";
import { Star, StarHalf, AlertTriangle, Users } from "lucide-react";
import sample from "../sampleStore/sample";
import { ReportForm } from "../components";

const CourseIndividual = () => {
  const [loading, setLoading] = useState(false);
  const isRegistered = true;
  const course = sample[5];
  const [showReportForm,setShowReportForm] = useState(false);

  const handleReport = (reason)=>{
    console.log(reason);
    setShowReportForm(false);
  }

  const handleAction = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <main className="pt-[69px] bg-base-100 min-h-screen flex flex-col items-center">
      <section
        className="w-full h-72 bg-contain  bg-center relative"
        style={{ backgroundImage: `url(${course?.thumbnail})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-base-100" />
      </section>

      <article className="w-full max-w-5xl bg-base-200 shadow-lg rounded-lg p-8 -mt-16 z-10">
        <header className="flex items-center gap-6 mb-8">
          <div className="avatar">
            <div className="w-24 h-24 rounded-full ring-4 ring-primary">
              <img
                src={
                  course?.teacherImage ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRW4A7U_-p0YVaW4AXeq0LOqucj0ludkVVUQ&s"
                }
                alt="Teacher"
              />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">{course?.teacherName}</h2>
            <p className="text-sm flex items-center  mt-2 ">
              <Users className="inline h-5 w-5 mr-2" />{" "}
              {course?.enrolledStudents || 20} Students Enrolled
            </p>
          </div>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div>
            <h3 className="font-medium ">Category:</h3>
            <p className="text-primary">{course?.category}</p>
          </div>
          <div>
            <h3 className="font-medium ">Language:</h3>
            <p className="text-primary">{course?.language}</p>
          </div>
          <div>
            <h3 className="font-medium ">Lessons:</h3>
            <p className="text-primary">{course?.length}</p>
          </div>
          <div>
            <h3 className="font-medium ">Rating:</h3>
            <div className="flex items-center gap-[2px] text-primary">
              {Array.from({ length: Math.floor(course.rating) }, (_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5"
                  color="yellow"
                  fill="yellow"
                />
              ))}
              {course.rating % 1 > 0 && (
                <StarHalf className="w-5 h-5" color="yellow" fill="yellow" />
              )}
            </div>
          </div>
        </section>

        <section>
          <h1 className="text-3xl font-bold mb-4">{course?.title}</h1>
          <p className="text-base leading-7  text-justify">
            {course?.description}
          </p>
        </section>
      </article>

      <footer className="w-full max-w-5xl flex flex-col sm:flex-row justify-center gap-4 mt-8 p-4">
        <button
          className={`btn w-full sm:w-auto ${
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
        <button className="btn btn-outline btn-error flex items-center gap-2"
        onClick={()=>setShowReportForm(true)}
        >
          <AlertTriangle className="w-5 h-5" />
          Report
        </button>
      </footer>
      {showReportForm && <ReportForm onSubmit={(reason)=>handleReport(reason)} onCancel={()=>setShowReportForm(false)}/>}
    </main>
  );
};

export default CourseIndividual;
