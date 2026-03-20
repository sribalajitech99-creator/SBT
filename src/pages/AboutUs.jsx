import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaAward, FaGlobe } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div>
      <section className="page-header-premium">
        <div className="hero-glow"></div>
        <Container className="position-relative" style={{ zIndex: 2 }}>
          <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <div className="premium-badge mb-3">Our Story</div>
            <h1 className="display-4 fw-bolder text-white mb-3">About <span className="text-gradient-accent">Us</span></h1>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Decades of experience driving the future of precision engineering and mechanical manufacturing.
            </p>
          </motion.div>
        </Container>
      </section>
      
      <section className="py-5" style={{ marginTop: '80px', marginBottom: '80px' }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <motion.img 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                src="https://images.unsplash.com/photo-1620241608701-94ef138c7ea9?q=80&w=2070&auto=format&fit=crop" 
                alt="Our History" 
                className="img-fluid img-premium" 
              />
            </Col>
            <Col lg={6} className="ps-lg-5">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="fw-bolder mb-4 display-6" style={{ color: 'var(--premium-dark)' }}>Pioneering Excellence</h3>
                <p className="text-muted lh-lg fs-5">
                  SBT has been at the forefront of the precision engineering industry. With decades of experience, we have honed our manufacturing processes to deliver high-quality products that meet rigorous international standards. Our team of skilled engineers and technicians works tirelessly to innovate and optimize our solutions to meet specific client needs.
                </p>
                
                <div className="d-flex align-items-center mt-5">
                  <div className="premium-card-icon me-4 mb-0" style={{ width: '50px', height: '50px', fontSize: '24px' }}>
                    <FaAward />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1">Award-Winning Quality</h5>
                    <p className="text-muted mb-0">Recognized globally for our meticulous attention to detail.</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mt-4">
                  <div className="premium-card-icon me-4 mb-0" style={{ width: '50px', height: '50px', fontSize: '24px' }}>
                    <FaGlobe />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1">Global Reach</h5>
                    <p className="text-muted mb-0">Supplying vital components to multinational conglomerates.</p>
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AboutUs;
