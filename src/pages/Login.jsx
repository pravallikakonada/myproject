import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginBg from "../assets/login-bg.jpg";
import Header from "../components/Header";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (email === "admin@gmail.com" && password === "admin123") {
      localStorage.setItem("token", "dummy-admin-token");
      navigate("/courses");
    } else {
      setError("Invalid email or password ❌");
    }
  };

  return (
    <>
      <Header />

      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${LoginBg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 bg-white p-8 rounded-xl shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">
            Admin Login
          </h2>

          {error && (
            <p className="text-red-500 text-sm mb-4">{error}</p>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1 text-gray-600">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-6">
              <label className="block mb-1 text-gray-600">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
            >
              Login
            </button>
          </form>

          <div className="mt-4 text-sm text-gray-500 text-center">
            Demo Login: admin@gmail.com / admin123
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;