import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Thông tin đã nhập:");
    console.log("Tên:", formData.name);
    console.log("Email:", formData.email);
  };

  return (
    <div className="w-64 mx-auto mt-8 ">
      <h2 className="text-center text-xl font-semibold mb-4">Submit Form </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="name">
            Tên:
          </label>
          <input
            className="border border-gray-400 rounded px-3 py-2 w-full"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="border border-gray-400 rounded px-3 py-2 w-full"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="text-center ">
          <button
            className="text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
