import Navbar from "./Navbar";
import Footer from "./Footer";

function Component({ children }) {
  return (
    <div className="w-full mx-auto">
      <Navbar />
      <div className="min-h-screen">
        {children}
      </div>

      <Footer />
    </div>
  );
}

export default Component;
