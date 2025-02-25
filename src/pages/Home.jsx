import React from "react";
import { Link } from "react-router-dom";
import { Compare, Cta, Hero, Steps } from "../components";

const Home = () => {
  //backend integration will evaluate authUser
  const userAuth = false;
  return (
    <div className="bg-base-200 text-base-content pt-[67px]">
      <header className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <Hero/>
      </header>
      <Link to="create-course" >Create Course</Link>
      <Link to="course/addVideo" >Add Video</Link>
      <Link to="courses/video" >Watch Video</Link>

      

      <main className="max-w-7xl mx-auto px-6 py-16 space-y-12">
        <Compare/>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-base-content mb-8 text-center">
              Easy Steps to Achieve Success
            </h2>
            <Steps/>
          </div>

          <div className="bg-base-100 p-8 rounded-xl shadow-2xl">
            <h2 className="text-2xl font-bold text-success mb-6">
              POPULAR COURSES
            </h2>
            <ul className="space-y-8">
              <li className="flex items-center gap-4">
                <div className="w-4 h-4 bg-success rounded-full"></div>
                <span className="text-lg ">WEBSITE DEVELOPMENT</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-4 h-4 bg-success rounded-full"></div>
                <span className="text-lg ">DATA SCIENCE</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-4 h-4 bg-success rounded-full"></div>
                <span className="text-lg  ">DevOps</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-4 h-4 bg-success rounded-full"></div>
                <span className="text-lg">
                  DATA STRUCTURES & ALGORITHMS
                </span>
              </li>
            </ul>
          </div>
        </section>

        <Cta/>
      </main>
    </div>
  );
};

export default Home;
