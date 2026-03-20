import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const SisterConcern = () => {
  return (
    <div>
      <section className="page-header-premium">
        <div className="hero-glow"></div>
        <Container className="position-relative" style={{ zIndex: 2 }}>
          <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <div className="premium-badge mb-3">Extended Network</div>
            <h1 className="display-4 fw-bolder text-white mb-3">Sister <span className="text-gradient-accent">Concern</span></h1>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Expanding our boundaries and capabilities through strategic partnerships.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-5" style={{ marginTop: '80px', marginBottom: '80px' }}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="display-5 fw-bolder mb-4 text-gradient-accent">Sri Balaji Tech</h2>
                <p className="text-muted lh-lg fs-5 mb-5">
                  Our sister concern, Sri Balaji Tech, further extends our ecosystem of high-quality manufacturing and service. Together, we provide end-to-end solutions for all your industrial and mechanical needs.
                </p>
                
                <Card className="premium-card p-5 text-start border-0">
                  <Card.Body>
                    <div className="premium-card-icon" style={{ width: '60px', height: '60px', fontSize: '30px' }}>
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <h3 className="fw-bolder mb-4" style={{ color: 'var(--premium-dark)' }}>Synergy in Engineering</h3>
                    <p className="text-muted lh-lg fs-5 mb-0">
                      By partnering closely with Sri Balaji Tech, SBT High Precision is able to offload and manage specific specialized processing requests, enhancing our overall delivery speed and cost efficiency without compromising on the stringent quality check standards that we adhere to globally.
                    </p>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default SisterConcern;
