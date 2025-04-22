import { useState } from "react";
import { Link } from "react-router-dom";

const LogIn = ({ 
      email, 
      setEmail, 
      password, 
      setPassword 
      }) => {
        
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlererror = (e) => {
    e.preventDefault();

    if (password === "") {
      setError("Password is required");
      console.log("Error in Password validate");
      return;
    } else {
      setError("Login Success");
    }
  };

  return (
    <>
      <header className="h-[50px] w-full grid place-content-center bg-slate-700 text-slate-200 font-bold text-xl">
        <p>Login</p>
      </header>

      <main className="flex justify-center items-center min-h-screen bg-slate-700 px-4 sm:px-8">
        <form
          onSubmit={handlererror}
          className="bg-transparent p-6 sm:p-8 md:p-10 rounded-lg w-full max-w-md sm:max-w-lg md:max-w-xl shadow-custom-shadow"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            className="h-[50px] border-2 border-gray-400 rounded-md p-2 mb-4 w-full text-slate-200 bg-transparent cursor-pointer shadow-custom-shadow"
          />

          <div className="relative w-full mb-4">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="h-[50px] border-2 border-gray-300 rounded-md p-2 w-full text-slate-200 font-medium shadow-custom-shadow bg-transparent"
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
            type="submit"
            value="Login"
            className="h-[50px] border-2 border-gray-300 rounded-md p-2 mb-4 w-full text-slate-300 cursor-pointer hover:text-slate-600 font-bold hover:bg-green-300 shadow-custom-shadow transition duration-200"
          />

          {error && (
            <p className="h-[20px] text-pink-200 font-semibold text-center mb-4">
              {error}
            </p>
          )}

          <Link
            to="/"
            className="block text-center text-red-400 font-semibold hover:text-red-500 hover:underline hover:underline-offset-4"
          >
            Registration
          </Link>

        </form>
      </main>

      <footer className="h-[50px] w-full grid place-content-center bg-slate-700 text-slate-200 font-bold text-md sm:text-lg">
        <p>Created and Designed by Raushan Raj</p>
      </footer>
    </>
  );
};

export default LogIn;
