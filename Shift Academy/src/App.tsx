import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import NavbarCon from "./NavbarCon";
import Content from "./Content";
import Fikrlar from "./Fikrlar";
import Maining from "./Maining";
import Methods from "./Content2";
import Footer from "./Footer";
import Courses from "./Courses";
import FreeConsul from "./FreeConsul";
import Map from "./Map";
const App: React.FC = () => {
  return (
    <div>
      <div id="Conta">
      <Navbar />
      <NavbarCon />
      </div>
      <Content />
      <Maining />
      <Fikrlar />
      <Methods />
      <Courses />
      <FreeConsul />
      <Map />
      <Footer />
    </div>
  );
};

export default App;
