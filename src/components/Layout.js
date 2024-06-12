import Navbar from "./Navbar";
import Footer from "./Footer";

function Component({ children }) {
  return (
    <div className="w-full mx-auto flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow max-w-screen-xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Component;
