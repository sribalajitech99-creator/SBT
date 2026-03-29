import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import heroVideo from '../assets/vecteezy_the-5-axis-cnc-milling-machine-cutting-the-metal-mold-part_70918760.mp4';
import img1 from '../assets/200.webp'
import ashokLogo from '../assets/Ashok-Leyland-Logo.png';
import sundramLogo from '../assets/BMQRep_Logos_Interior_Sundram.png';
import secheronLogo from '../assets/secheron.png';
import fastenexlogo from '../assets/4494.jpg';
import preFooterImg from '../assets/pre-footer images.jpg';
import newVideo from '../assets/1.mp4';

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
                <h2 style={{ color: '#4169E1', fontWeight: 'bold', fontSize: '36px', marginBottom: '20px' }}>WE ARE SBT</h2>
                <p style={{ lineHeight: '1.8', color: '#444' }}>
                  SBT Engineering was established in 2007 by Mr. Durai, a technocrat with decades of experience in precision machining and manufacturing of automotive and general engineering components.
                </p>
                <p style={{ lineHeight: '1.8', color: '#444' }}>
                  Located in the SIDCO Industrial Estate, North Phase, Pattaravakkam, Ambattur, Chennai, one of India's most prominent engineering hubs, SBT Engineering specializes in CNC turning, VMC machining, thread rolling, and automation-based component production.
                </p>
                <p style={{ lineHeight: '1.8', color: '#444' }}>
                  Our facility is equipped with advanced machinery, including CNC turning centers, VMCs with 4th axis, robotic handling systems, and precision inspection tools, enabling us to deliver complex machined components with consistent quality and close tolerances. SBT Engineering currently operates 70% capacity utilization, with significant potential for expansion to meet new customer demands.
                </p>
              </motion.div>
            </Col>
            <Col lg={6} className="text-center">
              <motion.img 
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                src={img1} 
                alt="Lokesh VML 1000" 
                className="img-fluid" 
                style={{ maxHeight: '400px' }} 
                onError={(e) => { e.target.onError = null; e.target.src = "/gallery/8.jpeg" }}
              />
            </Col>
          </Row>

          <Row className="mb-5 align-items-center flex-lg-row-reverse">
            <Col lg={6}>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 style={{ color: '#4169E1', fontWeight: 'bold', fontSize: '36px', marginBottom: '20px' }}>WHAT WE DO</h2>
                <p style={{ lineHeight: '1.8', color: '#444' }}>
                  At SBT Engineering, we specialize in delivering end-to-end precision machining solutions tailored to the evolving needs of our customers. Our core strength lies in the manufacturing of high-precision machined components and sub-assemblies that demand accuracy, repeatability, and superior finish. Using advanced CNC turning centers, VMCs with 4th-axis capability, thread rolling machines, and robotic automation, we ensure exceptional productivity and quality at every stage of production.
                </p>
                <p style={{ lineHeight: '1.8', color: '#444' }}>
                  From concept development to final delivery, we manage the complete process in-house — including material sourcing, machining, inspection, and assembly. This integrated approach allows us to maintain complete control over quality, timelines, and costs, resulting in reliable products that perform consistently in real-world applications.
                </p>
              </motion.div>
            </Col>
            <Col lg={6} className="text-center">
              <motion.img 
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                src="https://5.imimg.com/data5/SELLER/Default/2021/4/RS/BW/SQ/17685/tl160-series-1000x1000.jpg" 
                alt="Lokesh TL160" 
                className="img-fluid" 
                style={{ maxHeight: '350px' }} 
                onError={(e) => { e.target.onError = null; e.target.src = "/gallery/9.jpeg" }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Certifications and Patents */}
      <section className="py-5" style={{ backgroundColor: '#fff' }}>
        <Container>
          <div className="text-center mb-5">
            <h2 style={{ color: '#4169E1', fontWeight: 'bold', fontSize: '36px' }}>CERTIFICATIONS AND PATENTS</h2>
          </div>
          <Row className="align-items-center mb-5 justify-content-center">
            <Col md={3} className="text-center mb-4 mb-md-0">
                 <img src="https://sdn.co.in/wp-content/uploads/2025/10/certificate.png" alt="Certificate" className="img-fluid" style={{
                   maxHeight: '250px',
                   border: '1px solid #eee',
                   padding: '10px',
                   boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.08), 0 5px 10px rgba(0, 0, 0, 0.06)',
                   borderRadius: '12px',
                   background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)',
                   backdropFilter: 'blur(10px)',
                   border: '1px solid rgba(255, 255, 255, 0.2)'
                 }} onError={(e) => e.target.style.display='none'} />
            </Col>
            <Col md={3} className="text-center mb-4 mb-md-0">
                 <img src="https://sdn.co.in/wp-content/uploads/2025/10/award.png" alt="Award" className="img-fluid" style={{
                   maxHeight: '250px',
                   border: '1px solid #eee',
                   padding: '10px',
                   boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.08), 0 5px 10px rgba(0, 0, 0, 0.06)',
                   borderRadius: '12px',
                   background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)',
                   backdropFilter: 'blur(10px)',
                   border: '1px solid rgba(255, 255, 255, 0.2)'
                 }} onError={(e) => e.target.style.display='none'} />
            </Col>
            <Col md={5}>
              <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#333' }}>
                As an ISO 9001:2015 certified company, SBT Engineering is committed to achieving the highest standards of precision and reliability in every component we manufacture. Our strong quality system, advanced CNC and VMC technology, and automation ensure consistent, defect-free production. Continuous improvement and innovation drive us to deliver superior value and performance to every customer.
              </p>
            </Col>
          </Row>

          <Row className="text-center g-3 mb-5 align-items-stretch mx-auto justify-content-center" style={{ maxWidth: '950px' }}>
            <Col lg={3} md={6}>
               <motion.div
                 style={{
                   backgroundColor: '#4169E1',
                   padding: '15px 10px',
                   border: '1px solid #4169E1',
                   borderRadius: '16px',
                   color: '#fff',
                   height: '100%',
                   display: 'flex',
                   flexDirection: 'column',
                   justifyContent: 'center',
                   boxShadow: '0 25px 50px rgba(65, 105, 225, 0.3), 0 15px 35px rgba(0, 156, 215, 0.2), 0 8px 20px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.08)',
                   background: 'linear-gradient(135deg, #4169E1 0%, #5a7ce8 50%, #009CD7 100%)',
                   backdropFilter: 'blur(20px)',
                   border: '1px solid rgba(255, 255, 255, 0.2)',
                   position: 'relative',
                   overflow: 'hidden'
                 }}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: 0.1 }}
                 whileHover={{
                   scale: 1.05,
                   boxShadow: '0 35px 70px rgba(65, 105, 225, 0.4), 0 20px 45px rgba(0, 156, 215, 0.3), 0 12px 25px rgba(0, 0, 0, 0.12), 0 6px 15px rgba(0, 0, 0, 0.1)',
                   transition: { duration: 0.3 }
                 }}
                 className="premium-card-float"
               >
                 <div style={{
                   position: 'absolute',
                   top: 0,
                   left: 0,
                   right: 0,
                   height: '3px',
                   background: 'linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.5) 50%, #fff 100%)',
                   backgroundSize: '200% 100%',
                   animation: 'shimmer 2s ease-in-out infinite'
                 }}></div>
                  <div className="mb-2" style={{ color: '#000', fontWeight: 'bold', fontSize: '15px' }}>Annual Turnover:</div>
                  <div style={{ fontWeight: 'bold', fontSize: '16px' }}>6.00 &ndash; 6.50 Crores</div>
               </motion.div>
            </Col>
            <Col lg={3} md={6}>
               <div style={{
                 backgroundColor: '#4169E1',
                 padding: '15px 10px',
                 border: '1px solid #4169E1',
                 borderRadius: '10px',
                 color: '#fff',
                 height: '100%',
                 display: 'flex',
                 flexDirection: 'column',
                 justifyContent: 'center',
                 boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.08), 0 5px 10px rgba(0, 0, 0, 0.06)',
                 background: 'linear-gradient(135deg, #4169E1 0%, #5a7ce8 100%)',
                 backdropFilter: 'blur(10px)',
                 border: '1px solid rgba(255, 255, 255, 0.2)'
               }}>
                  <div className="mb-2" style={{ color: '#000', fontWeight: 'bold', fontSize: '15px' }}>No.of Employees</div>
                  <div style={{ fontWeight: 'bold', fontSize: '16px' }}>65-70 Employees</div>
               </div>
            </Col>
            <Col lg={3} md={6}>
               <div style={{
                 backgroundColor: '#4169E1',
                 padding: '15px 10px',
                 border: '1px solid #4169E1',
                 borderRadius: '10px',
                 color: '#fff',
                 height: '100%',
                 display: 'flex',
                 flexDirection: 'column',
                 justifyContent: 'center',
                 boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.08), 0 5px 10px rgba(0, 0, 0, 0.06)',
                 background: 'linear-gradient(135deg, #4169E1 0%, #5a7ce8 100%)',
                 backdropFilter: 'blur(10px)',
                 border: '1px solid rgba(255, 255, 255, 0.2)'
               }}>
                  <div className="mb-2" style={{ color: '#000', fontWeight: 'bold', fontSize: '15px' }}>Annual Turnover with Sister Concern:</div>
                  <div style={{ fontWeight: 'bold', fontSize: '16px' }}>4.00 Crores</div>
               </div>
            </Col>
            <Col lg={3} md={6}>
               <div style={{
                 backgroundColor: '#4169E1',
                 padding: '15px 10px',
                 border: '1px solid #4169E1',
                 borderRadius: '10px',
                 color: '#fff',
                 height: '100%',
                 display: 'flex',
                 flexDirection: 'column',
                 justifyContent: 'center',
                 boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.08), 0 5px 10px rgba(0, 0, 0, 0.06)',
                 background: 'linear-gradient(135deg, #4169E1 0%, #5a7ce8 100%)',
                 backdropFilter: 'blur(10px)',
                 border: '1px solid rgba(255, 255, 255, 0.2)'
               }}>
                  <div className="mb-2" style={{ color: '#000', fontWeight: 'bold', fontSize: '15px' }}>GSTIN</div>
                  <div style={{ fontWeight: 'bold', fontSize: '16px' }}>33DKRP<br/>S3570K1ZH</div>
               </div>
            </Col>
          </Row>

          {/* New Video Section */}
          <div style={{ maxWidth: '950px', margin: '20px auto 60px auto' }}>
            <video 
              src={newVideo} 
              autoPlay 
              loop 
              muted 
              playsInline
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.08), 0 5px 10px rgba(0, 0, 0, 0.06)',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }} 
            />
          </div>

           
          {/* Vision / Mission */}
          <Row className="g-4 mb-5 align-items-stretch">
            <Col md={6}>
               <motion.div
                 style={{
                   backgroundColor: '#fff',
                   border: '1px solid #ececec',
                   padding: '130px 60px',
                   height: '100%',
                   boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15), 0 15px 35px rgba(0, 0, 0, 0.12), 0 8px 20px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.08)',
                   display: 'flex',
                   flexDirection: 'column',
                   justifyContent: 'center',
                   borderRadius: '20px',
                   background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.95) 50%, rgba(248, 250, 252, 0.95) 100%)',
                   backdropFilter: 'blur(20px)',
                   border: '1px solid rgba(255, 255, 255, 0.3)',
                   position: 'relative',
                   overflow: 'hidden'
                 }}
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
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
                   background: 'linear-gradient(90deg, #4169E1 0%, #009CD7 50%, #4169E1 100%)',
                   backgroundSize: '200% 100%',
                   animation: 'shimmer 3s ease-in-out infinite'
                 }}></div>
                  <h2 style={{ color: '#4169E1', fontWeight: 'bold', marginBottom: '30px', textAlign: 'center', fontSize: '40px' }}>OUR VISION</h2>
                  <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#333', textAlign: 'left', margin: 0 }}>
                     Our vision is to become a recognized industry leader by our customers in component / P roto part manufacturing and commitment to excellence in the markets we serve and ensure business growth in a manner that serves the interest of all our stakeholders.
                  </p>
               </motion.div>
            </Col>
            <Col md={6}>
               <motion.div
                 style={{
                   backgroundColor: '#fff',
                   border: '1px solid #ececec',
                   padding: '130px 60px',
                   height: '100%',
                   boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15), 0 15px 35px rgba(0, 0, 0, 0.12), 0 8px 20px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.08)',
                   display: 'flex',
                   flexDirection: 'column',
                   justifyContent: 'center',
                   borderRadius: '20px',
                   background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.95) 50%, rgba(248, 250, 252, 0.95) 100%)',
                   backdropFilter: 'blur(20px)',
                   border: '1px solid rgba(255, 255, 255, 0.3)',
                   position: 'relative',
                   overflow: 'hidden'
                 }}
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, delay: 0.4 }}
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
                   background: 'linear-gradient(90deg, #4169E1 0%, #009CD7 50%, #4169E1 100%)',
                   backgroundSize: '200% 100%',
                   animation: 'shimmer 3s ease-in-out infinite'
                 }}></div>
                  <h2 style={{ color: '#4169E1', fontWeight: 'bold', marginBottom: '30px', textAlign: 'center', fontSize: '40px' }}>OUR MISSION</h2>
                  <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#333', textAlign: 'left', margin: 0 }}>
                     Our mission is to create consistant value for our customers by delivering highest quality of products with providing complete solutions like full finished parts
                  </p>
               </motion.div>
            </Col>
          </Row>
          
          {/* Customers */}
          <div className="text-center mb-5">
            <h2 style={{ color: '#4169E1', fontWeight: 'bold', fontSize: '24px', marginBottom: '30px' }}>OUR CUSTOMERS</h2>
            <Row className="justify-content-center align-items-center g-4">
               {/* Local uploaded logos */}
               <Col xs={6} md={3}><img src={ashokLogo} alt="Ashok Leyland" className="img-fluid" style={{ maxHeight: '60px' }} /></Col>
               <Col xs={6} md={3}><img src={fastenexlogo} alt="Fastenex" className="img-fluid" style={{ maxHeight: '60px' }} /></Col>
               <Col xs={6} md={3}><img src={sundramLogo} alt="Sundram Fasteners" className="img-fluid" style={{ maxHeight: '60px' }} /></Col>
               <Col xs={6} md={3}><img src={secheronLogo} alt="Secheron" className="img-fluid" style={{ maxHeight: '60px' }} /></Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* Pre-footer Image Section */}
      <div style={{ height: '400px', backgroundImage: `url("${preFooterImg}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      </div>
    </div>
  );
};

export default AboutUs;
