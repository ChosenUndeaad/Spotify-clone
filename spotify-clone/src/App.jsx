import MyNavbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import News from "./components/Novità";
import EpRadio from "./components/EpRadio";
import AllCards from "./components/AllCards";
import Altro from "./components/Altro";
import MusicPlayer from "./components/MusicPlayer";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className='bg-dark text-light min-vh-100'>
        <MyNavbar />
        <News />
        <EpRadio />
        <AllCards />
        <Altro />
        <MusicPlayer />
        <Footer />
      </div>
    </>
  );
}

export default App;
