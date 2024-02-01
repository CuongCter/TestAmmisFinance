import React from "react";

const UserProfile = (props) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img className="w-full" src={props.avatar} alt="Avatar" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.name}</div>
          <div className="flex-col ">
            <p className="text-gray-800 text-base">Email: {props.email}</p>
            <p className="text-gray-800 text-base">Phone: {props.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
