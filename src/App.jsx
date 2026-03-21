import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import Capabilities from './pages/Capabilities';
import SisterConcern from './pages/SisterConcern';
import Contact from './pages/Contact';
import Sitemap from './pages/Sitemap';

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
          <Route path="/sitemap" element={<Sitemap />} />
        </Routes>
      </main>
      <Footer />
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919710111579" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-float"
        aria-label="Chat with us on WhatsApp"
      >
        <svg width="34" height="34" viewBox="0 0 24 24" fill="white">
          <path d="M12.031 0C5.385 0 0 5.384 0 12.031c0 2.126.553 4.202 1.605 6.014L.027 24l6.115-1.605C7.886 23.332 9.932 23.904 12.029 23.904c6.643 0 12.027-5.383 12.027-12.028C24.056 5.384 18.673 0 12.031 0zm3.899 17.15c-.172.483-.996.936-1.39.99-.395.053-.896.118-2.618-.598-2.062-.857-3.385-2.97-3.488-3.11-.104-.141-.833-1.11-.833-2.118 0-1.006.518-1.503.702-1.705.18-.198.396-.248.528-.248.132 0 .262 0 .376.006.126.005.29-.047.452.348.169.412.58 1.411.633 1.517.054.104.09.227.025.358-.066.13-.102.21-.203.327-.101.119-.214.26-.305.357-.099.1-.202.208-.09.398.113.19.502.827 1.077 1.341.745.666 1.374.872 1.564.972.19.1.303.084.416-.046.112-.132.483-.565.612-.76.129-.196.257-.163.435-.1.178.062 1.134.536 1.328.634.195.097.324.145.372.227.047.081.047.472-.125.954z"/>
        </svg>
      </a>
    </>
  );
}

export default App;
