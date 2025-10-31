import React, { useState } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MobileMenu from "./components/layout/MobileMenu";

function App() {
  // 1. Trạng thái (state) menu mobile được quản lý ở đây
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 2. Hàm để Header có thể thay đổi trạng thái này
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // 3. Hàm để MobileMenu có thể đóng menu khi nhấn link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0E1627] flex flex-col">
      {/* Header luôn hiển thị, truyền state và hàm toggle vào */}
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMenu={toggleMobileMenu}
      />

      {/* 4. Nội dung chính: Hiển thị có điều kiện */}
      <main className="flex-grow">
        {/* === Giao diện Desktop (Luôn hiển thị Hero) === */}
        <div className="hidden lg:block h-full">
          <h1>Hi all...</h1>
        </div>

        {/* === Giao diện Mobile (Hiển thị 1 trong 2) === */}
        <div className="lg:hidden h-full">
          {isMobileMenuOpen ? (
            <MobileMenu onLinkClick={closeMobileMenu} />
          ) : (
            <h1>Hi all...</h1>
          )}
        </div>
      </main>

      {/* Footer luôn hiển thị */}
      <Footer />
    </div>
  );
}

export default App;
