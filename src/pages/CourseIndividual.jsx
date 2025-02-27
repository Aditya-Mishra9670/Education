import React, { useEffect, useState } from "react";
import { Star, StarHalf, AlertTriangle, Users, Loader } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useUserStore } from "../store/useuserStore";
import { IndividualCourseSkeleton, ReportForm } from "../components";
import { useAuthStore } from "../store/useAuthStore";
import toast from "react-hot-toast";
import { useLearnStore } from "../store/useLearnStore";

const CourseIndividual = () => {
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);

  const { setSelectedCourse } = useLearnStore();
  const [showReportForm, setShowReportForm] = useState(false);
  const [reviews, setReviews] = useState([]);
  const {
    getCourse,
    courseLoading,
    getReviews,
    abandonCourse,
    addReview,
    submitReport,
    enrollInCourse,
    enrollingInCourse,
    getMyCourses
  } = useUserStore();
  const { courseId } = useParams();
  const [submittingReview, setSubmittingReview] = useState(false);
  const [abandoningCourse, setAbandoningCourse] = useState(false);
  const { user } = useAuthStore();
  const [isRegistered, setIsregistered] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const handleEnrollment = async () => {
    await enrollInCourse(course?._id);
    setCourse((prev)=>({
      ...prev,
      enrolledStudents: [...prev.enrolledStudents, user._id]
    }))
    getMyCourses();
    setIsregistered(true);
  };

  const handleAddReview = async () => {
    if (userRating <= 0 || !reviewText) {
      toast.error("Please provide rating and review");
      return;
    }
    setSubmittingReview(true);
    const added = await addReview({
      courseId,
      rating: userRating,
      review: reviewText,
    });
    if (added)
      setReviews((prev) => [
        ...prev,
        {
          rating: userRating,
          review: reviewText,
          studentId: {
            name: user.name,
            profilePic: user.profilePic,
          },
          createdAt: new Date().toISOString(),
        },
      ]);
    setSubmittingReview(false);
    setReviewText("");
    setUserRating(0);
  };

  const [showAbandonAlert, setshowAbandonAlert] = useState(false);

  const confirmAbandon = async () => {
    await abandonCourse(course?._id);
    setCourse((prev)=>({
      ...prev,
      enrolledStudents: prev.enrolledStudents.filter((id) => id !== user._id),  
    }))
    setSelectedCourse(null);
    setshowAbandonAlert(false);
    setIsregistered(false);
  };

  //abandonCourse  are still to be done

  useEffect(() => {
    (async () => {
      const res = await getCourse(courseId);
      const reviewData = await getReviews(courseId);
      setReviews(reviewData);
      setCourse(res);
      if (res?.enrolledStudents?.includes(user._id)) setIsregistered(true);
    })();
  }, [courseId, getCourse, getReviews]);

  const handleReport = (reason) => {
    console.log(reason);
    submitReport({
      entityReported: courseId,
      type: "Course",
      reasonToReport: reason.reason,
      details: reason.details,
    });
    setShowReportForm(false);
  };

  if (courseLoading) return <IndividualCourseSkeleton />;
  if (!course)
    return (
      <h1 className="text-center text-error h-screen text-2xl">
        Course not found
      </h1>
    );

  return (
    <main className="pt-[69px] bg-base-100 min-h-screen flex flex-col items-center">
      {showAbandonAlert && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50">
          <div className="bg-base-200 p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Are you sure?</h2>
            <p className="text-sm mb-4">
              Do you really want to abandon this course? This will remove all
              your progress and certificate if allotted.
            </p>
            <div className="flex justify-end gap-4">
              <button
                className="btn btn-error"
                onClick={() => setshowAbandonAlert(false)}
              >
                Cancel
              </button>
              <button
                className="btn btn-primary flex items-center gap-2"
                disabled={abandoningCourse}
                onClick={confirmAbandon}
              >
                {abandoningCourse ? (
                  <Loader className="size-5 animate-spin" />
                ) : null}
                {abandoningCourse ? "Abandoning ..." : "Abandon Course"}
              </button>
            </div>
          </div>
        </div>
      )}
      <section
        className="w-full h-72 bg-contain bg-center relative"
        style={{ backgroundImage: `url(${course?.thumbnail})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-base-100" />
      </section>

      <article className="w-full max-w-5xl bg-base-200 shadow-lg rounded-lg p-8 -mt-16 z-10">
        <header className="flex items-center gap-6 mb-6">
          <div className="avatar w-24 h-24 rounded-full ring-4 ring-primary overflow-hidden">
            <img
              src={course?.teacherId.profilePic}
              alt="Teacher"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold">{course?.teacherId.name}</h2>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {[
            ["Category", course?.category],
            ["Language", course?.language],
            ["Lessons", course?.lectures.length],
          ].map(([label, value], index) => (
            <div key={index}>
              <h3 className="font-medium">{label}:</h3>
              <p className="text-primary">{value}</p>
            </div>
          ))}
          <div>
            <h3 className="font-medium">Rating:</h3>
            <div className="flex items-center gap-1 text-primary">
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
          <h1 className="text-3xl font-bold mb-4">
            {course?.title.toUpperCase()}
          </h1>
          <p className="text-sm flex items-center my-2">
            <Users className="h-5 w-5 mr-2" /> {course?.enrolledStudents.length}{" "}
            Students Enrolled
          </p>
          <p className="text-base leading-7 text-justify">
            {course?.description}
          </p>
        </section>
      </article>

      <section className="w-full max-w-5xl bg-base-200 shadow-lg rounded-lg p-8 mt-8">
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div
              key={review._id}
              className="flex items-start gap-4 p-4 border-b border-gray-300"
            >
              <img
                src={review.studentId.profilePic}
                alt="Profile"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <div className="flex items-center max-w-3xl w-full justify-between">
                  <h3 className="font-bold ">{review.studentId.name}</h3>
                  <p className="text-xs ml-5">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-primary">
                  {Array.from({ length: Math.floor(review.rating) }, (_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4"
                      color="yellow"
                      fill="yellow"
                    />
                  ))}
                  {review.rating % 1 > 0 && (
                    <StarHalf
                      className="w-4 h-4"
                      color="yellow"
                      fill="yellow"
                    />
                  )}
                </div>
                <p className="text-sm my-1">{review.review}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No reviews yet</p>
        )}
      </section>

      {isRegistered && (
        <div className=" my-6 w-full max-w-5xl">
          <textarea
            className="w-full mb-2 p-2 border rounded"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Write your review..."
          />
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((num) => (
              <Star
                key={num}
                className="w-6 h-6 cursor-pointer"
                fill={userRating >= num ? "yellow" : "none"}
                stroke="yellow"
                onClick={() => setUserRating(num)}
              />
            ))}
          </div>
          <button
            className="btn btn-primary mt-2"
            disabled={submittingReview}
            onClick={handleAddReview}
          >
            {submittingReview ? (
              <>
                <Loader className="size-5 animate-spin" />
                Submitting ...
              </>
            ) : (
              "Submit Review"
            )}
          </button>
        </div>
      )}

      <footer className="w-full max-w-5xl flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 p-4">
        {!isRegistered ? (
          <button
            className="btn btn-primary mt-2"
            disabled={enrollingInCourse}
            onClick={handleEnrollment}
          >
            {enrollingInCourse ? (
              <>
                <Loader className="size-5 animate-spin" />
                Enrolling ...
              </>
            ) : (
              "Enroll"
            )}
          </button>
        ) : (
          <>
            <button
              className="btn btn-primary"
              onClick={() => {
                setSelectedCourse(course);
                navigate(`/course/resume/${courseId}`);
              }}
            >
              Continue
            </button>
            <button
              className="btn btn-error"
              onClick={() => setshowAbandonAlert(true)}
            >
              Abandon Course
            </button>
          </>
        )}
        <button
          className="btn btn-outline btn-error flex items-center gap-2"
          onClick={() => setShowReportForm(true)}
        >
          <AlertTriangle className="w-5 h-5" /> Report
        </button>
      </footer>

      {showReportForm && (
        <ReportForm
          onSubmit={handleReport}
          onCancel={() => setShowReportForm(false)}
        />
      )}
    </main>
  );
};

export default CourseIndividual;
