import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const SisterConcern = () => {
  return (
    <div>
      {/* Hero Image Section */}
      <section style={{ position: 'relative', width: '100%', height: '500px', overflow: 'hidden' }}>
        <img
          src="https://images.pexels.com/photos/7254420/pexels-photo-7254420.jpeg"
          alt="Sister Concern"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          onError={(e) => { e.target.onError = null; e.target.src = "/gallery/9.jpeg" }}
        />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 style={{ color: '#fff', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, margin: 0, textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>Sister Concern</h1>
          </motion.div>
        </div>
      </section>

      {/* Sri Balaji Tech Section */}
      <section className="py-5" style={{ marginTop: '40px' }}>
        <Container>
          <div className="text-center mb-5">
            <h2 style={{ color: '#4169E1', fontWeight: 'bold', fontSize: '36px' }}>SDN Engineerings</h2>
          </div>

          <Row className="g-4 mb-4 justify-content-center">
            <Col lg={3} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 35px 70px rgba(0, 0, 0, 0.2), 0 20px 45px rgba(0, 0, 0, 0.15), 0 12px 25px rgba(0, 0, 0, 0.12), 0 6px 15px rgba(0, 0, 0, 0.1)',
                  transition: { duration: 0.3 }
                }}
                style={{
                  border: '1px solid #ddd',
                  padding: '15px',
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15), 0 15px 35px rgba(0, 0, 0, 0.12), 0 8px 20px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.08)',
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.95) 50%, rgba(248, 250, 252, 0.95) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #4169E1 0%, #009CD7 50%, #4169E1 100%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 3s ease-in-out infinite'
                }}></div>
                <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                  <img src="https://5.imimg.com/data5/SELLER/Default/2021/4/RS/BW/SQ/17685/tl160-series-1000x1000.jpg" alt="CNC Machines" className="img-fluid" style={{ maxHeight: '200px', objectFit: 'contain' }} onError={(e) => { e.target.onError = null; e.target.src = "/gallery/8.jpeg" }} />
                </div>
                <h5 style={{ fontWeight: 'bold', fontSize: '14px', margin: 0, color: '#000' }}>CNC Machines-20Nos</h5>
              </motion.div>
            </Col>
            <Col lg={3} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 35px 70px rgba(0, 0, 0, 0.2), 0 20px 45px rgba(0, 0, 0, 0.15), 0 12px 25px rgba(0, 0, 0, 0.12), 0 6px 15px rgba(0, 0, 0, 0.1)',
                  transition: { duration: 0.3 }
                }}
                style={{
                  border: '1px solid #ddd',
                  padding: '15px',
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15), 0 15px 35px rgba(0, 0, 0, 0.12), 0 8px 20px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.08)',
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.95) 50%, rgba(248, 250, 252, 0.95) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #4169E1 0%, #009CD7 50%, #4169E1 100%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 3s ease-in-out infinite'
                }}></div>
                <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                  <img src="https://www.pathak.in/wp-content/uploads/2023/09/hydraulic-2-roll-thread-rolling-machine-image.jpeg" alt="Thread Rolling" className="img-fluid" style={{ maxHeight: '200px', objectFit: 'contain' }} onError={(e) => e.target.style.display = 'none'} />
                </div>
                <h5 style={{ fontWeight: 'bold', fontSize: '14px', margin: 0, color: '#000' }}>Thread Rolling -3 Nos</h5>
              </motion.div>
            </Col>
            <Col lg={3} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 35px 70px rgba(0, 0, 0, 0.2), 0 20px 45px rgba(0, 0, 0, 0.15), 0 12px 25px rgba(0, 0, 0, 0.12), 0 6px 15px rgba(0, 0, 0, 0.1)',
                  transition: { duration: 0.3 }
                }}
                style={{
                  border: '1px solid #ddd',
                  padding: '15px',
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15), 0 15px 35px rgba(0, 0, 0, 0.12), 0 8px 20px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.08)',
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.95) 50%, rgba(248, 250, 252, 0.95) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #4169E1 0%, #009CD7 50%, #4169E1 100%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 3s ease-in-out infinite'
                }}></div>
                <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                  <img src="https://5.imimg.com/data5/SELLER/Default/2023/7/327927839/RX/OA/PK/1051835/automatic-centreless-grinder-machine-1000x1000.jpeg" alt="Centerless Grinding" className="img-fluid" style={{ maxHeight: '200px', objectFit: 'contain' }} onError={(e) => e.target.style.display = 'none'} />
                </div>
                <h5 style={{ fontWeight: 'bold', fontSize: '14px', margin: 0, color: '#000' }}>Centerless Grinding – 3Nos</h5>
              </motion.div>
            </Col>
            <Col lg={3} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 35px 70px rgba(0, 0, 0, 0.2), 0 20px 45px rgba(0, 0, 0, 0.15), 0 12px 25px rgba(0, 0, 0, 0.12), 0 6px 15px rgba(0, 0, 0, 0.1)',
                  transition: { duration: 0.3 }
                }}
                style={{
                  border: '1px solid #ddd',
                  padding: '15px',
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15), 0 15px 35px rgba(0, 0, 0, 0.12), 0 8px 20px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.08)',
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.95) 50%, rgba(248, 250, 252, 0.95) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #4169E1 0%, #009CD7 50%, #4169E1 100%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 3s ease-in-out infinite'
                }}></div>
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
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 35px 70px rgba(0, 0, 0, 0.2), 0 20px 45px rgba(0, 0, 0, 0.15), 0 12px 25px rgba(0, 0, 0, 0.12), 0 6px 15px rgba(0, 0, 0, 0.1)',
                  transition: { duration: 0.3 }
                }}
                style={{
                  border: '1px solid #ddd',
                  padding: '15px',
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15), 0 15px 35px rgba(0, 0, 0, 0.12), 0 8px 20px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.08)',
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.95) 50%, rgba(248, 250, 252, 0.95) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #4169E1 0%, #009CD7 50%, #4169E1 100%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 3s ease-in-out infinite'
                }}></div>
                <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                  <img src="https://images.pexels.com/photos/5846118/pexels-photo-5846118.jpeg" alt="Hot Forging" className="img-fluid" style={{ maxHeight: '250px', objectFit: 'contain' }} onError={(e) => e.target.style.display = 'none'} />
                </div>
                <h5 style={{ fontWeight: 'bold', fontSize: '14px', margin: 0, color: '#000' }}>Hot Forging (350ton)-1No</h5>
              </motion.div>
            </Col>
            <Col lg={4} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 35px 70px rgba(0, 0, 0, 0.2), 0 20px 45px rgba(0, 0, 0, 0.15), 0 12px 25px rgba(0, 0, 0, 0.12), 0 6px 15px rgba(0, 0, 0, 0.1)',
                  transition: { duration: 0.3 }
                }}
                style={{
                  border: '1px solid #ddd',
                  padding: '15px',
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15), 0 15px 35px rgba(0, 0, 0, 0.12), 0 8px 20px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.08)',
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.95) 50%, rgba(248, 250, 252, 0.95) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #4169E1 0%, #009CD7 50%, #4169E1 100%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 3s ease-in-out infinite'
                }}></div>
                <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                  <img src="https://5.imimg.com/data5/SELLER/Default/2021/4/RS/BW/SQ/17685/tl160-series-1000x1000.jpg" alt="CNC Machine" className="img-fluid" style={{ maxHeight: '250px', objectFit: 'contain' }} onError={(e) => { e.target.onError = null; e.target.src = "/gallery/8.jpeg" }} />
                </div>
                <h5 style={{ fontWeight: 'bold', fontSize: '14px', margin: 0, color: '#000' }}>CNC Machine -10 Nos</h5>
              </motion.div>
            </Col>
            <Col lg={4} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 35px 70px rgba(0, 0, 0, 0.2), 0 20px 45px rgba(0, 0, 0, 0.15), 0 12px 25px rgba(0, 0, 0, 0.12), 0 6px 15px rgba(0, 0, 0, 0.1)',
                  transition: { duration: 0.3 }
                }}
                style={{
                  border: '1px solid #ddd',
                  padding: '15px',
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15), 0 15px 35px rgba(0, 0, 0, 0.12), 0 8px 20px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.08)',
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.95) 50%, rgba(248, 250, 252, 0.95) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #4169E1 0%, #009CD7 50%, #4169E1 100%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 3s ease-in-out infinite'
                }}></div>
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
