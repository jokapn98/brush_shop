import React from "react";

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <p className="navbar">Navbar</p>
      <div className="layout-child">{children}</div>
    </div>
  );
};
