import { useState } from "react";
import { Link } from "react-router-dom";
import HeaderBg from "../assets/header-bg.jpg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="w-full bg-cover bg-center bg-no-repeat relative shadow-lg"
      style={{
        backgroundImage: `url(${HeaderBg})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          
          <div className="bg-white p-2 rounded-xl shadow-md">
            <svg
              className="w-8 h-8 text-indigo-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6M7 3h7l5 5v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 17l2 2 4-4"
              />
            </svg>
          </div>

          <div>
            <h1 className="text-2xl font-bold text-white tracking-wide">
              DigiCertify
            </h1>
            <p className="text-xs text-gray-200 -mt-1">
              Secure Certificate System
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 font-medium text-white">
          <Link to="/" className="hover:text-yellow-300 transition">
            Home
          </Link>

          <Link
            to="/login"
            className="bg-white text-indigo-600 px-5 py-2 rounded-full font-semibold hover:bg-yellow-300 hover:text-black transition duration-300 shadow-md"
          >
            Login
          </Link>

         <Link
            to="/Dashboard"
            className="bg-white text-indigo-600 px-5 py-2 rounded-full font-semibold hover:bg-yellow-300 hover:text-black transition duration-300 shadow-md"
          >
            Dashboard
          </Link>
          <Link
            to="/IssueCertificate"
            className="bg-white text-indigo-600 px-5 py-2 rounded-full font-semibold hover:bg-yellow-300 hover:text-black transition duration-300 shadow-md"
          >
            IssueCertificate
          </Link>
          <Link
            to="/VerifyCertifiate"
            className="bg-white text-indigo-600 px-5 py-2 rounded-full font-semibold hover:bg-yellow-300 hover:text-black transition duration-300 shadow-md"
          >
          VerifyCertifiate

          </Link>

         

        

          <Link
            to="/CertificateDetails"
            className="bg-white text-indigo-600 px-5 py-2 rounded-full font-semibold hover:bg-yellow-300 hover:text-black transition duration-300 shadow-md"
          >
            CertificateDetails
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 6L18 18M6 18L18 6"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-4 px-6 py-6 font-medium text-gray-700">
            <Link to="/" className="hover:text-indigo-600">
              Home
            </Link>

            <Link
              to="/login"
              className="bg-indigo-600 text-white text-center py-2 rounded-lg hover:bg-purple-600 transition"
            >
              Login
            </Link>
              <Link
              to="/IssueCertificate"
              className="bg-indigo-600 text-white text-center py-2 rounded-lg hover:bg-purple-600 transition"
            >
              IssueCertificate
            </Link>
              <Link
              to="/VerifyCertificate"
              className="bg-indigo-600 text-white text-center py-2 rounded-lg hover:bg-purple-600 transition"
            >
              VerifyCertificate
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;