import React from "react";
import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import Testimonials from "./components/Testimonials";
import Facilities from './components/Facilities'
import CounterSection from "./components/Counter";
import DepartmentSection from "./components/Department";
import TopBar from "./components/Topbar";

const App = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <HeroCarousel />
      <Facilities />
      <Testimonials />
      <CounterSection />
      <DepartmentSection />
    </div>
  );
};

export default App;
