import React from "react";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import  BreakingNews  from "../../pages/Home/BreakingNews";


const Home = () => {
  return (
    <div>
      <Header />
      <BreakingNews></BreakingNews>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="border">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2 border">
          <h2>News coming soon....</h2>
        </div>
        <div className=" border">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;