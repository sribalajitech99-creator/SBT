import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const SisterConcern = () => {
  return (
    <div>
      {/* Hero Image Section */}
      <section className="p-0 m-0">
        <img
          src="https://images.pexels.com/photos/7254420/pexels-photo-7254420.jpeg"
          alt="Sister Concern"
          style={{ width: '100%', maxHeight: '500px', objectFit: 'cover', display: 'block' }}
          onError={(e) => { e.target.onError = null; e.target.src = "/gallery/9.jpeg" }}
        />
      </section>

      {/* Sri Balaji Tech Section */}
      <section className="py-5" style={{ marginTop: '40px' }}>
        <Container>
          <div className="text-center mb-5">
            <h2 style={{ color: '#4169E1', fontWeight: 'bold', fontSize: '36px' }}>SDN Engineerings</h2>
          </div>

          <Row className="g-4 mb-4 justify-content-center">
            <Col lg={3} md={6}>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ border: '1px solid #ddd', padding: '15px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                  <img src="https://5.imimg.com/data5/SELLER/Default/2021/4/RS/BW/SQ/17685/tl160-series-1000x1000.jpg" alt="CNC Machines" className="img-fluid" style={{ maxHeight: '200px', objectFit: 'contain' }} onError={(e) => { e.target.onError = null; e.target.src = "/gallery/8.jpeg" }} />
                </div>
                <h5 style={{ fontWeight: 'bold', fontSize: '14px', margin: 0, color: '#000' }}>CNC Machines-20Nos</h5>
              </motion.div>
            </Col>
            <Col lg={3} md={6}>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ border: '1px solid #ddd', padding: '15px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                  <img src="https://www.pathak.in/wp-content/uploads/2023/09/hydraulic-2-roll-thread-rolling-machine-image.jpeg" alt="Thread Rolling" className="img-fluid" style={{ maxHeight: '200px', objectFit: 'contain' }} onError={(e) => e.target.style.display = 'none'} />
                </div>
                <h5 style={{ fontWeight: 'bold', fontSize: '14px', margin: 0, color: '#000' }}>Thread Rolling -3 Nos</h5>
              </motion.div>
            </Col>
            <Col lg={3} md={6}>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ border: '1px solid #ddd', padding: '15px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                  <img src="https://5.imimg.com/data5/SELLER/Default/2023/7/327927839/RX/OA/PK/1051835/automatic-centreless-grinder-machine-1000x1000.jpeg" alt="Centerless Grinding" className="img-fluid" style={{ maxHeight: '200px', objectFit: 'contain' }} onError={(e) => e.target.style.display = 'none'} />
                </div>
                <h5 style={{ fontWeight: 'bold', fontSize: '14px', margin: 0, color: '#000' }}>Centerless Grinding – 3Nos</h5>
              </motion.div>
            </Col>
            <Col lg={3} md={6}>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ border: '1px solid #ddd', padding: '15px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                  <img src="https://5.imimg.com/data5/SELLER/Default/2023/7/327927839/RX/OA/PK/1051835/automatic-centreless-grinder-machine-1000x1000.jpeg" alt="Shot Blasting" className="img-fluid" style={{ maxHeight: '200px', objectFit: 'contain' }} onError={(e) => e.target.style.display = 'none'} />
                </div>
                <h5 style={{ fontWeight: 'bold', fontSize: '14px', margin: 0, color: '#000' }}>Shot Blasting-1 No</h5>
              </motion.div>
            </Col>
          </Row>

          <div className="text-center mt-4">
            <h4 style={{ color: '#4169E1', fontWeight: 'bold', fontSize: '20px' }}>Annual Turnover: 6.0-7.0 Crores</h4>
          </div>
        </Container>
      </section>

      {/* Srinivasa Technologies Section */}
      <section className="py-5" style={{ marginBottom: '60px' }}>
        <Container>
          <div className="text-center mb-5">
            <h2 style={{ color: '#4169E1', fontWeight: 'bold', fontSize: '36px' }}>Srinivasa Technologies</h2>
          </div>

          <Row className="g-4 mb-4 justify-content-center">
            <Col lg={4} md={6}>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ border: '1px solid #ddd', padding: '15px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                  <img src="https://images.pexels.com/photos/5846118/pexels-photo-5846118.jpeg" alt="Hot Forging" className="img-fluid" style={{ maxHeight: '250px', objectFit: 'contain' }} onError={(e) => e.target.style.display = 'none'} />
                </div>
                <h5 style={{ fontWeight: 'bold', fontSize: '14px', margin: 0, color: '#000' }}>Hot Forging (350ton)-1No</h5>
              </motion.div>
            </Col>
            <Col lg={4} md={6}>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ border: '1px solid #ddd', padding: '15px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                  <img src="https://5.imimg.com/data5/SELLER/Default/2021/4/RS/BW/SQ/17685/tl160-series-1000x1000.jpg" alt="CNC Machine" className="img-fluid" style={{ maxHeight: '250px', objectFit: 'contain' }} onError={(e) => { e.target.onError = null; e.target.src = "/gallery/8.jpeg" }} />
                </div>
                <h5 style={{ fontWeight: 'bold', fontSize: '14px', margin: 0, color: '#000' }}>CNC Machine -10 Nos</h5>
              </motion.div>
            </Col>
            <Col lg={4} md={6}>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ border: '1px solid #ddd', padding: '15px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                  <img src="https://sdn.co.in/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-05-at-20.45.28_ac8acab8-768x768.jpg" alt="CNC Cutting" className="img-fluid" style={{ maxHeight: '250px', objectFit: 'contain' }} onError={(e) => e.target.style.display = 'none'} />
                </div>
                <h5 style={{ fontWeight: 'bold', fontSize: '14px', margin: 0, color: '#000' }}>CNC Cutting-1No</h5>
              </motion.div>
            </Col>
          </Row>

          <div className="text-center mt-4">
            <h4 style={{ color: '#4169E1', fontWeight: 'bold', fontSize: '20px' }}>Annual Turnover: 4.0-5.0 Crores</h4>
          </div>
        </Container>
      </section>

      {/* Pre-footer spacing matching capabilities/aboutus */}
      <div style={{ height: '50px' }}></div>
    </div>
  );
};

export default SisterConcern;
