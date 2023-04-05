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
import Blog1 from './pages/Blog1';
import Blog2 from './pages/Blog2';
import Blog3 from './pages/Blog3';
import Privacy from './components/Privacy';
import Refund from './components/Refund';

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
        case '/10-ways-to-achieve-your-business-goal':
          component = <Blog1/>
          break
        case '/necessity-may-give-us-best-virtual-court':
          component = <Blog2/>
          break
        case '/top-crypto-exchange-influencers-in-china':
          component = <Blog3/>
          break
        case '/privacy-policy':
          component = <Privacy/>
          break
        case '/refund-policy':
          component = <Refund/>
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
