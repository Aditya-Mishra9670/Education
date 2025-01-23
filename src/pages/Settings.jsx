import React, { useState } from "react";
import { Lock, Moon, FileText } from "lucide-react";
import { ChangePassword, ThemeChanger, TrackReports } from "../components";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("password");

  return (
    <main className="flex  h-screen justify-center pt-20 px-5 mb-5 bg-base-100">
      <nav className="w-1/5 mt-5 space-y-8 border-r pr-1 md:pr-5">
        <button
          className={`btn btn-sm sm:btn-md btn-ghost w-full justify-start ${
            activeTab === "password" ? "btn-active" : ""
          }`}
          onClick={() => setActiveTab("password")}
        >
          <div className="flex items-center justify-center">
            <Lock className="w-5 h-5 mr-2" />
            <span className="hidden md:inline">Change Password</span>
          </div>
        </button>
        <button
          className={`btn btn-sm sm:btn-md btn-ghost w-full justify-start ${
            activeTab === "theme" ? "btn-active" : ""
          }`}
          onClick={() => setActiveTab("theme")}
        >
          <div className="flex items-center justify-center">
            <Moon className="w-5 h-5 mr-2" />
            <span className="hidden md:inline">Change Theme</span>
          </div>
        </button>
        <button
          className={`btn btn-sm sm:btn-md btn-ghost w-full justify-start ${
            activeTab === "reports" ? "btn-active" : ""
          }`}
          onClick={() => setActiveTab("reports")}
        >
          <div className="flex items-center justify-center">
            <FileText className="w-5 h-5 mr-2" />
            <span className="hidden md:inline">Track Reports</span>
          </div>
        </button>
      </nav>
      <section className="w-full md:w-4/5 pl-2 md:pl-5">
        {activeTab === "password" && <ChangePassword />}
        {activeTab === "theme" && <ThemeChanger />}
        {activeTab === "reports" && <TrackReports />}
      </section>
    </main>
  );
};

export default Settings;
