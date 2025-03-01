import React, { useEffect, useState, useRef, useCallback } from 'react';

const ReportsPage = () => {
    const [reports, setReports] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(true);
    const observer = useRef();

    useEffect(() => {
        setLoading(true);
        // Dummy data for testing
        const dummyReports = Array.from({ length: 100 }, (_, index) => ({
            _id: `${index + 1}`,
            type: ["User", "Video", "Teacher", "Comment", "Notification", "Review"][index % 6],
            description: `This is the description for report ${index + 1}.`,
            reportedBy: `User ${index + 1}`,
            createdAt: new Date().toISOString()
        }));

        // Simulate fetching data
        setTimeout(() => {
            setReports(prevReports => [...prevReports, ...dummyReports.slice((page - 1) * 10, page * 10)]);
            setLoading(false);
            if (page * 10 >= dummyReports.length) {
                setHasMore(false);
            }
        }, 1000);
    }, [page]);

    const lastReportElementRef = useCallback(node => {
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPage(prevPage => prevPage + 1);
            }
        });
        if (node) observer.current.observe(node);
    }, [hasMore]);

    const getTypeSymbol = (type) => {
        const typeSymbols = {
            User: "👤",
            Video: "🎥",
            Teacher: "👨‍🏫",
            Comment: "💬",
            Notification: "🔔",
            Review: "⭐"
        };
        return typeSymbols[type] || "❓";
    };

    return (
        <div className="m-10 p-10">
            <h1 className="text-3xl font-bold mb-8 text-center">Reported Content</h1>
            {loading && reports.length === 0 ? (
                <div className="flex justify-center items-center h-32">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            ) : reports.length === 0 ? (
                <div className="flex-grow flex justify-center items-center">
                    <h2 className="text-2xl font-semibold">No Reports Available</h2>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow">
                    {reports.map((report, index) => {
                        return (
                            <div ref={index === reports.length - 1 ? lastReportElementRef : null} key={report._id} className="card bg-base-100 shadow-lg p-6">
                                <h2 className="text-xl font-semibold mb-2 flex items-center">
                                    {getTypeSymbol(report.type)} <span className="ml-2">{report.type}</span>
                                </h2>
                                <p className="mb-2">{report.description}</p>
                                <p className="text-sm text-gray-500">Reported By: {report.reportedBy}</p>
                                <p className="text-sm text-gray-500">Created At: {new Date(report.createdAt).toLocaleDateString()}</p>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default ReportsPage;