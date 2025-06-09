import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Form from "./Form";

export default function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen relative">
      {!isHomePage && (
        <div
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: "url('brfvasthaga4.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "blur(8px)",
            opacity: 0.3,
          }}
        />
      )}
      {/* Header Section - Fixed at top */}
      <header className="w-full relative z-30">
        <Header />
      </header>

      {/* Main Content Section - Dynamic content based on route */}
      <main className="flex-grow w-full px-4 py-8 sm:px-6 lg:max-w-7xl lg:mx-auto lg:px-8 relative z-10">
        <Outlet />
      </main>

      {/* Footer Section with Contact Form - Fixed at bottom */}
      <footer className="w-full py-8 relative z-10">
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6">
          <Form />
        </div>
      </footer>
    </div>
  );
}
