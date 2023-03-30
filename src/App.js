import './App.css';
import '../src/styles/globals.css'
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Why from './components/Why';
import Contact from './components/Contact';
import Footer from './components/Footer';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

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

    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    }
  return (
    <div className="App text-[20px]">
      <Header/>
      {component}
      <Footer/>
      <div className='fixed right-[30px] bottom-[30px] z-[50]'>
        <button className='bg-[#060097] w-[35px] h-[35px] text-center rounded-[2px]' onClick={scrollToTop}>
          <KeyboardArrowUpIcon sx={{color:'#fff'}}></KeyboardArrowUpIcon>
        </button>
      </div>
    </div>
  );
}

export default App;
