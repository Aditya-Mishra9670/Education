import { FileText } from "lucide-react";
import React from "react";

const TrackReports = () => {
  return (
    <div className="p-6 bg-base-100 rounded-lg shadow-md space-y-6">
      <div className="flex items-center gap-3">
        <FileText className="w-6 h-6 text-primary" />
        <h2 className="text-xl font-bold text-primary">Track Reports</h2>
      </div>
      <p className="text-sm">
        Review and manage your reports to stay informed and on top of your
        progress.
      </p>
      <ul className="divide-y divide-gray-200">
        {[123, 124, 125].map((report) => (
          <li
            key={report}
            className="flex items-center justify-between py-3 rounded-md px-3"
          >
            <span className="font-medium">Report #{report}</span>
            <button className="btn btn-sm btn-secondary flex items-center">
              <FileText className="w-4 h-4 mr-1" />
              View
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackReports;
