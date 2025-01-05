import React, { useState } from "react";

const ExpenseDetails = () => {
  const [expenseDetails, setExpenseDetails] = useState({
    lineAmount: "",
    department: "",
    account: "",
    location: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setExpenseDetails((prevDetails) => ({ ...prevDetails, [id]: value }));
  };

  const handleAddExpenseCoding = () => {
    alert("Expense coding added successfully!");
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Expense Details</h2>

      <div className="grid grid-cols-2 gap-4">
        {/* Line Amount */}
        <div>
          <label htmlFor="lineAmount" className="block text-sm font-medium text-gray-700">
            Line Amount <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center">
            <input
              id="lineAmount"
              type="text"
              value={expenseDetails.lineAmount}
              onChange={handleInputChange}
              placeholder="$0.00"
              className="flex-1 border border-gray-300 rounded-l-lg p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
            />
            <span className="border border-gray-300 bg-gray-100 text-sm px-3 rounded-r-lg">USD</span>
          </div>
        </div>

        {/* Department */}
        <div>
          <label htmlFor="department" className="block text-sm font-medium text-gray-700">
            Department <span className="text-red-500">*</span>
          </label>
          <select
            id="department"
            value={expenseDetails.department}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Department</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
            <option value="IT">IT</option>
          </select>
        </div>

        {/* Account */}
        <div>
          <label htmlFor="account" className="block text-sm font-medium text-gray-700">
            Account <span className="text-red-500">*</span>
          </label>
          <select
            id="account"
            value={expenseDetails.account}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Account</option>
            <option value="1234">1234</option>
            <option value="5678">5678</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location <span className="text-red-500">*</span>
          </label>
          <select
            id="location"
            value={expenseDetails.location}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Location</option>
            <option value="NY">New York</option>
            <option value="LA">Los Angeles</option>
          </select>
        </div>

        {/* Description */}
        <div className="col-span-2">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description <span className="text-red-500">*</span>
          </label>
          <input
            id="description"
            type="text"
            value={expenseDetails.description}
            onChange={handleInputChange}
            placeholder="Enter a description"
            className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Add Expense Coding Button */}
      <button
        type="button"
        onClick={handleAddExpenseCoding}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        + Add Expense Coding
      </button>
    </div>
  );
};

export default ExpenseDetails;
