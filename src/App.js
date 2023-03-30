import './App.css';
import '../src/styles/globals.css'
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Why from './components/Why';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  let component;
    switch (window.location.pathname){
        case '/':
          component = <Home/>
          break
        case '/about':
          component = <About/>
          break
        case '/services':
          component = <Services/>
          break
        case '/why':
          component = <Why/>
          break
        case '/contact':
          component = <Contact/>
          break
    }
  return (
    <div className="App text-[20px]">
      <Header/>
      {component}
      <Footer/>
    </div>
  );
}

export default App;
