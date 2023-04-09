import React, { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

interface LandingProps {
  children: ReactNode;
}

export default function LandingDrawer({ children }: LandingProps) {
  return (
    <div className="app ltr landing-page horizontal">
      <div className="page">
        <div className="page-main">
          <Header />
          <div className="main-content mt-0">
            <div className="side-app">
              <div className="">{children}</div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
