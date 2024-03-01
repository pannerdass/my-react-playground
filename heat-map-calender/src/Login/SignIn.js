import React, { useState } from "react";
import { signIn } from "../Auth/cognito-user";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../loader.css";

export function SignIn() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [serverError, setServerError] = useState({ flag: false, msg: "" });

  const onSubmit = (data) => console.log(data);

  function NavigateToSignUp() {
    navigate("/signup");
  }

  async function handleOnClick(data) {
    // console.log(`email:${email} password:${password}`);

    try {
      const result = await signIn(data.email, data.password);
      setServerError({ flag: false, msg: "" });
      if (result.login) {
        navigate("/my-habit");
        // console.log("logging successfully");
      } else console.log("error occurred");
    } catch (error) {
      debugger;
      setServerError({ flag: true, msg: error.message });
      console.log(error.message);
    }

    //console.log(result);
  }

  function resolveAfter2Seconds(x) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(x);
      }, 5000);
    });
  }

  return (
    <>
      {/* <div className="loader-line"></div> */}
      <div className="min-h-screen flex justify-center items-center">
        <div className="w-[500px] bg-white rounded-xl flex flex-col p-12">
          <div>
            <h1 className="text-black text-3xl font-medium mb-4 text-center">
              Welcome back !
            </h1>
            {serverError.flag && <span>{serverError.msg}</span>}
            <form onSubmit={handleSubmit(handleOnClick)}>
              <input
                type="text"
                // onChange={(e) => setEmail(e.target.value)}
                style={{
                  border: errors.email?.message ? "1px solid red" : "none",
                }}
                className="w-full text-black border bg-gray-200 rounded-md p-5 focus:border-blue-500 mb-3 outline-none"
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
                className="w-full border bg-gray-200 text-black rounded-md p-5 focus:border-blue-500 mb-3 outline-none"
                placeholder="Password"
                {...register("password", {
                  required: "password is required",
                  minLength: {
                    value: 8,
                    message: "Password should be min 8 charcters",
                  },
                })}
              />
              {errors.password?.message && (
                <span className="text-xs">{errors.password.message}</span>
              )}
              <input
                type="submit"
                className="w-full border bg-blue-500 text-white text-base font-bold rounded-md p-5 mb-2 cursor-pointer hover:bg-blue-600"
                value="Sign In"
              />
            </form>
            <div className="text-center mb-3">
              <span className="text-blue-500 cursor-pointer">
                Forgot your Password?
              </span>
            </div>
            <div className="mb-3">
              <hr className="border border-b-slate-400" />
            </div>
            <div className="text-center">
              <span className="text-black">Don't have account?</span>
              <span
                onClick={NavigateToSignUp}
                className=" text-blue-500 cursor-pointer border-b-[3px] border-b-orange-400  pb-[3px]"
              >
                Sign Up
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
