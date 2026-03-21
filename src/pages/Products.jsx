import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';
import productSlide1 from '../assets/Product/Screenshot 2026-03-20 190312.jpg';
import productslide2 from '../assets/Product/Screenshot 2026-03-20 191335.jpg'
import productslide3 from '../assets/Product/Screenshot 2026-03-20 191702.jpg'
import Hexaimg from '../assets/Product/Hexa.jpg'

const Products = () => {
  const productList = [
    { name: 'HEX BOLT', img: "https://sdn.co.in/wp-content/uploads/2025/10/Screenshot-2025-10-05-032232.png" },
    { name: 'BUSH', img: 'https://sdn.co.in/wp-content/uploads/2025/10/Screenshot-2025-10-05-032236-300x224.png' },
    { name: 'HEX NUT', img: "https://images.homedepot-static.com/productImages/14231a9d-4884-4288-b66a-1ae87db6cfdf/svn/hillman-hex-nuts-2534-64_1000.jpg" },
    { name: 'SLOTTED NUT', img: "https://catalog.scfastening.com/Asset/slotted_nut_2015.jpg" },
    { name: 'BUSH', img: 'https://sdn.co.in/wp-content/uploads/2025/10/Screenshot-2025-10-05-032249-293x300.png' },
    { name: 'WASHER', img: 'https://sdn.co.in/wp-content/uploads/2025/10/Screenshot-2025-10-05-032252-262x300.png' },
    { name: 'TROLLEY RING.', img: 'https://sdn.co.in/wp-content/uploads/2025/10/Screenshot-2025-10-05-032306-289x300.png' },
    { name: 'TROLLEY LOCKING GUIDE.', img: 'https://sdn.co.in/wp-content/uploads/2025/10/Screenshot-2025-10-05-032311-286x300.png' },
    { name: 'TROLLEY LOCKING ROD', img: 'https://sdn.co.in/wp-content/uploads/2025/10/Screenshot-2025-10-05-032315.png' },
    { name: 'TROLLEY LOCKING ROD.', img: 'https://sdn.co.in/wp-content/uploads/2025/10/Screenshot-2025-10-05-032321-210x300.png' },
    { name: 'ACTUATOR BASE PLATE.', img: 'https://sdn.co.in/wp-content/uploads/2025/10/Screenshot-2025-10-05-032325.png' },
    { name: 'TROLLEY SOCKET HEX.', img: 'https://sdn.co.in/wp-content/uploads/2025/10/Screenshot-2025-10-05-032329-300x286.png' },
    { name: 'TROLLEY SIDE GUIDE.', img: 'https://sdn.co.in/wp-content/uploads/2025/10/Screenshot-2025-10-05-032335.png' },
    { name: 'SCREW ROD', img: 'https://sdn.co.in/wp-content/uploads/2025/10/Screenshot-2025-10-05-032342-768x200.png' },
    { name: 'TROLLEY SUPPORT MICROSWITCH', img: 'https://sdn.co.in/wp-content/uploads/2025/10/Screenshot-2025-10-05-032342-768x200.png' },
    { name: 'PRE TENSIONER.', img: 'https://sdn.co.in/wp-content/uploads/2025/10/Screenshot-2025-10-05-032342-768x200.png' },
    { name: 'SPACER', img: 'https://sdn.co.in/wp-content/uploads/2025/10/Screenshot-2025-10-05-032402-300x280.png' },
    { name: 'SPACER SS', img: 'https://sdn.co.in/wp-content/uploads/2025/10/Screenshot-2025-10-05-032407-300x277.png' },
    { name: 'DOWEL', img: 'https://sdn.co.in/wp-content/uploads/2025/10/Screenshot-2025-10-05-032407-300x277.png' }
  ];

  return (
    <div>
      {/* Hero Carousel */}
      <section className="py-4 m-0" style={{ backgroundColor: '#fff' }}>
        <Container>
          <Carousel fade controls={false} indicators={true} interval={3000}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={productSlide1}
                alt="Product Slide 1"
                style={{ maxHeight: '500px', objectFit: 'contain' }}
                onError={(e) => { e.target.onError = null; e.target.src = "/gallery/1.jpeg" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={productslide2}
                alt="Product Slide 2"
                style={{ maxHeight: '500px', objectFit: 'contain' }}
                onError={(e) => { e.target.onError = null; e.target.src = "/gallery/2.jpeg" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={productslide3}
                alt="Product Slide 3"
                style={{ maxHeight: '500px', objectFit: 'contain' }}
                onError={(e) => { e.target.onError = null; e.target.src = "/gallery/5.jpeg" }}
              />
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>

      {/* Products Display */}
      <section className="py-5" style={{ marginTop: '40px', marginBottom: '60px' }}>
        <Container>
          <div className="text-center mb-5">
            <h2 style={{ fontWeight: 'bold', fontSize: '28px', color: '#000', marginBottom: '10px' }}>PRODUCTS</h2>
            <h3 style={{ color: '#4169E1', fontWeight: 'bold', fontSize: '24px', marginBottom: '25px' }}>AUTOMOTIVE AND NON AUTOMOTIVE COMPONENTS</h3>
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#444', maxWidth: '900px', margin: '0 auto', marginBottom: '15px' }}>
              At SBTB, we specialize in the manufacturing of a wide range of precision components for the automotive industry, particularly in brake systems. Our components are used in two-wheelers, passenger cars, light and heavy commercial vehicles, and tractors. Products for foundation brakes and brake actuation form a significant part of our portfolio.
            </p>
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#444', maxWidth: '900px', margin: '0 auto' }}>
              In line with our diversification strategy, we also manufacture high-quality components for non-automotive industries. These include hydraulic adapters, hose fittings, banjo bolts, as well as welded and brazed hydraulic fittings. Many of our products are custom-designed and manufactured to meet the unique requirements of our clients, ensuring the highest standards of quality and performance.
            </p>
          </div>

          <Row className="g-4 justify-content-center">
            {productList.map((product, index) => (
              <Col md={6} lg={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  style={{
                    border: '1px solid #ddd',
                    padding: '15px',
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.08), 0 5px 10px rgba(0, 0, 0, 0.06)',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '200px', marginBottom: '20px' }}>
                    <img
                      src={product.img}
                      alt={product.name}
                      className="img-fluid"
                      style={{ maxHeight: '200px', objectFit: 'contain' }}
                      onError={(e) => { e.target.onError = null; e.target.src = "/gallery/6.jpeg" }}
                    />
                  </div>
                  <h5 style={{ fontWeight: 'bold', fontSize: '16px', margin: 0 }}>{product.name}</h5>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <Container className="text-center">
          <h2 style={{ fontWeight: 'bold', fontSize: '32px', marginBottom: '30px' }}>Send us an enquiry of your requirements</h2>
          <a href="/contact" className="btn" style={{ backgroundColor: '#4169E1', color: '#fff', padding: '12px 30px', fontWeight: 'bold', borderRadius: '0', textDecoration: 'none' }}>
            ENQUIRE NOW
          </a>
        </Container>
      </section>
    </div>
  );
};

export default Products;
