import { Header } from "./components/header/Header";
import { Presentacion } from "./components/presentacion/Presentacion";
import "./css/App.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <Presentacion />
      </main>
    </>
  );
}

export default App;
