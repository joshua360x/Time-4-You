import logo from './logo.svg';
import './App.css';
// import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar1 from './components/Navbar'
import { Router } from 'react-router';
import Land from './components/Land'
import Container from 'react-bootstrap/Container'
import Info from './components/Info'
import Footer from './components/Footer'
import BottomFooter from './components/BottomFooter';




function App() {
  return (
    <>
 
     <Navbar1/>
     <Land/>
     <Info/>
     <Footer/>
     <BottomFooter/>
    </>
  );
}

export default App;
