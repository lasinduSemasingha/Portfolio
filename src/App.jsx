import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Lasindu from './Components/Lasindu/Lasindu';
import Navbar from './Components/Navbar/Navbar';
import Customer from './Components/Work/Customer';
import Heritage from './Components/Work/Heritage';
import Lead from './Components/Work/Lead';
import Work from './Components/Work/Work';
import Cursor from './Components/cursor/Cursor'
import './app.scss'

const App = () => {
  return <>
  <div className="scroll-watcher"></div>
  <Cursor />
    <Navbar />
    <div className="app">
      <section id='Lasindu'>
        <Lasindu />
      </section>
      <section id='About'>
        <About />
      </section>
      <section id='Work'>
        <Work />
      </section>
      <section>
        <Heritage />
      </section>
      <section>
        <Customer />
      </section>
      <section>
        <Lead />
      </section>
      <section id='Contact'>
        <Contact />
      </section>
    </div>
    
  </>;
};

export default App;
