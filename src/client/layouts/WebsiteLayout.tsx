import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

type Props = {};

const WebsiteLayout = (props: Props) => {
  return (
    <div className="max-w-full mx-auto">
      <header>
        <Header />
      </header>

      <Outlet />

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default WebsiteLayout;
