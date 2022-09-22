import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Homepage from "../components/HomePage/HomePage";
import Date from "../components/Date/Date";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Homepage />
      {/* <Date /> */}
    </div>
  );
}

export default HomePage;
