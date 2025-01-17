import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle, XCircle } from "lucide-react";
import Hero1Img from "../../public/Hero1.png";

const Home = () => {
  //backend integration will evaluate authUser
  const userAuth = false;
  return (
    <div className="bg-base-200 text-base-content pt-[67px]">
      <header className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-base-content">
            Empower Your Future with{" "}
            <span className="text-primary">Free Quality Education</span>
          </h1>
          <p className="border border-primary inline-block text-sm p-1 mt-2 rounded-xl font-semibold shadow-md">
            Empowering Minds, One Free Lesson at a Time!
          </p>

          <p className="mt-6 text-lg lg:text-xl text-base-content leading-relaxed">
            Unlock the power of knowledge with StudyTube. Our platform offers
            premium-quality resources, helping you master skills and achieve
            your dreams—all without financial barriers. Join a thriving
            community of learners shaping a better tomorrow.
          </p>

          <div className="mt-8 flex gap-6">
            <Link
              to={userAuth ? "/explore" : "/login"}
              className="btn btn-primary"
            >
              Get Started
            </Link>
            <Link to="/about" className="btn btn-outline">
              Learn More
            </Link>
          </div>
        </div>
        <div className="relative">
          <img
            src={Hero1Img}
            alt="Empowered Learning"
            className="w-[90%] mx-auto object-contain"
          />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16 space-y-12">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-6">
            What Makes Us Better Than Others?
          </h1>
          <p className="text-lg text-base-content">
            At StudyTube, we focus on delivering high-quality education to
            empower individuals worldwide. Here's how we stand out:
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-base-100 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-error mb-6">
              Other Platforms
            </h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <XCircle className="text-error w-8 h-8" />
                <span className="text-lg text-base-content">
                  High subscription costs that restrict access.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <XCircle className="text-error w-8 h-8" />
                <span className="text-lg text-base-content">
                  No real-time progress tracking to measure achievements.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <XCircle className="text-error w-8 h-8" />
                <span className="text-lg text-base-content">
                  Inconsistent moderation leading to unverified content.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <XCircle className="text-error w-8 h-8" />
                <span className="text-lg text-base-content">
                  Inactive support, causing delays in resolving issues.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-base-100 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-success mb-6">
              Why Choose StudyTube?
            </h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <CheckCircle className="text-success w-8 h-8" />
                <span className="text-lg text-base-content">
                  Access to high-quality education completely free of cost.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="text-success w-8 h-8" />
                <span className="text-lg text-base-content">
                  Earn certificates to showcase your achievements.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="text-success w-8 h-8" />
                <span className="text-lg text-base-content">
                  Track your progress with real-time analytics and tools.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="text-success w-8 h-8" />
                <span className="text-lg text-base-content">
                  Dedicated team ensuring content quality and prompt support.
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-base-content mb-8 text-center">
              Easy Steps to Achieve Success
            </h2>
            <ul className="timeline timeline-vertical ">
              <li>
                <div className="timeline-start timeline-box bg-success text-success-content font-semibold">
                  Login / Register
                </div>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box bg-success text-success-content font-semibold">
                  Choose Course
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-start timeline-box bg-success text-success-content font-semibold">
                  Enroll in Course
                </div>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box bg-success text-success-content font-semibold">
                  Start Learning
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-start timeline-box bg-success text-success-content font-semibold">
                  Get Certified
                </div>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-success/10 p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-success mb-6">
              Popular Courses
            </h2>
            <ul className="space-y-8">
              <li className="flex items-center gap-4">
                <div className="w-4 h-4 bg-success rounded-full"></div>
                <span className="text-lg font-medium ">Web Development</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-4 h-4 bg-success rounded-full"></div>
                <span className="text-lg font-medium ">Data Science</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-4 h-4 bg-success rounded-full"></div>
                <span className="text-lg font-medium ">MERN Stack</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-4 h-4 bg-success rounded-full"></div>
                <span className="text-lg font-medium ">
                  Data Structures & Algorithms
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="text-center mt-16  py-12">
          <h2 className="text-4xl font-extrabold  mb-6">
            Ready to Begin Your Learning Journey?
          </h2>
          <p className="text-lg mb-8 max-w-md mx-auto">
            Unlock a world of knowledge with our top-rated courses. Whether
            you're a beginner or looking to deepen your expertise, we have
            something for everyone. Let's get started today!
          </p>
          <Link
            to={userAuth ? "/explore" : "/login"}
            className="btn btn-primary text-xl text-primary-content py-3 px-8 rounded-full"
          >
            {userAuth ? "Explore Courses" : "Join Now"}
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Home;
