import MyNavbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import News from "./components/Novità";
import EpRadio from "./components/EpRadio";
import AllCards from "./components/AllCards";

function App() {
  return (
    <>
      <MyNavbar />
      <News />
      <EpRadio />
      <AllCards />
    </>
  );
}

export default App;
