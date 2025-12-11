import React, { useState } from "react";
import api from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";
import {
    LogOut,
    Zap,
    Calendar,
    Tag,
    Award,
    FileText,
    Code,
    Link,
    Eye,
    Save,
    CheckCircle,
    AlertCircle,
    Sparkles,
    ChevronRight
} from "lucide-react";
import logo from "../assets/logo.png";

const GreenByteAdmin = () => {
    const [week, setWeek] = useState("");
    const [category, setCategory] = useState("Data Structures");
    const [title, setTitle] = useState("");
    const [difficulty, setDifficulty] = useState("Beginner");
    const [description, setDescription] = useState("");
    const [keyPointsText, setKeyPointsText] = useState("");
    const [code, setCode] = useState("");
    const [resourcesText, setResourcesText] = useState("");
    const [loading, setLoading] = useState(false);

    const [statusMsg, setStatusMsg] = useState("");
    const [statusType, setStatusType] = useState("");

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("gfg_admin_token");
        navigate("/admin/login");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatusMsg("");
        setStatusType("");
        setLoading(true);

        const keyPoints = keyPointsText
            .split("\n")
            .map((l) => l.trim())
            .filter(Boolean);

        const resources = resourcesText
            .split("\n")
            .map((l) => l.trim())
            .filter(Boolean)
            .map((line) => {
                let labelPart = line;
                let urlPart = "";

                if (line.includes(" - ")) {
                    [labelPart, urlPart] = line.split(" - ");
                } else if (line.includes("|")) {
                    [labelPart, urlPart] = line.split("|");
                }

                return {
                    label: (labelPart || "").trim(),
                    link: (urlPart || "").trim(),
                };
            });

        const payload = {
            week,
            category,
            title,
            difficulty,
            description,
            keyPoints,
            code,
            resources,
        };

        try {
            const res = await api.post("/api/greenbyte/add", payload);

            setStatusType("success");
            setStatusMsg(res.data?.message || "Green Byte saved successfully!");
            setWeek("");
            setCategory("Data Structures");
            setTitle("");
            setDescription("");
            setKeyPointsText("");
            setCode("");
            setResourcesText("");
        } catch (err) {
            console.error("Error saving Green Byte:", err);
            setStatusType("error");
            setStatusMsg(
                err?.response?.data?.message || "Failed to save Green Byte"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gfg-black via-gfg-navy to-gfg-black">
            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl shadow-xl">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Left - Logo & Title */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-gfg-green to-gfg-ocean rounded-xl p-2 shadow-lg">
                                <img
                                    src={logo}
                                    alt="GfG Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div>
                                <h1 className="font-sofia font-bold text-lg sm:text-xl text-white flex items-center gap-2">
                                    <Zap className="w-5 h-5 text-gfg-green" />
                                    Green Byte Admin
                                </h1>
                                <p className="text-xs sm:text-sm text-gray-400 font-source">
                                    Manage weekly coding concepts
                                </p>
                            </div>
                        </div>

                       
                        <button
                            onClick={handleLogout}
                            className="group flex items-center gap-2 px-4 py-2 rounded-xl border border-white/20 text-sm font-source text-gray-200 hover:bg-white/10 hover:border-gfg-green transition-all"
                        >
                            <LogOut className="w-4 h-4 group-hover:text-gfg-green transition-colors" />
                            <span className="hidden sm:inline">Logout</span>
                        </button>
                    </div>
                </div>
            </header>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
                <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6">

                    <section className="space-y-6">
                        {statusMsg && (
                            <div
                                className={`px-5 py-4 rounded-xl border backdrop-blur-sm animate-slideDown flex items-start gap-3 ${statusType === "success"
                                    ? "bg-gfg-green/10 border-gfg-green/30"
                                    : "bg-red-500/10 border-red-500/30"
                                    }`}
                            >
                                {statusType === "success" ? (
                                    <CheckCircle className="w-5 h-5 text-gfg-green shrink-0 mt-0.5" />
                                ) : (
                                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                )}
                                <p className={`text-sm font-source ${statusType === "success" ? "text-gfg-green" : "text-red-300"}`}>
                                    {statusMsg}
                                </p>
                            </div>
                        )}

                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                            {/* Card Header */}
                            <div className="bg-gradient-to-r from-gfg-green/20 to-gfg-ocean/20 border-b border-white/10 px-6 py-4">
                                <h2 className="font-sofia font-bold text-xl text-white flex items-center gap-2">
                                    <FileText className="w-5 h-5 text-gfg-green" />
                                    Green Byte Details
                                </h2>
                            </div>
                            <form onSubmit={handleSubmit} className="p-6 space-y-5 font-source">

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="flex items-center gap-2 text-sm font-semibold text-gray-200 mb-2">
                                            <Calendar className="w-4 h-4 text-gfg-green" />
                                            Week Label
                                        </label>
                                        <input
                                            type="text"
                                            value={week}
                                            onChange={(e) => setWeek(e.target.value)}
                                            placeholder="Week 1 - December 2025"
                                            className="w-full px-4 py-3 rounded-xl bg-black/40 border-2 border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gfg-green focus:bg-black/60 transition-all"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="flex items-center gap-2 text-sm font-semibold text-gray-200 mb-2">
                                            <Tag className="w-4 h-4 text-gfg-green" />
                                            Category
                                        </label>
                                        <input
                                            type="text"
                                            value={category}
                                            onChange={(e) => setCategory(e.target.value)}
                                            placeholder="Data Structures, ML, Web Dev..."
                                            className="w-full px-4 py-3 rounded-xl bg-black/40 border-2 border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gfg-green focus:bg-black/60 transition-all"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-200 mb-2">
                                        <Sparkles className="w-4 h-4 text-gfg-green" />
                                        Concept Title
                                    </label>
                                    <input
                                        type="text"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        placeholder="Binary Search Trees"
                                        className="w-full px-4 py-3 rounded-xl bg-black/40 border-2 border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gfg-green focus:bg-black/60 transition-all"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-200 mb-2">
                                        <Award className="w-4 h-4 text-gfg-green" />
                                        Difficulty Level
                                    </label>
                                    <select
                                        value={difficulty}
                                        onChange={(e) => setDifficulty(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl bg-black/40 border-2 border-white/10 text-white focus:outline-none focus:border-gfg-green focus:bg-black/60 transition-all cursor-pointer"
                                    >
                                        <option value="Beginner">Beginner</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Advanced">Advanced</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-200 mb-2">
                                        <FileText className="w-4 h-4 text-gfg-green" />
                                        Description
                                    </label>
                                    <textarea
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        rows={3}
                                        placeholder="Brief explanation of the concept..."
                                        className="w-full px-4 py-3 rounded-xl bg-black/40 border-2 border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gfg-green focus:bg-black/60 resize-none transition-all"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-200 mb-2">
                                        <ChevronRight className="w-4 h-4 text-gfg-green" />
                                        Key Takeaways (one per line)
                                    </label>
                                    <textarea
                                        value={keyPointsText}
                                        onChange={(e) => setKeyPointsText(e.target.value)}
                                        rows={4}
                                        placeholder={`In-order traversal gives sorted elements\nAverage time complexity: O(log n)\nSelf-balancing variants: AVL, Red-Black\nApplications in databases and file systems`}
                                        className="w-full px-4 py-3 rounded-xl bg-black/40 border-2 border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gfg-green focus:bg-black/60 resize-none transition-all"
                                    />
                                    <p className="mt-2 text-xs text-gray-400">Enter one key point per line</p>
                                </div>

                                <div>
                                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-200 mb-2">
                                        <Code className="w-4 h-4 text-gfg-green" />
                                        Code Snippet (optional)
                                    </label>
                                    <textarea
                                        value={code}
                                        onChange={(e) => setCode(e.target.value)}
                                        rows={8}
                                        placeholder={`class Node {\n  constructor(val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}`}
                                        className="w-full font-mono text-sm px-4 py-3 rounded-xl bg-black/60 border-2 border-white/10 text-gfg-accent-lime placeholder-gray-600 focus:outline-none focus:border-gfg-green resize-none transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-200 mb-2">
                                        <Link className="w-4 h-4 text-gfg-green" />
                                        Learning Resources (one per line)
                                    </label>
                                    <textarea
                                        value={resourcesText}
                                        onChange={(e) => setResourcesText(e.target.value)}
                                        rows={4}
                                        placeholder={`GeeksforGeeks Article - https://www.geeksforgeeks.org/...\nPractice Problems - https://practice.geeksforgeeks.org/...\nVideo Tutorial - https://youtube.com/...\nInterview Prep - https://www.geeksforgeeks.org/...`}
                                        className="w-full px-4 py-3 rounded-xl bg-black/40 border-2 border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gfg-green focus:bg-black/60 resize-none transition-all"
                                    />
                                    <p className="mt-2 text-xs text-gray-400">
                                        Format:&nbsp;
                                        <code className="bg-black/40 px-2 py-0.5 rounded">Label - URL</code>
                                        &nbsp;or&nbsp;
                                        <code className="bg-black/40 px-2 py-0.5 rounded">Label | URL</code>
                                    </p>

                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="relative w-full sm:w-auto group overflow-hidden mt-6"
                                >
                                    <div className="absolute -inset-1 bg-gradient-to-r from-gfg-green via-gfg-ocean to-gfg-blue rounded-xl blur opacity-50 group-hover:opacity-100 transition-opacity"></div>

                                    <div className="relative px-8 py-3.5 rounded-xl bg-gradient-to-r from-gfg-green to-gfg-ocean text-white font-sofia font-bold shadow-lg transform group-hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                                        {loading ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                <span>Saving...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Save className="w-5 h-5" />
                                                <span>Save Green Byte</span>
                                            </>
                                        )}
                                    </div>

                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                    </div>
                                </button>
                            </form>
                        </div>
                    </section>

                    <aside className="hidden lg:block space-y-6 sticky top-24 h-fit">
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                         
                            <div className="bg-gradient-to-r from-gfg-ocean/20 to-gfg-blue/20 border-b border-white/10 px-6 py-4">
                                <h2 className="font-sofia font-bold text-lg text-white flex items-center gap-2">
                                    <Eye className="w-5 h-5 text-gfg-ocean" />
                                    Live Preview
                                </h2>
                            </div>

                            <div className="p-6 space-y-4">
                                <div className="flex flex-wrap gap-2">
                                    {category && (
                                        <span className="px-3 py-1 bg-gfg-green/10 text-gfg-green border border-gfg-green/30 font-source font-bold text-xs rounded-full">
                                            {category}
                                        </span>
                                    )}
                                    {difficulty && (
                                        <span className="px-3 py-1 bg-gfg-navy/20 text-gfg-ocean border border-gfg-ocean/30 font-source font-bold text-xs rounded-full">
                                            {difficulty}
                                        </span>
                                    )}
                                    {week && (
                                        <span className="px-3 py-1 bg-gray-100/10 text-gray-300 border border-gray-500/30 font-source font-bold text-xs rounded-full">
                                            {week}
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-2xl font-sofia font-bold text-white">
                                    {title || "Concept title will appear here"}
                                </h3>

                                <p className="text-sm text-gray-300 font-source leading-relaxed">
                                    {description || "Your concept description will be displayed here. Add a brief explanation to help students understand the topic."}
                                </p>

                                {keyPointsText && (
                                    <div className="space-y-2">
                                        <h4 className="font-sofia font-bold text-sm text-white">Key Takeaways:</h4>
                                        {keyPointsText
                                            .split("\n")
                                            .map((kp) => kp.trim())
                                            .filter(Boolean)
                                            .map((kp, idx) => (
                                                <div key={idx} className="flex items-start gap-2">
                                                    <div className="w-5 h-5 bg-gfg-green rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                                        <ChevronRight className="w-3 h-3 text-white" />
                                                    </div>
                                                    <span className="text-sm text-gray-200 font-source">{kp}</span>
                                                </div>
                                            ))}
                                    </div>
                                )}

                                {code && (
                                    <div className="bg-black/60 rounded-xl p-4 border border-white/10">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="flex gap-1.5">
                                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                            </div>
                                            <span className="font-source text-gray-400 text-xs ml-2">code.js</span>
                                        </div>
                                        <pre className="font-mono text-xs text-gfg-accent-lime leading-relaxed overflow-x-auto">
                                            <code>{code}</code>
                                        </pre>

                                    </div>
                                )}

                                {resourcesText && (
                                    <div className="space-y-2">
                                        <h4 className="font-sofia font-bold text-sm text-white">Resources:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {resourcesText
                                                .split("\n")
                                                .map((r) => r.trim())
                                                .filter(Boolean)
                                                .map((resource, idx) => {
                                                    const label = resource.split(/[-|]/)[0].trim();
                                                    return (
                                                        <span
                                                            key={idx}
                                                            className="px-3 py-1.5 bg-gfg-gray/50 hover:bg-gfg-green hover:text-white text-gfg-black font-source font-semibold text-xs rounded-lg transition-all cursor-pointer"
                                                        >
                                                            {label}
                                                        </span>
                                                    );
                                                })}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </aside>
                </div>
            </main >
        </div >
    );
};

export default GreenByteAdmin;
