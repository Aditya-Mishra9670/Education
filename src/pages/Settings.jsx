import React, { useState } from "react";
import { Lock, Moon, FileText, Save } from "lucide-react";

const ChangePassword = () => (
  <div className="space-y-4">
    <div className="flex items-center gap-2">
      <Lock className="w-5 h-5 text-primary" />
      <h2 className="text-lg font-semibold">Change Password</h2>
    </div>
    <div className="space-y-3">
      <input
        type="password"
        placeholder="New Password"
        className="input input-bordered w-full"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        className="input input-bordered w-full"
      />
      <button className="btn btn-primary w-full">
        <Save className="w-4 h-4 mr-2" />
        Save Changes
      </button>
    </div>
  </div>
);

const ChangeTheme = () => (
  <div className="space-y-4">
    <div className="flex items-center gap-2">
      <Moon className="w-5 h-5 text-primary" />
      <h2 className="text-lg font-semibold">Change Theme</h2>
    </div>
    <select className="select select-bordered w-full">
      <option>Light</option>
      <option>Dark</option>
      <option>System</option>
    </select>
    <button className="btn btn-primary w-full">
      <Save className="w-4 h-4 mr-2" />
      Apply Theme
    </button>
  </div>
);

const TrackReports = () => (
  <div className="space-y-4">
    <div className="flex items-center gap-2">
      <FileText className="w-5 h-5 text-primary" />
      <h2 className="text-lg font-semibold">Track Reports</h2>
    </div>
    <ul className="space-y-2">
      <li className="flex items-center justify-between">
        <span>Report #123</span>
        <button className="btn btn-sm btn-secondary">View</button>
      </li>
      <li className="flex items-center justify-between">
        <span>Report #124</span>
        <button className="btn btn-sm btn-secondary">View</button>
      </li>
      <li className="flex items-center justify-between">
        <span>Report #125</span>
        <button className="btn btn-sm btn-secondary">View</button>
      </li>
    </ul>
  </div>
);

const Settings = () => {
  const [activeTab, setActiveTab] = useState("password");

  const renderContent = () => {
    switch (activeTab) {
      case "password":
        return <ChangePassword />;
      case "theme":
        return <ChangeTheme />;
      case "reports":
        return <TrackReports />;
      default:
        return null;
    }
  };
//mini components are yet to be made
  return (
    <main className="flex  md:flex-row h-screen justify-center pt-20 px-5 mb-5 bg-base-100">
      <nav className="w-1/5  space-y-4 border-r pr-1 md:pr-5">
        <button
          className={`btn btn-ghost w-full justify-start ${
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
          className={`btn btn-ghost w-full justify-start ${
            activeTab === "theme" ? "btn-active" : ""
          }`}
          onClick={() => setActiveTab("theme")}
        >
          <div className="flex items-center justify-center">
            <Moon className="w-5 h-5 mr-2 inline-block" />
            <span className="hidden md:inline">Change Theme</span>
          </div>
        </button>
        <button
          className={`btn btn-ghost w-full justify-start ${
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
        {renderContent()}
      </section>
    </main>
  );
};

export default Settings;
