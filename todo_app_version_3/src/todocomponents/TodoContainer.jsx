import React from "react";

function TodoContainer({ children }) {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-800">
      {/* Box */}
      <div className="w-xl h-auto p-8 bg-gray-400 rounded-xl shadow-xl shadow-indigo-900">
        {children}
      </div>
    </div>
  );
}

export default TodoContainer;
