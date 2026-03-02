import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeBg from "../assets/Home-bg.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      {/* Hero Section with Background Image */}
      <section
        style={{
          backgroundImage: `url(${HomeBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
        className="relative flex items-center justify-center text-white"
      >
        

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-3xl md:text-6xl font-extrabold leading-tight">
            Secure Digital Certificate <br /> Issuance & Verification
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200">
            A secure and scalable web platform designed to eliminate fake
            certificates by enabling instant authentication through
            unique certificate IDs and QR code validation.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col md:flex-row justify-center gap-6">

            <button
              onClick={() => navigate("/login")}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 
                         text-white font-semibold px-8 py-3 rounded-full 
                         shadow-xl hover:scale-110 hover:shadow-2xl 
                         transition duration-300"
            >
              🚀 Explore Project
            </button>

            <button
              onClick={() => navigate("/dashboard")}
              className="border-2 border-white px-8 py-3 rounded-full 
                         backdrop-blur-md bg-white/10
                         hover:bg-white hover:text-indigo-700 
                         font-semibold transition duration-300"
            >
              📂 View Modules
            </button>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;