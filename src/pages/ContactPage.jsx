import React, { useState } from "react";
import Sidebar from "../components/ContactPage/SideBar";
import ContactForm from "../components/ContactPage/ContactForm";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { PiUserListBold } from "react-icons/pi";

const ContactPage = () => {
  const [openFolders, setOpenFolders] = useState({ contacts: true });
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleFolder = (name) => {
    setOpenFolders((prev) => ({ ...prev, [name]: !prev[name] }));
  };
  return (
    <div
      className="w-full h-screen flex flex-col font-mono text-[#607B96]"
      style={{
        background: "linear-gradient(to top, #020618, #0F172B, #092635)",
        backgroundAttachment: "fixed",
      }}
    >
      <Header />
      <div className=" w-full border-[#1E2D3D] lg:w-72 border-b-2 lg:hidden">
        <div className="lg:hidden w-full" onClick={() => setSidebarOpen(true)}>
          <div className="flex items-center gap-2 px-5 py-3">
            <PiUserListBold size={20} />
            <p className="font-mono text-sm text-[#607B96]">Menu</p>
          </div>
        </div>
      </div>
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          openFolders={openFolders}
          toggleFolder={toggleFolder}
        />
        <main className="flex-1 overflow-y-auto border-l border-[#1E2D3D]">
          <ContactForm />
        </main>
      </div>
      <Footer />
    </div>
  );
};
export default ContactPage;
