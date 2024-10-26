import React from "react";
import Footer from "./Footer";
import NavbarMenu from "./NavbarMenu";

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <NavbarMenu />
      <div className="layout-child">{children}</div>
      <Footer />{" "}
    </div>
  );
};
