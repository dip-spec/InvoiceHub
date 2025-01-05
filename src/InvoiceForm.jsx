import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FileUpload from "./FileUpload";

const InvoiceForm = () => {
  const [formData, setFormData] = useState({
    vendor: "A-1 Exterminators",
    invoiceNumber: "",
    invoiceDate: "",
    totalAmount: "",
    paymentTerms: "",
    dueDate: "",
    glPostDate: "",
    invoiceDescription: "",
    lineAmount: "",
    department: "",
    account: "",
    location: "",
    comments: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = localStorage.getItem("invoiceForm");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [id]: "" }));
  };

  const handleLogout = () => {
    localStorage.clear();
    alert("You have been logged out.");
    navigate("/login");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field].trim() && field !== "comments") {
        newErrors[field] = "This field is required.";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Save data to localStorage if no errors
    localStorage.setItem("invoiceForm", JSON.stringify(formData));
    alert("Form data saved successfully!");
  };

  // Clear form data and remove it from localStorage
  const handleReset = () => {
    localStorage.removeItem("invoiceForm");
    setFormData({
      vendor: "A-1 Exterminators",
      invoiceNumber: "",
      invoiceDate: "",
      totalAmount: "",
      paymentTerms: "",
      dueDate: "",
      glPostDate: "",
      invoiceDescription: "",
      lineAmount: "",
      department: "",
      account: "",
      location: "",
      comments: "",
    });
    setErrors({});
    alert("Form reset successfully!");
  };

  return (
    <div className="bg-blue-50 min-h-screen flex justify-center items-center p-8">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-5xl p-6">
        <button
          onClick={handleLogout}
          className="absolute top-4 right-4 px-5 py-2 bg-red-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          Logout
        </button>

        <h1 className="text-lg font-semibold text-gray-700 mb-4">
          Create New Invoice
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-8">
            {/* File Upload Section */}
            <FileUpload />

            {/* Right Form Section */}
            <div className="flex flex-col space-y-4">
              {/* Vendor Section */}
              <section>
                <h2 className="text-gray-500 text-sm font-semibold">
                  Vendor Details
                </h2>
                <div className="mt-2">
                  <label
                    htmlFor="vendor"
                    className="block text-sm text-gray-600"
                  >
                    Vendor
                  </label>
                  <select
                    id="vendor"
                    value={formData.vendor}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option>A-1 Exterminators</option>
                  </select>
                  <p className="text-sm text-gray-400 mt-1">
                    550 Main St, Lynn
                  </p>
                  {errors.vendor && (
                    <p className="text-sm text-red-500">{errors.vendor}</p>
                  )}
                </div>
              </section>

              {/* Invoice Details */}
              <section>
                <h2 className="text-gray-700 text-base font-semibold mb-4">
                  Invoice Details
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="invoiceNumber"
                      className="block text-sm text-gray-600 font-medium"
                    >
                      Invoice Number
                    </label>
                    <input
                      id="invoiceNumber"
                      value={formData.invoiceNumber}
                      onChange={handleInputChange}
                      type="text"
                      placeholder="Enter Invoice Number"
                      className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.invoiceNumber && (
                      <p className="text-sm text-red-500">
                        {errors.invoiceNumber}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="invoiceDate"
                      className="block text-sm text-gray-600 font-medium"
                    >
                      Invoice Date
                    </label>
                    <input
                      id="invoiceDate"
                      value={formData.invoiceDate}
                      onChange={handleInputChange}
                      type="date"
                      className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.invoiceDate && (
                      <p className="text-sm text-red-500">
                        {errors.invoiceDate}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="totalAmount"
                      className="block text-sm text-gray-600 font-medium"
                    >
                      Total Amount
                    </label>
                    <input
                      id="totalAmount"
                      value={formData.totalAmount}
                      onChange={handleInputChange}
                      type="text"
                      placeholder="0.00"
                      className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.totalAmount && (
                      <p className="text-sm text-red-500">
                        {errors.totalAmount}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="paymentTerms"
                      className="block text-sm text-gray-600 font-medium"
                    >
                      Payment Terms
                    </label>
                    <input
                      id="paymentTerms"
                      value={formData.paymentTerms}
                      onChange={handleInputChange}
                      type="text"
                      placeholder="Enter Payment Terms"
                      className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.paymentTerms && (
                      <p className="text-sm text-red-500">
                        {errors.paymentTerms}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="dueDate"
                      className="block text-sm text-gray-600 font-medium"
                    >
                      Invoice Due Date
                    </label>
                    <input
                      id="dueDate"
                      value={formData.dueDate}
                      onChange={handleInputChange}
                      type="date"
                      className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.dueDate && (
                      <p className="text-sm text-red-500">{errors.dueDate}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="glPostDate"
                      className="block text-sm text-gray-600 font-medium"
                    >
                      GL Post Date
                    </label>
                    <input
                      id="glPostDate"
                      value={formData.glPostDate}
                      onChange={handleInputChange}
                      type="date"
                      className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.glPostDate && (
                      <p className="text-sm text-red-500">
                        {errors.glPostDate}
                      </p>
                    )}
                  </div>

                  <div className="col-span-2">
                    <label
                      htmlFor="invoiceDescription"
                      className="block text-sm text-gray-600 font-medium"
                    >
                      Invoice Description
                    </label>
                    <input
                      id="invoiceDescription"
                      value={formData.invoiceDescription}
                      onChange={handleInputChange}
                      type="text"
                      placeholder="Add a description"
                      className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.invoiceDescription && (
                      <p className="text-sm text-red-500">
                        {errors.invoiceDescription}
                      </p>
                    )}
                  </div>
                </div>
              </section>

              {/* Expense Details */}
              <section>
                <h2 className="text-gray-500 text-sm font-semibold">
                  Expense Details
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="lineAmount"
                      className="block text-sm text-gray-600"
                    >
                      Line Amount
                    </label>
                    <input
                      id="lineAmount"
                      value={formData.lineAmount}
                      onChange={handleInputChange}
                      type="text"
                      placeholder="$0.00"
                      className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.lineAmount && (
                      <p className="text-sm text-red-500">
                        {errors.lineAmount}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="department"
                      className="block text-sm text-gray-600"
                    >
                      Department
                    </label>
                    <input
                      id="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      type="text"
                      placeholder="Select Department"
                      className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.department && (
                      <p className="text-sm text-red-500">
                        {errors.department}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="account"
                      className="block text-sm text-gray-600"
                    >
                      Account
                    </label>
                    <input
                      id="account"
                      value={formData.account}
                      onChange={handleInputChange}
                      type="text"
                      placeholder="Select Account"
                      className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.account && (
                      <p className="text-sm text-red-500">{errors.account}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm text-gray-600"
                    >
                      Location
                    </label>
                    <input
                      id="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      type="text"
                      placeholder="Select Location"
                      className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.location && (
                      <p className="text-sm text-red-500">{errors.location}</p>
                    )}
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Description <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="description"
                      type="text"
                      onChange={handleInputChange}
                      placeholder="Enter a description"
                      className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="w-full flex justify-end mt-4">
                  <button
                    type="button"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    + Add Expense Coding
                  </button>
                </div>
              </section>

              {/* Comments Section */}
              <section>
                <h2 className="text-gray-500 text-sm font-semibold">
                  Comments
                </h2>
                <textarea
                  id="comments"
                  value={formData.comments}
                  onChange={handleInputChange}
                  placeholder="Add a comment and use @Name to tag someone"
                  className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </section>

              {/* Buttons */}
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 bg-gray-100 text-gray-600 rounded-md shadow-md hover:bg-gray-200"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InvoiceForm;
