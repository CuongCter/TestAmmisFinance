import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="flex justify-center h-screen items-center bg-gradient-to-br from-blue-100 to-purple-400">
      <div>
        <div className="text-center font-bold text-4xl">
          Home Router 
        </div>
        <div className="mt-6">
          <Button navigation={"/user-profile"}>User Profile</Button>
          <Button navigation={"/counter"}>Counter</Button>
          <Button navigation={"/form"}>Form</Button>
          <Button navigation={"/list-person"}>List Person</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
