import { Header } from "./components/header/Header";
import { Info } from "./components/informacion/Info";
import { Presentacion } from "./components/presentacion/Presentacion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/App.scss";
import Spline from "@splinetool/react-spline";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out-cubic",
      once: false,
      mirror: true,
      delay: 1,
      anchor: "center-center",
      startPosition: "top",
    });
  }, []);

  return (
    <>
      <Spline scene="https://prod.spline.design/nGTYlIdjH9zwzLp3/scene.splinecode" />
      <Header />
      <main className="main">
        <Presentacion />
        <Info />
      </main>
    </>
  );
}

export default App;
