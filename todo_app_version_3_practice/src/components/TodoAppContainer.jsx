import React from "react";

function TodoAppContainer({ children }) {
  return (
    <div className="bg-indigo-200 w-full h-screen flex justify-center items-center">
      <div className="max-w-md h-auto bg-white p-6  shadow-xl shadow-black rounded-2xl">
        {children}
      </div>
    </div>
  );
}

export default TodoAppContainer;
