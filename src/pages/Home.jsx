import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaChartLine, FaCogs, FaClock } from 'react-icons/fa';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-sdn">
        <img src="https://sdn.co.in/wp-content/uploads/2025/10/shutterstock_1772384783-1-1.png" alt="Lathe Machine Operation" className="hero-bg-sdn" />
        
        <Container className="hero-content-sdn h-100 d-flex flex-column justify-content-center">
          <Row>
            <Col lg={11} md={12}>
              <motion.div 
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
              >
                <div className="hero-sub">
                  AUTOMATED PRODUCTION TECHNOLOGY WITH ROBOTIC
                </div>
                <h1 className="hero-h1 mb-5">
                  HIGH PRECISION <br/> ONTIME DELIVERY
                </h1>
                <Link to="/capabilities" className="btn-primary-sdn">
                  KNOW MORE
                </Link>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      {/* About Section */}
      <section className="py-5" style={{ backgroundColor: '#fff', paddingBottom: '30px' }}>
        <Container className="pt-5">
          <Row className="g-5">
            <Col lg={5}>
              <motion.div 
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                className="d-flex flex-column h-100"
              >
                <div>
                  <div className="section-title-small mb-2" style={{ color: '#009CD7' }}>WE ARE</div>
                  <h2 className="section-title-large mb-4" style={{ color: '#009CD7' }}>
                    SBT ENGINEERING
                  </h2>
                  <h5 className="mb-4 text-dark fw-bold" style={{ lineHeight: '1.5' }}>
                    Manufacturer of Precision Machined Components for Automobile and General Engineering Industries
                  </h5>
                  <p className="text-muted" style={{ fontSize: '15px' }}>
                    With state-of-the-art CNC and VMC technology, SBT Engineering provides world-class quality and consistency across every part we produce.
                  </p>
                </div>
                <div className="mt-4 mb-4">
                  <img src="https://sdn.co.in/wp-content/uploads/2025/10/shutterstock_1020591757-1.png" alt="CNC Process" className="img-fluid" style={{ width: '100%', borderRadius: '15px', objectFit: 'cover' }} />
                </div>
                
                {/* Stats Box Squished into Left Column */}
                <div className="stats-box w-100 mt-auto" style={{ borderRadius: '4px', boxShadow: '0 5px 20px rgba(0,0,0,0.06)', backgroundColor: '#fff', padding: '15px', border: '1px solid #eaeaea' }}>
                  <Row className="g-1 text-start">
                    <Col xs={3} className="border-end px-2">
                       <div className="mb-2">
                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#009CD7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                       </div>
                       <div style={{ fontSize: '10px', color: '#333', fontWeight: '500', lineHeight: '1.4' }}>1 Million+ precision machined components produced annually</div>
                    </Col>
                    <Col xs={3} className="border-end px-2">
                       <div className="mb-2">
                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#009CD7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                       </div>
                       <div style={{ fontSize: '10px', color: '#333', fontWeight: '500', lineHeight: '1.4' }}>70% current utilization — ready to scale capacity</div>
                    </Col>
                    <Col xs={3} className="border-end px-2">
                       <div className="mb-2">
                         <svg width="20" height="20" viewBox="0 0 24 24" fill="#009CD7" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 6V12L16 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                       </div>
                       <div style={{ fontSize: '10px', color: '#333', fontWeight: '500', lineHeight: '1.4' }}>Complete end-to-end machining & assembly under one roof</div>
                    </Col>
                    <Col xs={3} className="px-2">
                       <div className="mb-2">
                         <svg width="20" height="20" viewBox="0 0 24 24" fill="#009CD7" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12C21.9988 14.1564 21.3001 16.2547 20.0093 17.9818C18.7185 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98233 16.08 2.86" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 4L12 14.01L9 11.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                       </div>
                       <div style={{ fontSize: '10px', color: '#333', fontWeight: '500', lineHeight: '1.4' }}>ISO 9001:2015 certified and IATF 16949 Completed</div>
                    </Col>
                  </Row>
                </div>
              </motion.div>
            </Col>
            <Col lg={7}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                className="h-100"
              >
                <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', minHeight: '600px', objectFit: 'cover', borderRadius: '15px' }}>
                     <source src="https://sdn.co.in/wp-content/uploads/2025/10/WhatsApp-Video-2025-10-04-at-07.08.57_09f29bae.mp4" type="video/mp4" />
                </video>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why SBT Section */}
      <section className="py-5 bg-blue-tint pt-5" style={{ backgroundImage: "url('https://sdn.co.in/wp-content/uploads/2025/10/shutterstock_1492926674-1-2.png')", backgroundSize: 'cover', backgroundAttachment: 'fixed', marginTop: '-30px', paddingBottom: '70px' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(11, 37, 56, 0.85)', zIndex: 0 }}></div>
        <Container className="py-5 position-relative" style={{ zIndex: 1 }}>
          <div className="mb-5 pb-3 text-center">
            <h2 className="text-white fw-bold" style={{ fontSize: '40px', fontFamily: 'Open Sans', letterSpacing: '1px' }}>WHY SBT</h2>
          </div>
            
          <Row className="g-4">
            <Col lg={3} md={6}>
              <div className="why-card text-center d-flex flex-column align-items-center">
                <img src="https://sdn.co.in/wp-content/uploads/2025/10/Asset-1sapi-150x150-1.png" style={{ width: '80px', marginBottom: '20px' }} alt="Quality Icon" />
                <h3 className="why-title fw-bold" style={{ fontSize: '20px' }}>Quality</h3>
                <p className="why-text text-center mt-3" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                  We are an ISO 9001:2015 certified organization, committed to delivering precision-machined components that meet stringent customer specifications. Our robust Quality Management System ensures consistency, traceability, and "zero-defect" products through continuous monitoring and process improvement.
                </p>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="why-card text-center d-flex flex-column align-items-center">
                <img src="https://sdn.co.in/wp-content/uploads/2025/10/Asset-2sapi-150x150-1.png" style={{ width: '80px', marginBottom: '20px' }} alt="Timely Delivery Icon" />
                <h3 className="why-title fw-bold" style={{ fontSize: '20px' }}>Timely Delivery</h3>
                <p className="why-text text-center mt-3" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                  With optimized production planning and a customer-specific scheduling system, SBT ensures on-time delivery of every batch. Our efficient supply chain and strong vendor network enable us to meet tight timelines without compromising quality.
                </p>
              </div>
            </Col>
            <Col lg={3} md={6}>
               <div className="why-card text-center d-flex flex-column align-items-center">
                <img src="https://sdn.co.in/wp-content/uploads/2025/10/Asset-4sapi-150x150-1.png" style={{ width: '80px', marginBottom: '20px' }} alt="Precision Icon" />
                <h3 className="why-title fw-bold" style={{ fontSize: '20px' }}>Precision Manufacturing</h3>
                <p className="why-text text-center mt-3" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                  At SBT Engineering, precision is our foundation. Equipped with advanced CNC turning centers, VMCs, thread rolling machines, and robotic automation, we manufacture critical components with close tolerances and superior finish — ensuring performance, accuracy, and reliability in every part.
                </p>
              </div>
            </Col>
            <Col lg={3} md={6}>
               <div className="why-card text-center d-flex flex-column align-items-center">
                 <img src="https://sdn.co.in/wp-content/uploads/2025/10/Asset-3sapi-150x150-1.png" style={{ width: '80px', marginBottom: '20px' }} alt="Customer Focus Icon" />
                 <h3 className="why-title fw-bold" style={{ fontSize: '20px' }}>Customer Focus</h3>
                 <p className="why-text text-center mt-3" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                   We are a customer-driven company that believes in building long-term partnerships. By working closely with our clients from concept to production, we develop the best solutions to meet their functional, quality, and delivery requirements — every time.
                 </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Pre-footer Gear Image Section */}
      <div style={{ height: '350px', backgroundImage: "url('https://sdn.co.in/wp-content/uploads/2025/10/shutterstock_1950663952-1-1.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      </div>
    </div>
  );
};

export default Home;
