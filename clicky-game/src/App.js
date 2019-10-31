import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/ClickerBody";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
