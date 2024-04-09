import Navbar from "./Navbar";
import Footer from "./Footer";

function Component({ children }) {
  return (
    <div className="w-full mx-auto">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Component;
