import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const Capabilities = () => {
  const capList = [
    { title: "CNC Turning & Milling", desc: "Simultaneous 5-axis machining for complex geometries." },
    { title: "Robotic Welding & Assembly", desc: "Automated TIG/MIG welding ensuring perfect joints every time." },
    { title: "Quality Prototyping", desc: "Rapid 3D printing and iterative design validation." },
    { title: "CMM Inspection", desc: "Micro-level coordinate measuring for flawless adherence to specs." }
  ];

  return (
    <div>
      <section className="page-header-premium">
        <div className="hero-glow"></div>
        <Container className="position-relative" style={{ zIndex: 2 }}>
          <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <div className="premium-badge mb-3">Infrastructure</div>
            <h1 className="display-4 fw-bolder text-white mb-3">Our <span className="text-gradient-accent">Capabilities</span></h1>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
              We possess a comprehensive suite of manufacturing capabilities that allow us to produce high-precision and complex components.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-5" style={{ marginTop: '80px', marginBottom: '80px' }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="fw-bolder mb-4 display-6" style={{ color: 'var(--premium-dark)' }}>State-of-the-Art <br/>Manufacturing</h3>
                <p className="text-muted lh-lg fs-5 mb-5">
                  Our facility is equipped with multiple CNC machines, VMCs, and robotic arms to automate and streamline our production cycle without losing human-centric quality oversight.
                </p>
                <div className="d-flex flex-column gap-4">
                  {capList.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15 }}
                      className="d-flex"
                    >
                      <FaCheckCircle className="text-gradient-accent fs-4 mt-1 me-3" style={{ color: '#0ea5e9' }} />
                      <div>
                        <h5 className="fw-bold mb-1" style={{ color: 'var(--premium-dark)' }}>{item.title}</h5>
                        <p className="text-muted mb-0">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Col>
            <Col lg={6} className="ps-lg-5">
              <motion.img 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                src="https://images.unsplash.com/photo-1565106430372-f1bd001a1d1d?q=80&w=2070&auto=format&fit=crop" 
                alt="Machinery" 
                className="img-fluid img-premium" 
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Capabilities;
