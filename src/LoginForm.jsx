import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const session = localStorage.getItem("userSession");
    if (session) {
      navigate("/invoice-form");
    }
  }, [navigate]);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Username is required")
        .min(4, "Username must be at least 4 characters"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),
    }),
    onSubmit: (values) => {
      localStorage.setItem("userSession", JSON.stringify(values));
      alert("Login successful!");
      navigate("/main");
    },
  });

  return (
    <div className="bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 min-h-screen flex justify-center items-center px-4">
      <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-md transform hover:scale-105 transition duration-300 ease-in-out">
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
          Welcome Back!
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Please login to your account to continue.
        </p>
        <form onSubmit={formik.handleSubmit}>
          {/* Username Field */}
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full border p-3 rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 ${
                formik.touched.username && formik.errors.username
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="Enter your username"
            />
            {formik.touched.username && formik.errors.username && (
              <p className="text-red-500 text-xs mt-2">
                {formik.errors.username}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full border p-3 rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 ${
                formik.touched.password && formik.errors.password
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="Enter your password"
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-xs mt-2">
                {formik.errors.password}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 transition duration-300 font-semibold"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-500 mt-6 text-sm">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="text-blue-500 hover:text-blue-600 font-medium"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
