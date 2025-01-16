import {
    ChevronRight,
    FileText,
    LogOut,
    Settings,
    User,
    Video,
  } from "lucide-react";
  import React from "react";
  import { Link } from "react-router-dom";
  
  const Menu = ({ isOpen }) => {
    return (
      <div
        className={`fixed top-[64px] right-0 ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } h-screen z-30 transition-all duration-300 bg-base-100 shadow-lg w-full sm:w-[350px]`}
      >
        <div className="flex flex-col p-6 gap-4 w-full justify-start h-full">
          <div className="flex items-center justify-between bg-base-200 py-3 px-4 rounded-md hover:bg-primary hover:text-white transition">
            <Link to="/profile" className="flex items-center gap-3">
              <User className="h-5 w-5" />
              <span>Profile</span>
            </Link>
            <ChevronRight className="h-5 w-5" />
          </div>
          <div className="flex items-center justify-between bg-base-200 py-3 px-4 rounded-md hover:bg-primary hover:text-white transition">
            <Link to="/settings" className="flex items-center gap-3">
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
            <ChevronRight className="h-5 w-5" />
          </div>
          <div className="flex items-center justify-between bg-base-200 py-3 px-4 rounded-md hover:bg-primary hover:text-white transition">
            <Link to="/my-courses" className="flex items-center gap-3">
              <Video className="h-5 w-5" />
              <span>My Courses</span>
            </Link>
            <ChevronRight className="h-5 w-5" />
          </div>
          <div className="flex items-center justify-between bg-base-200 py-3 px-4 rounded-md hover:bg-primary hover:text-white transition">
            <Link to="/terms-conditions" className="flex items-center gap-3">
              <FileText className="h-5 w-5" />
              <span>Terms & Conditions</span>
            </Link>
            <ChevronRight className="h-5 w-5" />
          </div>
          <div className="flex items-center justify-between bg-base-200 py-3 px-4 rounded-md hover:bg-primary hover:text-white transition">
            <Link to="/logout" className="flex items-center gap-3">
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </Link>
            <ChevronRight className="h-5 w-5" />
          </div>
          <p className="text-lg font-semibold">Quick Links</p>
          <div className="flex items-center justify-between bg-base-200 py-3 px-4 rounded-md hover:bg-primary hover:text-white transition">
            <Link to="/top-rated-courses" className="flex items-center gap-3">
              <Video className="h-5 w-5" />
              <span>Top Rated Courses</span>
            </Link>
            <ChevronRight className="h-5 w-5" />
          </div>
          <div className="flex items-center justify-between bg-base-200 py-3 px-4 rounded-md hover:bg-primary hover:text-white transition">
            <Link to="/latest-courses" className="flex items-center gap-3">
              <Video className="h-5 w-5" />
              <span>Latest Courses</span>
            </Link>
            <ChevronRight className="h-5 w-5" />
          </div>
          
          <div className="mt-10 text-center text-white text-sm sm:text-lg lg:text-xl  flex justify-center">
          <p className="gradient-text whitespace-nowrap text-5xl  signature">
            StudyTube
          </p>
        </div>
        <p className="text-center">&copy;All Rights Reserved</p>

        </div>
        
      </div>
    );
  };
  
  export default Menu;
  