import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import Capabilities from './pages/Capabilities';
import SisterConcern from './pages/SisterConcern';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Header />
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/sister-concern" element={<SisterConcern />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919710111579" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{
          position: 'fixed',
          width: '60px',
          height: '60px',
          bottom: '40px',
          right: '40px',
          backgroundColor: '#25d366',
          color: '#FFF',
          borderRadius: '50px',
          textAlign: 'center',
          fontSize: '30px',
          boxShadow: '2px 2px 3px #999',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'none'
        }}
      >
        <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ fill: '#FFF', color: '#FFF' }}>
          <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.061-.301-.15-1.265-.462-2.406-1.485-.888-.795-1.484-1.77-1.66-2.062-.172-.296-.018-.456.133-.604.135-.133.298-.344.449-.516.149-.174.195-.298.298-.496.096-.195.048-.37-.024-.518-.073-.15-.672-1.611-.92-2.206-.245-.58-.492-.505-.676-.511-.173-.01-.371-.01-.571-.01-.197 0-.523.074-.797.371-.274.296-1.049 1.02-1.049 2.49 0 1.468 1.074 2.885 1.222 3.082.15.196 2.105 3.193 5.093 4.475.711.306 1.266.488 1.696.626.713.228 1.36.195 1.871.118.571-.085 1.767-.722 2.016-1.423.245-.694.245-1.288.172-1.411-.073-.118-.273-.195-.573-.343z"/>
          <path d="M12 0c-6.627 0-12 5.373-12 12 0 2.052.56 4.025 1.636 5.7L0 24l6.438-1.68c1.68.969 3.627 1.48 5.562 1.48 6.627 0 12-5.373 12-12s-5.373-12-12-12zm0 21.821c-1.848 0-3.66-.497-5.244-1.436l-.375-.224-3.896 1.018 1.036-3.79-.246-.388c-1.035-1.635-1.584-3.528-1.584-5.463 0-5.832 4.747-10.579 10.58-10.579 5.832 0 10.579 4.747 10.579 10.58 0 5.832-4.747 10.579-10.579 10.579z"/>
        </svg>
      </a>
    </>
  );
}

export default App;
