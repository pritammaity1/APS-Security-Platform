import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const AppLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-[#0B1220] text-gray-900 dark:text-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-8 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default AppLayout;
