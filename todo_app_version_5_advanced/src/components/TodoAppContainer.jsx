import React from "react";

function TodoAppContainer({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-300">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        {children}
      </div>
    </div>
  );
}

export default TodoAppContainer;
