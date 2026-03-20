import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const SisterConcern = () => {
  return (
    <div>
      {/* Hero Image Section */}
      <section className="p-0 m-0">
        <img 
          src="https://sdn.co.in/wp-content/uploads/2025/10/banner.png" 
          alt="Sister Concern" 
          style={{ width: '100%', maxHeight: '500px', objectFit: 'cover', display: 'block' }} 
          onError={(e) => { e.target.onError = null; e.target.src = "/gallery/9.jpeg" }}
        />
      </section>

      {/* Sri Balaji Tech Section */}
      <section className="py-5" style={{ marginTop: '40px' }}>
        <Container>
          <div className="text-center mb-5">
            <h2 style={{ color: '#009CD7', fontWeight: 'bold', fontSize: '36px' }}>Sri Balaji Tech</h2>
          </div>

          <Row className="g-4 mb-4 justify-content-center">
            <Col lg={3} md={6}>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ border: '1px solid #ddd', padding: '15px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                  <img src="https://sdn.co.in/wp-content/uploads/2025/10/LOKESH-TL160.png" alt="CNC Machines" className="img-fluid" style={{ maxHeight: '200px', objectFit: 'contain' }} onError={(e) => { e.target.onError = null; e.target.src = "/gallery/8.jpeg" }} />
                </div>
                <h5 style={{ fontWeight: 'bold', fontSize: '14px', margin: 0, color: '#000' }}>CNC Machines-20Nos</h5>
              </motion.div>
            </Col>
            <Col lg={3} md={6}>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ border: '1px solid #ddd', padding: '15px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                  <img src="https://sdn.co.in/wp-content/uploads/2025/10/thread-rolling.png" alt="Thread Rolling" className="img-fluid" style={{ maxHeight: '200px', objectFit: 'contain' }} onError={(e) => e.target.style.display='none'} />
                </div>
                <h5 style={{ fontWeight: 'bold', fontSize: '14px', margin: 0, color: '#000' }}>Thread Rolling -3 Nos</h5>
              </motion.div>
            </Col>
            <Col lg={3} md={6}>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ border: '1px solid #ddd', padding: '15px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                  <img src="https://sdn.co.in/wp-content/uploads/2025/10/centerless-grinding.png" alt="Centerless Grinding" className="img-fluid" style={{ maxHeight: '200px', objectFit: 'contain' }} onError={(e) => e.target.style.display='none'} />
                </div>
                <h5 style={{ fontWeight: 'bold', fontSize: '14px', margin: 0, color: '#000' }}>Centerless Grinding – 3Nos</h5>
              </motion.div>
            </Col>
            <Col lg={3} md={6}>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ border: '1px solid #ddd', padding: '15px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                  <img src="https://sdn.co.in/wp-content/uploads/2025/10/shot-blasting.png" alt="Shot Blasting" className="img-fluid" style={{ maxHeight: '200px', objectFit: 'contain' }} onError={(e) => e.target.style.display='none'} />
                </div>
                <h5 style={{ fontWeight: 'bold', fontSize: '14px', margin: 0, color: '#000' }}>Shot Blasting-1 No</h5>
              </motion.div>
            </Col>
          </Row>

          <div className="text-center mt-4">
            <h4 style={{ color: '#009CD7', fontWeight: 'bold', fontSize: '20px' }}>Annual Turnover: 6.0-7.0 Crores</h4>
          </div>
        </Container>
      </section>

      {/* Srinivasa Technologies Section */}
      <section className="py-5" style={{ marginBottom: '60px' }}>
        <Container>
          <div className="text-center mb-5">
            <h2 style={{ color: '#009CD7', fontWeight: 'bold', fontSize: '36px' }}>Srinivasa Technologies</h2>
          </div>

          <Row className="g-4 mb-4 justify-content-center">
            <Col lg={4} md={6}>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ border: '1px solid #ddd', padding: '15px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                  <img src="https://sdn.co.in/wp-content/uploads/2025/10/hot-forging.png" alt="Hot Forging" className="img-fluid" style={{ maxHeight: '250px', objectFit: 'contain' }} onError={(e) => e.target.style.display='none'} />
                </div>
                <h5 style={{ fontWeight: 'bold', fontSize: '14px', margin: 0, color: '#000' }}>Hot Forging (350ton)-1No</h5>
              </motion.div>
            </Col>
            <Col lg={4} md={6}>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ border: '1px solid #ddd', padding: '15px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                  <img src="https://sdn.co.in/wp-content/uploads/2025/10/LOKESH-TL160.png" alt="CNC Machine" className="img-fluid" style={{ maxHeight: '250px', objectFit: 'contain' }} onError={(e) => { e.target.onError = null; e.target.src = "/gallery/8.jpeg" }} />
                </div>
                <h5 style={{ fontWeight: 'bold', fontSize: '14px', margin: 0, color: '#000' }}>CNC Machine -10 Nos</h5>
              </motion.div>
            </Col>
            <Col lg={4} md={6}>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ border: '1px solid #ddd', padding: '15px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                  <img src="https://sdn.co.in/wp-content/uploads/2025/10/cnc-cutting.png" alt="CNC Cutting" className="img-fluid" style={{ maxHeight: '250px', objectFit: 'contain' }} onError={(e) => e.target.style.display='none'} />
                </div>
                <h5 style={{ fontWeight: 'bold', fontSize: '14px', margin: 0, color: '#000' }}>CNC Cutting-1No</h5>
              </motion.div>
            </Col>
          </Row>

          <div className="text-center mt-4">
            <h4 style={{ color: '#009CD7', fontWeight: 'bold', fontSize: '20px' }}>Annual Turnover: 4.0-5.0 Crores</h4>
          </div>
        </Container>
      </section>

      {/* Pre-footer spacing matching capabilities/aboutus */}
      <div style={{ height: '50px' }}></div>
    </div>
  );
};

export default SisterConcern;
