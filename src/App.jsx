import React from "react";
import Navbar from "./Components/Navbar";
import Manager from "./Components/Manager";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className=" bg--200">
      <Navbar />
      <div className="min-h-[85vh]">
        <Manager />
      </div>
      <Footer className="fixed -bottom-1" />
    </div>
  );
};

export default App;
