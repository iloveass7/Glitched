import React, { useEffect, useState } from "react";
import { Users, FileText, UserCheck, Clock } from "lucide-react";
import Dashboard from "../Admin/dashboard"; // Import your responsive sidebar
import Card from "../../Components/Card";

const AdminDashboard = (props) => {

    const topPosts = [
        { title: "AI Revolution", likes: 320 },
        { title: "React Performance Tips", likes: 290 },
        { title: "Cloud Computing Explained", likes: 250 },
        { title: "Cybersecurity in 2025", likes: 220 },
        { title: "The Future of Web3", likes: 200 },
    ];

    const [stats, setStats] = useState({
        totalUsers: 0,
        totalPosts: 0,
        pendingUsers: 0,
        pendingPosts: 0,
    });
    return (
        <div className="flex bg-[#1E1A4B] text-white min-h-screen">
            {/* Sidebar */}
            <Dashboard />

            {/* Main Content */}
            <div className="flex-1 p-6 ">
                <h1 className="text-3xl font-semibold mb-6">Admin Dashboard</h1>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Total Users */}
                    <div className="bg-gray-900 p-6 rounded-lg shadow-md flex items-center gap-4">
                        <Users size={40} className="text-blue-400" />
                        <div>
                            <h3 className="text-lg font-medium">Total Users</h3>
                            <p className="text-2xl font-bold">
                                {props.totalUsers}
                            </p>
                        </div>
                    </div>

                    {/* Total Posts */}
                    <div className="bg-gray-900 p-6 rounded-lg shadow-md flex items-center gap-4">
                        <FileText size={40} className="text-green-400" />
                        <div>
                            <h3 className="text-lg font-medium">Total Posts</h3>
                            <p className="text-2xl font-bold">
                                {props.totalPosts}
                            </p>
                        </div>
                    </div>

                    {/* Pending Users */}
                    <div className="bg-gray-900 p-6 rounded-lg shadow-md flex items-center gap-4">
                        <UserCheck size={40} className="text-yellow-400" />
                        <div>
                            <h3 className="text-lg font-medium">
                                Pending Users
                            </h3>
                            <p className="text-2xl font-bold">
                                {stats.pendingUsers}
                            </p>
                        </div>
                    </div>

                    {/* Pending Posts */}
                    <div className="bg-gray-900 p-6 rounded-lg shadow-md flex items-center gap-4">
                        <Clock size={40} className="text-red-400" />
                        <div>
                            <h3 className="text-lg font-medium">
                                Pending Posts
                            </h3>
                            <p className="text-2xl font-bold">
                                {props.pendingPosts}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {/* Top Users */}
                    <Card>
                        <h2 className="text-xl font-semibold mb-4">
                            🏆 Top Active Users
                        </h2>
                        <table className="w-full rounded-lg">
                            <thead className="rounded-lg">
                                <tr className="text-center">
                                    <th className="px-4 py-2 text-left font-semibold text-center">
                                        Rank
                                    </th>
                                    <th className="px-4 py-2 text-left font-semibold text-center">
                                        Name
                                    </th>
                                    <th className="px-4 py-2 text-left font-semibold text-center">
                                        Posts
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.topUsers.map((user, index) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-blue-600 text-center"
                                    >
                                        <td className="px-4 py-2">
                                            {index + 1}
                                        </td>
                                        <td className="px-4 py-2">
                                            {user.name}
                                        </td>
                                        <td className="px-4 py-2">
                                            {user.posts_count}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Card>

                    {/* Top Posts */}
                    <Card>
                        <h2 className="text-xl font-semibold mb-4">
                            🔥 Most Liked Posts
                        </h2>
                        <table className="w-full rounded-lg">
                            <thead className="rounded-lg">
                                <tr className="text-center">
                                    <th className="px-4 py-2 text-left font-semibold text-center">
                                        Rank
                                    </th>
                                    <th className="px-4 py-2 text-left font-semibold text-center">
                                        Title
                                    </th>
                                    <th className="px-4 py-2 text-left font-semibold text-center">
                                        Likes
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.topBlogs.map((post, index) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-blue-600 text-center"
                                    >
                                        <td className="px-4 py-2">
                                            {index + 1}
                                        </td>
                                        <td className="px-4 py-2">
                                            {post.title}
                                        </td>
                                        <td className="px-4 py-2">
                                            {post.likes_count}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;