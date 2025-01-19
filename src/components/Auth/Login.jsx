import React, { useState } from "react";

export const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="flex h-screen w-screen bg-[#313131] items-center justify-center">
        <div className="border-2 rounded-xl border-red-600 p-20 border-emerald-600 ">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="flex flex-col items-center justify-center"
          >
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-300"
              type="email"
              placeholder="Enter your email"
            />
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full mt-4 placeholder:text-gray-300"
              type="password"
              placeholder="Enter Password"
            />
            <button className="text-white outline-none border-none border-2 bg-emerald-600 text-xl py-3 px-5 rounded-full m-4 placeholder:text-white">
              Log in
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
