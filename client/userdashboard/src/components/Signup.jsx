import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = ({
  image,
  setImage,
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  password,
  setPassword,
  confirmpassword,
  setConfirmpassword,
}) => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlererror = (e) => {
        e.preventDefault();

    if (
      name === "" ||
      phone === "" ||
      email === "" ||
      password === "" ||
      confirmpassword === ""
    ) {
      setError("All fields are required");
      return;
    } 
    else if (password !== confirmpassword) {
      setError("Passwords do not match");
      return;
    }
    else{
      setError("Suucess Registration");
    }
  };

  return (
    <>
      <header className="h-[50px] w-full grid place-content-center bg-slate-700 text-slate-200 font-bold text-xl">
        <p>Sign Up</p>
      </header>

      <main className="flex justify-center items-center min-h-screen bg-slate-700 px-4 sm:px-8">
        <form
          onSubmit={handlererror}
          className="bg-transparent p-6 sm:p-8 md:p-10 rounded-lg w-full max-w-md sm:max-w-lg md:max-w-xl shadow-custom-shadow"
        >
          <input
            type="file"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="border-2 border-gray-400 rounded-md p-2 mb-4 w-full text-slate-200 cursor-pointer shadow-custom-shadow bg-transparent"
          />

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="User Name"
            className="border-2 border-gray-300 rounded-md p-2 mb-4 w-full text-slate-200 font-medium shadow-custom-shadow bg-transparent"
          />

          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="User Phone"
            className="border-2 border-gray-300 rounded-md p-2 mb-4 w-full text-slate-200 font-medium shadow-custom-shadow bg-transparent"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="User Email"
            className="border-2 border-gray-300 rounded-md p-2 mb-4 w-full text-slate-200 font-medium shadow-custom-shadow bg-transparent"
          />

          <div className="relative w-full mb-4">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Set Password"
              className="border-2 border-gray-300 rounded-md p-2 w-full h-[50px] text-slate-200 font-medium shadow-custom-shadow bg-transparent"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl"
            >
              {showPassword ? "😃" : "😊"}
            </button>
          </div>

          <input
            type="password"
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
            placeholder="Confirm Password"
            className="border-2 border-gray-300 rounded-md p-2 mb-4 w-full text-slate-200 font-medium shadow-custom-shadow bg-transparent"
          />

          <input
            type="submit"
            value="Sign Up"
            className="border-2 border-gray-300 rounded-md p-2 mb-4 w-full text-slate-200 cursor-pointer hover:text-slate-600 font-bold hover:bg-green-300 shadow-custom-shadow transition duration-200"
          />

          <Link
            to="/login"
            className="block text-center text-red-400 font-semibold hover:text-red-500 hover:underline hover:underline-offset-4 mb-4"
          >
            Already Registered? Login
          </Link>

          {error && (
            <p className="h-[40px] text-pink-500 text-center font-semibold">
              {error}
            </p>
          )}


        </form>
      </main>

      <footer className="h-[50px] w-full grid place-content-center bg-slate-700 text-cyan-200 font-bold text-md sm:text-lg">
        <p>Created and Designed By Raushan Raj</p>
      </footer>
    </>
  );
};

export default Signup;
