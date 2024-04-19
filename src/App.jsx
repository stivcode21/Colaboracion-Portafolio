import { Header } from "./components/header/Header";
import { Info } from "./components/informacion/Info";
import { Presentacion } from "./components/presentacion/Presentacion";
import "./css/App.scss";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Presentacion />
        <Info />
      </main>
    </>
  );
}

export default App;
