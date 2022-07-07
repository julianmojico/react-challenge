import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="main">
      <NavBar />
      <MainContent />
      <Footer pageList={[1, 2, 3]} actualPage={1} />
    </div>
  );
}

export default App;
