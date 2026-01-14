import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, Shield, Eye, EyeOff, Sparkles, AlertCircle, LogIn } from "lucide-react";
import api from "../api/axiosInstance";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await api.post("/api/admin/login", { email, password });
      const { token } = res.data;

      localStorage.setItem("gfg_admin_token", token);

      navigate("/admin/green-byte");
    } catch (err) {
      console.error("Login error:", err);
      setError(
        err?.response?.data?.message || "Login failed. Check your credentials."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gfg-black via-gfg-navy to-gfg-black flex items-center justify-center px-4">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-20 left-10 w-96 h-96 bg-gfg-green/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gfg-ocean/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gfg-blue/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">

        <div className="absolute -inset-1 bg-gradient-to-r from-gfg-green via-gfg-ocean to-gfg-blue rounded-3xl blur-xl opacity-30 animate-pulse"></div>


        <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden">

          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gfg-green via-gfg-ocean to-gfg-navy"></div>

          <div className="p-8 sm:p-10">
            <div className="text-center mb-8">

              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gfg-green/20 to-gfg-ocean/20 px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm border border-gfg-green/30">
                <Shield className="w-4 h-4 text-gfg-green" />
                <span className="font-source font-semibold text-gfg-green text-sm">Admin Access</span>
              </div>

              <h1 className="text-3xl font-sofia font-bold text-white mb-2">
                Welcome Back
              </h1>
              <p className="text-sm text-gray-300 font-source">
                Sign in to manage your GfG Campus Body
              </p>
            </div>

            {error && (
              <div className="mb-6 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 backdrop-blur-sm animate-slideDown">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-red-300 font-source leading-relaxed">{error}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="group">
                <label className="block text-sm font-source font-semibold text-gray-200 mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gfg-green" />
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 pl-11 rounded-xl bg-black/40 border-2 border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-gfg-green focus:bg-black/60 font-source transition-all duration-300 group-hover:border-white/20"
                    placeholder="admin@rscoe.edu"
                  />
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-source font-semibold text-gray-200 mb-2 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-gfg-green" />
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 pl-11 pr-11 rounded-xl bg-black/40 border-2 border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-gfg-green focus:bg-black/60 font-source transition-all duration-300 group-hover:border-white/20"
                    placeholder="••••••••"
                  />
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gfg-green transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="relative w-full mt-6 group overflow-hidden"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-gfg-green via-gfg-ocean to-gfg-blue rounded-xl blur opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative px-6 py-3.5 rounded-xl bg-gradient-to-r from-gfg-green to-gfg-ocean text-white font-sofia font-bold shadow-lg transform group-hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2">
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Authenticating...</span>
                    </>
                  ) : (
                    <>
                      <LogIn className="w-5 h-5" />
                      <span>Sign In to Dashboard</span>
                      <Sparkles className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </>
                  )}
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </button>
            </form>
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center justify-center gap-2 text-xs text-gray-400 font-source">
                <Shield className="w-4 h-4 text-gfg-green" />
                <span>Secured with 256-bit encryption</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-gfg-green/10 to-transparent rounded-tr-full"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gfg-ocean/10 to-transparent rounded-bl-full"></div>
        </div>


      </div>
    </div>
  );
};

export default AdminLogin;
