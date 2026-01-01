import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p> Navbar from dashboard/layout.tsx</p>
      {children}
    </div>
  );
};

export default layout;
