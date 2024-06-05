import Navbar from "./Navbar";
import Footer from "./Footer";

function Component({ children }) {
  return (
    <div className="w-full mx-auto">
      <Navbar />
      <div className="max-w-screen-xl mx-auto min-h-screen">
        {children}
      </div>

      <Footer />
    </div>
  );
}

export default Component;
