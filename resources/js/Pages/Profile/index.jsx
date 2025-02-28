import React, { useState } from "react";
import { User, Edit as EditIcon, Star, FileText } from "lucide-react";
import Dashboard from "./Dashboard"; // Import your Dashboard component

const ProfilePage = (props) => {
    const [activeTab, setActiveTab] = useState("Posts");

    const favorites = props.user?.fav_posts || [];
    const posts = props.user?.my_posts || [];
    const myPostsCount = props.user?.my_posts?.length ?? 0;
    console.log(props);

    return (
        <div className="flex h-screen bg-gray-900 text-white overflow-hidden">
            {/* Sidebar - Using Dashboard Component with fixed position */}
            <div className="fixed h-screen">
                <Dashboard />
            </div>

            {/* Main Content - Scrollable with left margin to avoid overlap with dashboard */}
            <main className="flex-1 ml-64 p-8 overflow-y-auto h-screen">
                {/* Profile Section */}
                <div className="flex items-center gap-6 mb-8">
                    <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center">
                        <User className="w-12 h-12 text-gray-400" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">{props.user?.name}</h2>
                        <div className="flex gap-8 text-gray-400 mt-2">
                            <span>Posts: {myPostsCount}</span>
                        </div>
                        <button className="flex items-center gap-2 mt-3 text-blue-500 hover:text-blue-400">
                            <EditIcon className="w-4 h-4" />
                            Edit Profile
                        </button>
                    </div>
                </div>

                {/* Tab Navigation */}
                <div className="flex gap-6 mb-6">
                    <button
                        className={`px-4 py-2 rounded-lg ${
                            activeTab === "Posts"
                                ? "bg-blue-600"
                                : "bg-gray-700 hover:bg-gray-600"
                        }`}
                        onClick={() => setActiveTab("Posts")}
                    >
                        <FileText className="inline-block mr-2" size={18} />
                        My Posts
                    </button>
                    <button
                        className={`px-4 py-2 rounded-lg ${
                            activeTab === "Favorites"
                                ? "bg-blue-600"
                                : "bg-gray-700 hover:bg-gray-600"
                        }`}
                        onClick={() => setActiveTab("Favorites")}
                    >
                        <Star className="inline-block mr-2" size={18} />
                        Favorites
                    </button>
                </div>

                {/* Dynamic Tab Content */}
                {activeTab === "Posts" ? (
                    <section>
                        <h3 className="text-xl font-bold mb-6">My Posts</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {posts.map((post, index) => (
                                <div
                                    key={index}
                                    className="bg-[#252538] rounded-lg overflow-hidden group cursor-pointer"
                                >
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <span className="text-sm text-gray-400">
                                            {post.game}
                                        </span>
                                        <h4 className="text-lg font-semibold mt-1 group-hover:text-blue-500">
                                            {post.title}
                                        </h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ) : (
                    <section>
                        <h3 className="text-xl font-bold mb-6">Favorites</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {favorites.map((game, index) => (
                                <div
                                    key={index}
                                    className="relative rounded-lg overflow-hidden group"
                                >
                                    <img
                                        src={game.image}
                                        alt={game.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                        <h4 className="text-lg font-semibold">
                                            {game.title}
                                        </h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
};

export default ProfilePage;