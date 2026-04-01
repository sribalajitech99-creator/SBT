import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FiCalendar, FiMaximize, FiActivity, FiZap, FiUsers } from 'react-icons/fi';
import heroVideo from '../assets/vecteezy_the-5-axis-cnc-milling-machine-cutting-the-metal-mold-part_70918760.mp4';
import img1 from '../assets/200.webp'
import galaLogo from '../assets/Gala.jpg';
import sundramLogo from '../assets/BMQRep_Logos_Interior_Sundram.png';
import stanleyLogo from '../assets/SEF.jpg';
import usiLogo from '../assets/usui-susira-international-private-limited-logo-120x120.jpg';
import ltLogo from '../assets/LT_Logo.png';
import meiLogo from '../assets/MEI.jpg';
import hvfLogo from '../assets/HVF.jpg';
import tafeLogo from '../assets/TAFE_Logo.jpg';
import preFooterImg from '../assets/pre-footer images.jpg';
import isoCertImg from '../assets/certification_iso.png';
import homeVideo from '../assets/Home.mp4';

const AboutUs = () => {
  return (
    <div>
      {/* Hero Image Section */}
      <section style={{ position: 'relative', width: '100%', height: '500px', overflow: 'hidden' }}>
        <video 
          src={heroVideo} 
          autoPlay 
          loop 
          muted 
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
        />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 style={{ color: '#fff', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, margin: 0, textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>About Us</h1>
          </motion.div>
        </div>
      </section>
      
      {/* Detail Section */}
      <section className="py-5" style={{ marginTop: '40px', marginBottom: '40px' }}>
        <Container>
          <Row className="mb-5 align-items-center">
            <Col lg={6}>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 style={{ color: '#4169E1', fontWeight: 'bold', fontSize: '36px', marginBottom: '20px' }}>OUR JOURNEY</h2>
                <p style={{ lineHeight: '1.8', color: '#444' }}>
                  Sri Balaji Tech was established in <strong>1998</strong> by <strong>Mr. D. Ravi</strong>, a visionary technocrat. Starting with a focus on precision machining, the company has grown steadily over two decades, venturing into CNC machining in 2004 and full finished part manufacturing in 2008.
                </p>
                <p style={{ lineHeight: '1.8', color: '#444' }}>
                  Today, we operate from a state-of-the-art **16,000 sq. ft.** facility in the Ambattur Industrial Estate, Chennai. With constant innovation, we have diversified into both automotive and non-automotive sectors, achieving IATF/ISO 9001:2015 certifications and implementing advanced quality practices like 5S and Quality Circles.
                </p>
              </motion.div>
            </Col>
            <Col lg={6} className="text-center">
              <motion.img 
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                src={img1} 
                alt="Modern CNC Facility" 
                className="img-fluid" 
                style={{ maxHeight: '400px', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
                onError={(e) => { e.target.onError = null; e.target.src = "/gallery/8.jpeg" }}
              />
            </Col>
          </Row>

          {/* Quick Stats Grid */}
          <Row className="text-center g-3 mb-5 align-items-stretch mx-auto justify-content-center" style={{ maxWidth: '950px' }}>
            {[
              { label: "Established", value: "1998 (26+ Years)", icon: <FiCalendar size={20} /> },
              { label: "Facility Area", value: "16,000 Sq. Ft.", icon: <FiMaximize size={20} /> },
              { label: "Capacity", value: "85% - 90% Utilization", icon: <FiActivity size={20} /> },
              { label: "Power Backup", value: "300 Kva Full Backup", icon: <FiZap size={20} /> },
              { label: "Team Strength", value: "75+ Professionals", icon: <FiUsers size={20} /> }
            ].map((stat, idx) => (
              <Col lg={2} md={4} sm={6} xs={12} key={idx}>
                <div style={{
                  backgroundColor: '#4169E1',
                  padding: '15px 10px',
                  borderRadius: '16px',
                  color: '#fff',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #4169E1 0%, #009CD7 100%)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}>
                  <div style={{ marginBottom: '8px', opacity: 0.9 }}>{stat.icon}</div>
                  <div style={{ color: '#fff', opacity: 0.9, fontSize: '13px', marginBottom: '5px' }}>{stat.label}</div>
                  <div style={{ fontWeight: 'bold', fontSize: '15px' }}>{stat.value}</div>
                </div>
              </Col>
            ))}
          </Row>

          {/* Vision / Mission */}
          <Row className="g-4 mb-5 align-items-stretch">
            <Col md={6}>
               <motion.div
                 className="vision-mission-card"
                 style={{
                   padding: '60px 40px',
                   height: '100%',
                   borderRadius: '20px',
                   background: 'linear-gradient(135deg, #ffffff 0%, #f9fbff 100%)',
                   boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                   border: '1px solid #eee',
                   position: 'relative'
                 }}
                 whileHover={{ y: -5 }}
               >
                  <h2 style={{ color: '#4169E1', fontWeight: 'bold', marginBottom: '20px', fontSize: '32px' }}>OUR VISION</h2>
                  <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#444' }}>
                     To become a recognized industry leader in precision component and prototype part manufacturing through a commitment to excellence, ensuring sustainable growth for all stakeholders.
                  </p>
               </motion.div>
            </Col>
            <Col md={6}>
               <motion.div
                 className="vision-mission-card"
                 style={{
                   padding: '60px 40px',
                   height: '100%',
                   borderRadius: '20px',
                   background: 'linear-gradient(135deg, #ffffff 0%, #f9fbff 100%)',
                   boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                   border: '1px solid #eee',
                   position: 'relative'
                 }}
                 whileHover={{ y: -5 }}
               >
                  <h2 style={{ color: '#4169E1', fontWeight: 'bold', marginBottom: '20px', fontSize: '32px' }}>OUR MISSION</h2>
                  <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#444' }}>
                     To create consistent value for our customers by delivering the highest quality products and providing complete manufacturing solutions from prototype to full-scale production.
                  </p>
               </motion.div>
            </Col>
          </Row>
          
          {/* Certifications Section */}
          <div className="text-center mb-5" style={{ marginTop: '60px' }}>
            <h2 style={{ color: '#4169E1', fontWeight: 'bold', fontSize: '32px', marginBottom: '30px' }}>QUALITY MANAGEMENT CERTIFICATION</h2>
            <Row className="justify-content-center g-4 align-items-center">
              <Col lg={4}>
                <Row className="g-4">
                  <Col xs={12}>
                    <motion.div
                      style={{
                        padding: '20px',
                        borderRadius: '20px',
                        background: 'linear-gradient(135deg, #4169E1 0%, #009CD7 100%)',
                        color: '#fff',
                        boxShadow: '0 15px 35px rgba(65, 105, 225, 0.2)',
                        textAlign: 'center'
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <h3 style={{ fontSize: '20px', fontWeight: 'bold', margin: '0 0 5px 0' }}>ISO 9001 : 2015</h3>
                      <p style={{ fontSize: '13px', opacity: 0.9, margin: 0 }}>Intertek Certified Quality Management</p>
                    </motion.div>
                  </Col>
                  <Col xs={12}>
                    <motion.div
                      style={{
                        padding: '20px',
                        borderRadius: '20px',
                        background: '#fff',
                        border: '2px solid #4169E1',
                        color: '#4169E1',
                        boxShadow: '0 15px 35px rgba(0,0,0,0.05)',
                        textAlign: 'center'
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <h3 style={{ fontSize: '20px', fontWeight: 'bold', margin: '0 0 5px 0' }}>IATF 16949 : 2016</h3>
                      <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>Process ongoing to be Certified</p>
                    </motion.div>
                  </Col>
                </Row>
              </Col>
              
              <Col lg={4} className="text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <img 
                    src={isoCertImg} 
                    alt="ISO 9001:2015 Certificate" 
                    className="img-fluid" 
                    style={{ 
                      maxHeight: '400px', 
                      borderRadius: '10px', 
                      boxShadow: '0 20px 45px rgba(0,0,0,0.15)',
                      border: '1px solid #ddd'
                    }} 
                  />
                </motion.div>
              </Col>
            </Row>
          </div>

          {/* Customers */}
          <div className="text-center mb-5" style={{ marginTop: '60px' }}>
            <h2 style={{ color: '#4169E1', fontWeight: 'bold', fontSize: '32px', marginBottom: '40px' }}>OUR VALUED CUSTOMERS</h2>
            <Row className="justify-content-center align-items-stretch g-4">
               {[
                 { name: "Gala Precision Engineering", img: galaLogo },
                 { name: "Sundram Fasteners Limited (TVS-SFL)", img: sundramLogo },
                 { name: "Stanley Engineered Fastening", img: stanleyLogo },
                 { name: "Usui Susira International", img: usiLogo },
                 { name: "Larsen & Toubro (L&T)", img: ltLogo },
                 { name: "Madras Engineering Industries (MEI)", img: meiLogo },
                 {name: "Heavy Vehicles Factory (HVF)", img: hvfLogo },
                 { name: "TAFE", img: tafeLogo }
               ].map((customer, idx) => (
                 <Col xs={6} md={4} lg={3} key={idx}>
                   <motion.div
                     style={{
                       padding: '20px',
                       borderRadius: '15px',
                       background: '#fff',
                       border: '1px solid #eee',
                       height: '100%',
                       display: 'flex',
                       flexDirection: 'column',
                       alignItems: 'center',
                       justifyContent: 'center',
                       boxShadow: '0 8px 15px rgba(0,0,0,0.05)'
                     }}
                     whileHover={{ y: -5 }}
                   >
                     {customer.img ? (
                       <img src={customer.img} alt={customer.name} className="img-fluid" style={{ maxHeight: '50px', objectFit: 'contain' }} />
                     ) : (
                       <div style={{ color: '#4169E1', fontWeight: 'bold', fontSize: '18px' }}>{customer.logo}</div>
                     )}
                     <div style={{ fontSize: '12px', marginTop: '10px', color: '#666', fontWeight: 'bold' }}>{customer.name}</div>
                   </motion.div>
                 </Col>
               ))}
            </Row>
          </div>

          {/* New Video Section */}
          <div className="mt-5 mb-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ width: '100%', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            >
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
                style={{ width: '100%', height: 'auto', display: 'block' }}
              >
                <source src={homeVideo} type="video/mp4" />
              </video>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Pre-footer Image Section */}
      <div className="pre-footer-mobile" style={{ height: '400px', backgroundImage: `url("${preFooterImg}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      </div>
    </div>
  );
};

export default AboutUs;
