import React from "react";

function AppContainer({ children }) {
  return (
    <div className="w-full h-screen bg-indigo-200 flex items-center justify-center">
      <div className="w-md md:w-xl h-auto p-6 rounded bg-indigo-600 transition transition-all transition-duration-600">
        {children}
      </div>
    </div>
  );
}

export default AppContainer;
