import React from "react";
import { Link } from "react-router-dom";
import FooterBg from "../assets/footer-bg.jpg";

function Footer() {
  return (
    <footer
      className="w-full bg-cover bg-center bg-no-repeat relative text-white"
      style={{
        backgroundImage: `url(${FooterBg})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        
        {/* About */}
        <div>
          <h2 className="text-xl font-bold mb-3">DigiCertify</h2>
          <p className="text-sm text-gray-300">
            Secure Digital Certificate Issuance and Verification System.
            Fast, reliable, and tamper-proof certification platform.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link to="/login" className="hover:text-yellow-400">Login</Link></li>
            <li><Link to="/Register" className="hover:text-yellow-400">Register</Link></li>
            <li><Link to="/Dashboard" className="hover:text-yellow-400">Dashboard</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-bold mb-3">Contact</h2>
          <p className="text-gray-300 text-sm">
            Email: support@digicertify.com
          </p>
          <p className="text-gray-300 text-sm">
            Phone: +91 9876543210
          </p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="relative border-t border-gray-500 text-center py-4 text-sm text-gray-300">
        © 2026 DigiCertify. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;