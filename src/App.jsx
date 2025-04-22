import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Banar from "./Components/Banar/Banar";
import Packages from "./Components/Packages/Packages";
import FAQs from "./Components/FAQs/FAQs";
import Footer from "./Components/Footer/Footer";
import Hotels from "./Components/Hotels/Hotels";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Home />
      <Banar />
      <About />
      <Packages />
      <Hotels/>
      <FAQs />
      <Footer />
    </div>
  );
};

export default App;
