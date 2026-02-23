import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeBg from "../assets/Home-bg.jpg";

const Home = () => {
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
        {/* Dark Overlay */}
        <div className="absolute inset-0  bg-opacity-60"></div>

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

          <div className="mt-10 flex flex-col md:flex-row justify-center gap-6">
            <button className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition duration-300">
              Explore Project
            </button>

            <button className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-indigo-700 transition duration-300">
              View Modules
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;