import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroimg from '../assets/hero.png';
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
                  AUTOMATED PRODUCTION TECHNOLOGY WITH ROBOTIC
                </div>
                <Link to="/capabilities" style={{ backgroundColor: '#009CD7', color: '#fff', textDecoration: 'none', padding: '20px 50px', borderRadius: '30px', fontFamily: '"Roboto", Sans-serif', fontWeight: 500, fontSize: '18px', display: 'inline-block', transition: '0.3s' }}>
                  KNOW MORE
                </Link>
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
                  SDN ENGINEERING
                </h2>
                <h5 style={{ fontFamily: '"Roboto", Sans-serif', color: '#000', fontWeight: '600', fontSize: '19px', lineHeight: '1.5', marginBottom: '20px' }}>
                  Manufacturer of Precision Machined Components for Automobile and General Engineering Industries
                </h5>
                <p style={{ fontFamily: '"Roboto", Sans-serif', color: '#000', fontWeight: 300, fontSize: '19px', lineHeight: '1.6', marginBottom: '30px' }}>
                  With state-of-the-art CNC and VMC technology, SDN Engineering provides world-class quality and consistency across every part we produce.
                </p>
                
                <img src="https://sdn.co.in/wp-content/uploads/2025/10/shutterstock_1020591757-1.png" alt="CNC Process" style={{ width: '100%', height: 'auto', objectFit: 'cover', marginBottom: '30px' }} />
                
                {/* Stats Box properly placed within the left column */}
                <div style={{ backgroundColor: '#fff', padding: '30px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)', marginTop: '300px', position: 'relative', zIndex: 10 }}>
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
                </div>
              </motion.div>
            </Col>

            {/* Right Column: Tall Video */}
            <Col lg={7}>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ height: '100%', paddingLeft: '30px' }}>
                <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', minHeight: '600px', objectFit: 'cover' }}>
                     <source src="https://sdn.co.in/wp-content/uploads/2025/10/WhatsApp-Video-2025-10-04-at-07.08.57_09f29bae.mp4" type="video/mp4" />
                </video>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why SDN Section */}
      <section className="py-5 position-relative" style={{ backgroundImage: "url('https://sdn.co.in/wp-content/uploads/2025/10/shutterstock_1492926674-1-2.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', minHeight: '1010px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#0276A9', mixBlendMode: 'multiply', zIndex: 0 }}></div>
        
        <Container className="position-relative" style={{ zIndex: 1 }}>
          <div className="text-center mb-5 mt-5">
            <h2 style={{ color: '#fff', fontSize: '64px', fontFamily: '"Roboto", Sans-serif', fontWeight: 600, letterSpacing: '1px' }}>WHY SDN</h2>
          </div>
            
          <Row className="g-4 mt-4">
            <Col lg={3} md={6}>
              <div className="text-center">
                <img src="https://sdn.co.in/wp-content/uploads/2025/10/Asset-1sapi-150x150-1.png" style={{ width: '99px', marginBottom: '15px' }} alt="Quality Icon" />
                <h3 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '15px' }}>Quality</h3>
                <p style={{ color: '#fff', fontSize: '16px', fontFamily: '"AR One Sans", Sans-serif', lineHeight: '1.8rem', fontWeight: 400 }}>
                  We are an ISO 9001:2015 certified organization, committed to delivering precision-machined components that meet stringent customer specifications. Our robust Quality Management System ensures consistency, traceability, and "zero-defect" products through continuous monitoring and process improvement.
                </p>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="text-center">
                <img src="https://sdn.co.in/wp-content/uploads/2025/10/Asset-2sapi-150x150-1.png" style={{ width: '99px', marginBottom: '15px' }} alt="Timely Delivery Icon" />
                <h3 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '15px' }}>Timely Delivery</h3>
                <p style={{ color: '#fff', fontSize: '16px', fontFamily: '"AR One Sans", Sans-serif', lineHeight: '1.8rem', fontWeight: 400 }}>
                  With optimized production planning and a customer-specific scheduling system, SDN ensures on-time delivery of every batch. Our efficient supply chain and strong vendor network enable us to meet tight timelines without compromising quality.
                </p>
              </div>
            </Col>
            <Col lg={3} md={6}>
               <div className="text-center">
                <img src="https://sdn.co.in/wp-content/uploads/2025/10/Asset-4sapi-150x150-1.png" style={{ width: '99px', marginBottom: '15px' }} alt="Precision Icon" />
                <h3 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '15px' }}>Precision Manufacturing</h3>
                <p style={{ color: '#fff', fontSize: '16px', fontFamily: '"AR One Sans", Sans-serif', lineHeight: '1.8rem', fontWeight: 400 }}>
                  At SDN Engineering, precision is our foundation. Equipped with advanced CNC turning centers, VMCs, thread rolling machines, and robotic automation, we manufacture critical components with close tolerances and superior finish — ensuring performance, accuracy, and reliability in every part.
                </p>
              </div>
            </Col>
            <Col lg={3} md={6}>
               <div className="text-center">
                 <img src="https://sdn.co.in/wp-content/uploads/2025/10/Asset-3sapi-150x150-1.png" style={{ width: '99px', marginBottom: '15px' }} alt="Customer Focus Icon" />
                 <h3 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '15px' }}>Customer Focus</h3>
                 <p style={{ color: '#fff', fontSize: '16px', fontFamily: '"AR One Sans", Sans-serif', lineHeight: '1.8rem', fontWeight: 400 }}>
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
