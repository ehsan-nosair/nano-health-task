import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';


function App() {
  return (
    <>
    <BrowserRouter> 

    <Navbar />

      <Routes>
        <Route exact path='/' element={<Home />}></Route>
      </Routes>
    
    <footer>
        <Footer />
    </footer>
    
    </BrowserRouter>
    </>
  );
}

export default App;
