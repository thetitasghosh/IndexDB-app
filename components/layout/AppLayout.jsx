import React from "react";

const AppLayout = ({ children }) => {
  return (
    <div className="w-full h-screen text-white bg-neutral-900 flex items-center justify-center">
      {children}
    </div>
  );
};

export default AppLayout;
