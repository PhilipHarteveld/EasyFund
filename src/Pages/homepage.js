import React from "react";
import Navbar from "../components/SideNavBar/Navbar";
import SideNav from "../components/SideNavBar/SideNav";
import Content from "../components/Overview/Overview";

function Homepage() {
  return (
    <div className=" bg-background w-screen w-full">
      <Navbar />
      <div className="flex items-start space-x-2 justify-start w-full">
        <SideNav className="mr-10" />
        <Content />
      </div>{" "}
    </div>
  );
}

export default Homepage;
