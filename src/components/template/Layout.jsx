import React from "react";
import Header from "../organize/Header";
import Footer from "../organize/Footer";
function Layout({ children }) {
  return (
    <div className="">
      <Header />
      <div>{children}</div>

      <Footer />
    </div>
  );
}

export default Layout;
