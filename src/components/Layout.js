import React from "react";

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <p className="navbar">Layput</p>
      <div className="container">{children}</div>
    </div>
  );
};
