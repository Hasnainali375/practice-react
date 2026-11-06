import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);
  function showdummyalert() {
    alert("i am working");
  }

  return (
    <>
      <Header username={"hasnain"} dummyalert={showdummyalert} />
      <Footer />
    </>
  );
}

export default App;
