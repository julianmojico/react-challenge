import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <NavBar />
      <MainContent />
      <Footer pageList={[1,2,3]} actualPage={1}/>
    </>
  );
}

export default App;
