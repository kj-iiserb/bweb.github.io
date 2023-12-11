import './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import UsefulLinks from './components/UsefulLinks/UsefulLinks';
import News from './components/News/News';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <div className='main'>
      <NavBar />
      <HeroSection />
      <UsefulLinks />
      <News />
      <Footer />
    </div>
    </>
    );
}

export default App;
