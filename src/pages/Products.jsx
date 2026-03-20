import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Products = () => {
  const productList = [
    { name: 'HEX BOLT', img: 'https://sdn.co.in/wp-content/uploads/2025/10/hex-bolt.png' },
    { name: 'BUSH', img: 'https://sdn.co.in/wp-content/uploads/2025/10/bush-1.png' },
    { name: 'HEX NUT', img: 'https://sdn.co.in/wp-content/uploads/2025/10/hex-nut.png' },
    { name: 'SLOTTED NUT', img: 'https://sdn.co.in/wp-content/uploads/2025/10/slotted-nut.png' },
    { name: 'BUSH', img: 'https://sdn.co.in/wp-content/uploads/2025/10/bush-2.png' },
    { name: 'WASHER', img: 'https://sdn.co.in/wp-content/uploads/2025/10/washer.png' },
    { name: 'TROLLEY RING.', img: 'https://sdn.co.in/wp-content/uploads/2025/10/trolley-ring.png' },
    { name: 'TROLLEY LOCKING GUIDE.', img: 'https://sdn.co.in/wp-content/uploads/2025/10/trolley-locking-guide.png' },
    { name: 'TROLLEY LOCKING ROD', img: 'https://sdn.co.in/wp-content/uploads/2025/10/trolley-locking-rod-1.png' },
    { name: 'TROLLEY LOCKING ROD.', img: 'https://sdn.co.in/wp-content/uploads/2025/10/trolley-locking-rod-2.png' },
    { name: 'ACTUATOR BASE PLATE.', img: 'https://sdn.co.in/wp-content/uploads/2025/10/actuator-base-plate.png' },
    { name: 'TROLLEY SOCKET HEX.', img: 'https://sdn.co.in/wp-content/uploads/2025/10/trolley-socket-hex.png' },
    { name: 'TROLLEY SIDE GUIDE.', img: 'https://sdn.co.in/wp-content/uploads/2025/10/trolley-side-guide.png' },
    { name: 'SCREW ROD', img: 'https://sdn.co.in/wp-content/uploads/2025/10/screw-rod.png' },
    { name: 'TROLLEY SUPPORT MICROSWITCH', img: 'https://sdn.co.in/wp-content/uploads/2025/10/trolley-support.png' },
    { name: 'PRE TENSIONER.', img: 'https://sdn.co.in/wp-content/uploads/2025/10/pre-tensioner.png' },
    { name: 'SPACER', img: 'https://sdn.co.in/wp-content/uploads/2025/10/spacer.png' },
    { name: 'SPACER SS', img: 'https://sdn.co.in/wp-content/uploads/2025/10/spacer-ss.png' },
    { name: 'DOWEL', img: 'https://sdn.co.in/wp-content/uploads/2025/10/dowel.png' }
  ];

  return (
    <div>
      {/* Hero Carousel */}
      <section className="p-0 m-0">
        <Carousel fade controls={false} indicators={true} interval={3000}>
          <Carousel.Item>
            <img 
              className="d-block w-100" 
              src="https://sdn.co.in/wp-content/uploads/2025/10/slider1.png" 
              alt="Product Slide 1" 
              style={{ maxHeight: '500px', objectFit: 'cover' }}
              onError={(e) => { e.target.onError = null; e.target.src = "/gallery/1.jpeg" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img 
              className="d-block w-100" 
              src="https://sdn.co.in/wp-content/uploads/2025/10/slider2.png" 
              alt="Product Slide 2" 
              style={{ maxHeight: '500px', objectFit: 'cover' }}
              onError={(e) => { e.target.onError = null; e.target.src = "/gallery/2.jpeg" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img 
              className="d-block w-100" 
              src="https://sdn.co.in/wp-content/uploads/2025/10/slider3.png" 
              alt="Product Slide 3" 
              style={{ maxHeight: '500px', objectFit: 'cover' }}
              onError={(e) => { e.target.onError = null; e.target.src = "/gallery/5.jpeg" }}
            />
          </Carousel.Item>
        </Carousel>
      </section>

      {/* Products Display */}
      <section className="py-5" style={{ marginTop: '40px', marginBottom: '60px' }}>
        <Container>
          <div className="text-center mb-5">
            <h2 style={{ fontWeight: 'bold', fontSize: '28px', color: '#000', marginBottom: '10px' }}>PRODUCTS</h2>
            <h3 style={{ color: '#009CD7', fontWeight: 'bold', fontSize: '24px', marginBottom: '25px' }}>AUTOMOTIVE AND NON AUTOMOTIVE COMPONENTS</h3>
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#444', maxWidth: '900px', margin: '0 auto', marginBottom: '15px' }}>
              At SDNB, we specialize in the manufacturing of a wide range of precision components for the automotive industry, particularly in brake systems. Our components are used in two-wheelers, passenger cars, light and heavy commercial vehicles, and tractors. Products for foundation brakes and brake actuation form a significant part of our portfolio.
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
                  style={{ border: '1px solid #ddd', padding: '15px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
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
          <a href="/contact" className="btn" style={{ backgroundColor: '#009CD7', color: '#fff', padding: '12px 30px', fontWeight: 'bold', borderRadius: '0', textDecoration: 'none' }}>
            ENQUIRE NOW
          </a>
        </Container>
      </section>
    </div>
  );
};

export default Products;
