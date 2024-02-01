import React from "react";

const Person = ({ name, email, phone, website, address }) => {
  return (
    <div className="border p-4 my-2 rounded-md bg-gray-100">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-600">Email: {email}</p>
      <p className="text-gray-600">Phone: {phone}</p>
      <p className="text-gray-600">Website: {website}</p>
      <p className="text-gray-600">Address: {address}</p>
    </div>
  );
};

export default Person;
