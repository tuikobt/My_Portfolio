import React, { useState } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MobileMenu from "./components/layout/MobileMenu";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0E1627] flex flex-col">
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMenu={toggleMobileMenu}
      />

      <main className="flex-grow">
        <div className="hidden lg:block h-full">
          <h1>Hi all...</h1>
        </div>

        <div className="lg:hidden h-full">
          {isMobileMenuOpen ? (
            <MobileMenu onLinkClick={closeMobileMenu} />
          ) : (
            <h1>Hi all...</h1>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
