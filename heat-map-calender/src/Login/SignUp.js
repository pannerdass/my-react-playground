import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signUp } from "../Auth/cognito-user";

export function SignUp() {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState({ flag: false, msg: "" });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function NavigateToSignIN() {
    navigate("/");
  }
  async function registerUser(data) {
    debugger;
    try {
      const result = await signUp(data);
      setServerError({ flag: false, msg: "" });
      if (!result.flag) {
        navigate("/");
        // console.log("logging successfully");
      } else {
        setServerError({ flag: true, msg: result.message });
      }
    } catch (error) {
      debugger;
      setServerError({ flag: true, msg: error.message });
      console.log(error.message);
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-[500px] bg-white rounded-xl flex flex-col p-12">
        <div>
          <h1 className="text-black text-3xl font-medium mb-4 text-center">
            Welcome !
          </h1>
          {serverError.flag && <span>{serverError.msg}</span>}
          <form onSubmit={handleSubmit(registerUser)}>
            <input
              type="text"
              className="w-full border bg-gray-200 text-black rounded-md p-5 focus:border-blue-500 mb-3"
              placeholder="Name"
              {...register("name", {
                required: "Name is required",
              })}
            />
            {errors.name?.message && (
              <span className="text-xs">{errors.name.message}</span>
            )}
            <input
              type="text"
              className="w-full border bg-gray-200 text-black rounded-md p-5 focus:border-blue-500 mb-3"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email?.message && (
              <span className="text-xs">{errors.email.message}</span>
            )}
            <input
              type="password"
              className="w-full border bg-gray-200 text-black rounded-md p-5 focus:border-blue-500 mb-3"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password?.message && (
              <span className="text-xs">{errors.password.message}</span>
            )}
            <input
              type="submit"
              className="w-full border bg-blue-500 text-white text-base font-bold rounded-md p-5 mb-3 cursor-pointer"
              value="Sign In"
            />
          </form>
          {/* <div className="text-center mb-3">
            <span className="text-blue-500 cursor-pointer">
              Forgot your Password?
            </span>
          </div> */}
          <div className="mb-3">
            <hr className="border border-b-slate-400" />
          </div>
          <div className="text-center">
            <span className="text-black">Already have an account?</span>
            <span
              onClick={NavigateToSignIN}
              className=" text-blue-500 cursor-pointer border-b-[3px] border-b-orange-400  pb-[3px]"
            >
              Sign In
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
