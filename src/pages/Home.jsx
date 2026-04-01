import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiAward, FiTarget, FiClock, FiUsers } from 'react-icons/fi';
import heroimg from '../assets/hero.png';
import homeVideo from '../assets/Home.mp4';
const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-sdn" style={{ position: 'relative', minHeight: '85vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <img src={heroimg} alt="Hero Background" className="hero-bg-sdn" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 0 }} />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.45)', zIndex: 1 }}></div>

        <Container className="position-relative" style={{ zIndex: 2, padding: '50px 15px' }}>
          <Row>
            <Col lg={8} md={10}>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 style={{ fontFamily: '"Open Sans", Sans-serif', fontWeight: 600, fontSize: '64px', lineHeight: 1.2, color: '#fff', marginBottom: '15px' }}>
                  HIGH PRECISION <br /> ONTIME DELIVERY
                </h1>
                <div style={{ fontFamily: '"Open Sans", Sans-serif', fontSize: '28px', fontWeight: 600, lineHeight: '60px', color: '#fff', marginBottom: '35px' }}>
                  AUTOMATED PRODUCTION TECHNOLOGY
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '10px' }}>
                  <Link
                    to="/contact"
                    style={{
                      backgroundColor: '#009CD7',
                      color: '#fff',
                      textDecoration: 'none',
                      padding: '20px 44px',
                      borderRadius: '30px',
                      fontFamily: '"Roboto", Sans-serif',
                      fontWeight: 500,
                      fontSize: '18px',
                      display: 'inline-block',
                      transition: '0.3s',
                    }}
                  >
                    GET A QUOTE
                  </Link>
                  <Link
                    to="/capabilities"
                    style={{
                      backgroundColor: 'transparent',
                      color: '#fff',
                      textDecoration: 'none',
                      padding: '18px 32px',
                      borderRadius: '30px',
                      border: '1px solid rgba(255,255,255,0.35)',
                      fontFamily: '"Roboto", Sans-serif',
                      fontWeight: 500,
                      fontSize: '18px',
                      display: 'inline-block',
                      transition: '0.3s',
                    }}
                  >
                    VIEW CAPABILITIES
                  </Link>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section className="py-5" style={{ backgroundColor: '#fff', marginTop: '100px', marginBottom: '100px' }}>
        <Container>
          <Row className="g-4">
            {/* Left Column */}
            <Col lg={5} className="d-flex flex-column">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                <div style={{ fontFamily: '"Roboto", Sans-serif', color: '#000', fontWeight: '600', fontSize: '40px', marginBottom: '5px' }}>WE ARE</div>
                <h2 style={{ fontFamily: '"Roboto", Sans-serif', color: '#009CD7', fontWeight: '600', fontSize: '64px', marginBottom: '20px', lineHeight: 1 }}>
                  Sri Balaji Tech
                </h2>
                <h5 style={{ fontFamily: '"Roboto", Sans-serif', color: '#000', fontWeight: '600', fontSize: '19px', lineHeight: '1.5', marginBottom: '20px' }}>
                  Manufacturer of Precision Machined Components for Automobile and General Engineering Industries
                </h5>
                <p style={{ fontFamily: '"Roboto", Sans-serif', color: '#000', fontWeight: 300, fontSize: '19px', lineHeight: '1.6', marginBottom: '30px' }}>
                  With state-of-the-art CNC and VMC technology, Sri Balaji Tech provides world-class quality and consistency across every part we produce.
                </p>
                
                <img src="https://sdn.co.in/wp-content/uploads/2025/10/shutterstock_1020591757-1.png" alt="CNC Process" style={{ width: '100%', height: 'auto', objectFit: 'cover', marginBottom: '30px' }} />
                
                {/* Stats Box properly placed within the left column */}
                <motion.div
                  style={{
                    backgroundColor: '#fff',
                    padding: '30px',
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15), 0 15px 35px rgba(0, 0, 0, 0.12), 0 8px 20px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.08)',
                    marginTop: '300px',
                    position: 'relative',
                    zIndex: 10,
                    borderRadius: '20px',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.95) 50%, rgba(248, 250, 252, 0.95) 100%)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 35px 70px rgba(0, 0, 0, 0.2), 0 20px 45px rgba(0, 0, 0, 0.15), 0 12px 25px rgba(0, 0, 0, 0.12), 0 6px 15px rgba(0, 0, 0, 0.1)',
                    transition: { duration: 0.3 }
                  }}
                  className="premium-card-enhanced"
                >
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #009CD7 0%, #4169E1 50%, #009CD7 100%)',
                    backgroundSize: '200% 100%',
                    animation: 'shimmer 3s ease-in-out infinite'
                  }}></div>
                  <div className="d-flex flex-wrap text-start w-100">
                    <div style={{ flex: '1 1 50%', paddingRight: '15px', marginBottom: '25px' }}>
                       <div style={{ fontSize: '16px', fontFamily: '"Roboto", Sans-serif', color: '#000', fontWeight: '500', lineHeight: '1.4' }}>
                         <span style={{ display: 'block', fontWeight: 'bold' }}>1 Million+</span>
                         precision machined components produced annually
                       </div>
                    </div>
                    <div style={{ flex: '1 1 50%', paddingLeft: '15px', marginBottom: '25px' }}>
                       <div style={{ fontSize: '16px', fontFamily: '"Roboto", Sans-serif', color: '#000', fontWeight: '500', lineHeight: '1.4' }}>
                         <span style={{ display: 'block', fontWeight: 'bold' }}>70%</span>
                         current utilization — ready to scale production capacity and enhancements
                       </div>
                    </div>
                    <div style={{ flex: '1 1 50%', paddingRight: '15px' }}>
                       <div style={{ fontSize: '16px', fontFamily: '"Roboto", Sans-serif', color: '#000', fontWeight: '500', lineHeight: '1.4' }}>
                         <span style={{ display: 'block', fontWeight: 'bold' }}>Complete</span>
                         end-to-end machining, assembly & inspection under one roof
                       </div>
                    </div>
                    <div style={{ flex: '1 1 50%', paddingLeft: '15px' }}>
                       <div style={{ fontSize: '16px', fontFamily: '"Roboto", Sans-serif', color: '#000', fontWeight: '500', lineHeight: '1.4' }}>
                         <span style={{ display: 'block', fontWeight: 'bold' }}>ISO 9001:2015</span>
                         certified and IATF 16949 Certificate Audit Completed 31July25
                       </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </Col>

            {/* Right Column: Tall Video */}
            <Col lg={7}>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ height: '100%', paddingLeft: '30px' }}>
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  onTimeUpdate={(e) => {
                    if (e.target.currentTime >= 20) {
                      e.target.currentTime = 0;
                    }
                  }}
                  style={{ width: '100%', height: '100%', minHeight: '600px', objectFit: 'cover', borderRadius: '15px' }}
                >
                     <source src={homeVideo} type="video/mp4" />
                </video>
                {/* Intro & New Statistics Section */}
                <div style={{
                  padding: '30px',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
                  border: '1px solid #eee',
                  marginTop: '40px'
                }}>
                  <Row className="g-4 text-center">
                    <Col sm={6} lg={3}>
                      <div style={{ fontWeight: 'bold', fontSize: '24px', color: '#4169E1' }}>16,000 sq. ft.</div>
                      <div style={{ fontSize: '14px', color: '#666' }}>Modern Production Facility</div>
                    </Col>
                    <Col sm={6} lg={3}>
                      <div style={{ fontWeight: 'bold', fontSize: '24px', color: '#4169E1' }}>18 Unit</div>
                      <div style={{ fontSize: '14px', color: '#666' }}>CNC Machining Centers</div>
                    </Col>
                    <Col sm={6} lg={3}>
                      <div style={{ fontWeight: 'bold', fontSize: '24px', color: '#4169E1' }}>300 Kva</div>
                      <div style={{ fontSize: '14px', color: '#666' }}>Power backup (Gen Set)</div>
                    </Col>
                    <Col sm={6} lg={3}>
                      <div style={{ fontWeight: 'bold', fontSize: '24px', color: '#4169E1' }}>ISO 9001:2015</div>
                      <div style={{ fontSize: '14px', color: '#666' }}>Certified Standards</div>
                    </Col>
                  </Row>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why SBT Section */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5 mt-5">
            <h2 style={{ color: '#4169E1', fontSize: '48px', fontWeight: 600 }}>WHY SRI BALAJI TECH?</h2>
            <div style={{ width: '80px', height: '4px', background: '#4169E1', margin: '20px auto' }}></div>
          </div>
            
          <Row className="g-4 mt-4">
            {[
              { title: "Quality First", icon: <FiAward size={40} color="#4169E1" />, desc: "Committed to delivering zero-defect products through continuous monitoring and IATF/ISO standards." },
              { title: "Precision", icon: <FiTarget size={40} color="#4169E1" />, desc: "Equipped with advanced CNC centers and thread rolling machines for close tolerance manufacturing." },
              { title: "Timely Delivery", icon: <FiClock size={40} color="#4169E1" />, desc: "Optimized planning and full power backup ensure we always meet your production schedules." },
              { title: "Customer Focus", icon: <FiUsers size={40} color="#4169E1" />, desc: "We build long-term partnerships through customized solutions and dedicated engineering support." }
            ].map((item, idx) => (
              <Col lg={3} md={6} key={idx}>
                <motion.div whileHover={{ y: -10 }} style={{ padding: '30px', background: '#fff', borderRadius: '15px', height: '100%', border: '1px solid #efefef', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                  <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#333' }}>{item.title}</h4>
                  <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.8' }}>{item.desc}</p>
                </motion.div>
              </Col>
            ))}
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
