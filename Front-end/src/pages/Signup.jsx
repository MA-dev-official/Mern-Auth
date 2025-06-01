import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_FETCH_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.message || "Signup failed");
        return;
      }

      toast.success("Signup successful!");
      reset();
    } catch (error) {
      console.error("Network error:", error.message);
      toast.error("Network error. Please try again.");
    }
  };

  return (
    <div className="max-w-md sm:mx-auto mt-10 p-6 shadow-lg border rounded-xl m-3">
      <h2 className="text-2xl font-semibold mb-4 text-center">Signup</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            className="w-full p-2 border rounded"
            type="text"
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
            className="w-full p-2 border rounded"
            type="email"
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className="w-full p-2 border rounded"
            type="password"
            placeholder="Enter your password"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
        >
          Signup
        </button>
      </form>

      <p className="text-center mt-4 text-sm">
        Already have an account?{" "}
        <NavLink to="/login" className="text-blue-600 hover:underline">
          Go to Login
        </NavLink>
      </p>
    </div>
  );
};

export default Signup;