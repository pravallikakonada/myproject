import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove token
    localStorage.removeItem("token");

    // Redirect to login
    navigate("/login");
  };

  return (
    <nav style={styles.navbar}>
      {/* Logo Section */}
      <div style={styles.logoContainer}>
        <img src={logo} alt="Logo" style={styles.logo} />
        <h2 style={{ marginLeft: "10px" }}>Certificate App</h2>
      </div>

      {/* Navigation Links */}
      <div style={styles.links}>
        <Link to="/dashboard" style={styles.link}>Dashboard</Link>
        <Link to="/issue" style={styles.link}>Issue Certificate</Link>
        <Link to="/verify" style={styles.link}>Verify Certificate</Link>
        <button onClick={handleLogout} style={styles.logoutBtn}>
          Logout
        </button>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 30px",
    backgroundColor: "#1e293b",
    color: "white",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    height: "40px",
  },
  links: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
  },
  logoutBtn: {
    padding: "6px 12px",
    backgroundColor: "#ef4444",
    border: "none",
    color: "white",
    cursor: "pointer",
    borderRadius: "4px",
  },
};

export default Navbar;