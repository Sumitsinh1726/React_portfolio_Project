import './App.css';
import Card from './component/Card';
import Footer from './component/Footer';
import Home from './component/Home';
import Navbar from './component/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
