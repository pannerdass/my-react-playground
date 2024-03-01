import React from "react";
import { useForm } from "react-hook-form";

export function UserForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // const styles = {border:errors.password?.message?:};
  const onSubmit = (data) => console.log(data);
  // console.log(watch("name"));
  console.log(errors);
  return (
    <div className="w-[500px] bg-white rounded-lg flex justify-center items-center p-2 ">
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <input
          style={{
            border: errors.email?.message ? "1px solid red" : "none",
          }}
          className="w-full text-black border bg-gray-100 p-1 mb-3 rounded-sm outline-none"
          type="text"
          {...register("email", {
            required: "email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
          placeholder="email"
        />
        {errors.email?.message && <span>{errors.email.message}</span>}

        <input
          style={{
            border: errors.password?.message ? "1px solid red" : "none",
          }}
          className="text-black border bg-gray-100 p-1 mb-3 rounded-sm outline-none"
          type="password"
          {...register("password", {
            required: "password is required",
            minLength: { value: 8, message: "the password is min 8 charcters" },
          })}
          placeholder="password"
        />
        {/* {errors.password?.type === "required" && (
          <span>password is required</span>
        )} */}
        {errors.password?.message && <span>{errors.password.message}</span>}
        <input
          className="bg-green-500 rounded-sm p-1 text-white font-bold text-base hover:bg-green-600"
          type="submit"
          value="ok"
        />
      </form>
    </div>
  );
}
