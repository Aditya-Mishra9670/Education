import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
    const navigate = useNavigate();

    const handleViewUsers = () => {
        navigate("/admin/all-users");
    };
    const handleViewReports = () => {
        navigate("/admin/reports");
    }

    return (
        <div className="dashboard m-10 p-10">
            <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* All Users Card */}
                <div className="card bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-2">All Users</h2>
                    <p className="text-gray-700">View all users</p>
                    <button onClick={handleViewUsers} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">View Users</button>
                </div>
                {/* Create Notification Card */}
                <div className="card bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-2">Create Notification</h2>
                    <p className="text-gray-700">Send notifications to users</p>
                    <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded">Create Notification</button>
                </div>
                {/* Reports Card */}
                <div className="card bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-2">Reports</h2>
                    <p className="text-gray-700">View all reports</p>
                    <button onClick={handleViewReports} className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded">View Reports</button>
                </div>
                {/* Specific Report Card */}
                <div className="card bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-2">Specific Report</h2>
                    <p className="text-gray-700">View a specific report</p>
                    <button className="mt-4 bg-purple-500 text-white py-2 px-4 rounded">View Report</button>
                </div>
                {/* Remove User Card */}
                <div className="card bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-2">Remove User</h2>
                    <p className="text-gray-700">Remove a user from the system</p>
                    <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded">Remove User</button>
                </div>
                {/* Review Report Card */}
                <div className="card bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-2">Review Report</h2>
                    <p className="text-gray-700">Review submitted reports</p>
                    <button className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded">Review Report</button>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;