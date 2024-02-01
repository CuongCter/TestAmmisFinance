import React from "react";
import UserProfile from "../components/UserProfile";

const User = () => {
  return (
    <div className="text-center">
      <UserProfile
        avatar={"/avtCV.jpg"}
        name="Phạm Văn Cương"
        email="cuongcter442002@gmail.com"
        phone="0973632958"
      ></UserProfile>
    </div>
  );
};

export default User;
