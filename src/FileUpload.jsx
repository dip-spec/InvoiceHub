import React, { useState } from "react";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div className="border-dashed border-2 border-blue-400 bg-blue-50 rounded-lg p-8 flex flex-col items-center justify-center">
      <div className="text-center">
        <div className="mb-4">
          <img
            src="https://via.placeholder.com/100"
            alt="Upload Icon"
            className="mx-auto"
          />
        </div>
        <p className="text-lg text-gray-600 font-semibold mb-1">
          Upload Your Invoice
        </p>
        <p className="text-sm text-gray-400 mb-4">
          To auto-populate fields and save time
        </p>
        <input
          id="file-upload"
          type="file"
          onChange={handleFileChange}
          className="hidden"
        />
        <label
          htmlFor="file-upload"
          className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
        >
          Upload File
        </label>
        {selectedFile && (
          <p className="mt-4 text-sm text-gray-500">{selectedFile.name}</p>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
