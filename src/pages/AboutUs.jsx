import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <div>
      {/* Hero Image Section */}
      <section className="p-0 m-0">
        <img 
          src="/gallery/9.jpeg" 
          alt="CNC Precision Work" 
          style={{ width: '100%', maxHeight: '500px', objectFit: 'cover', display: 'block' }} 
        />
      </section>
      
      {/* Detail Section */}
      <section className="py-5" style={{ marginTop: '40px', marginBottom: '40px' }}>
        <Container>
          <Row className="mb-5 align-items-center">
            <Col lg={6}>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 style={{ color: '#009CD7', fontWeight: 'bold', fontSize: '36px', marginBottom: '20px' }}>WE ARE SDN</h2>
                <p style={{ lineHeight: '1.8', color: '#444' }}>
                  SDN Engineering was established in 2007 by Mr. Durai, a technocrat with decades of experience in precision machining and manufacturing of automotive and general engineering components.
                </p>
                <p style={{ lineHeight: '1.8', color: '#444' }}>
                  Located in the SIDCO Industrial Estate, North Phase, Pattaravakkam, Ambattur, Chennai, one of India's most prominent engineering hubs, SDN Engineering specializes in CNC turning, VMC machining, thread rolling, and automation-based component production.
                </p>
                <p style={{ lineHeight: '1.8', color: '#444' }}>
                  Our facility is equipped with advanced machinery, including CNC turning centers, VMCs with 4th axis, robotic handling systems, and precision inspection tools, enabling us to deliver complex machined components with consistent quality and close tolerances. SDN Engineering currently operates 70% capacity utilization, with significant potential for expansion to meet new customer demands.
                </p>
              </motion.div>
            </Col>
            <Col lg={6} className="text-center">
              <motion.img 
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                src="https://sdn.co.in/wp-content/uploads/2025/10/LOKESH-VML-1000.png" 
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
                <h2 style={{ color: '#009CD7', fontWeight: 'bold', fontSize: '36px', marginBottom: '20px' }}>WHAT WE DO</h2>
                <p style={{ lineHeight: '1.8', color: '#444' }}>
                  At SDN Engineering, we specialize in delivering end-to-end precision machining solutions tailored to the evolving needs of our customers. Our core strength lies in the manufacturing of high-precision machined components and sub-assemblies that demand accuracy, repeatability, and superior finish. Using advanced CNC turning centers, VMCs with 4th-axis capability, thread rolling machines, and robotic automation, we ensure exceptional productivity and quality at every stage of production.
                </p>
                <p style={{ lineHeight: '1.8', color: '#444' }}>
                  From concept development to final delivery, we manage the complete process in-house — including material sourcing, machining, inspection, and assembly. This integrated approach allows us to maintain complete control over quality, timelines, and costs, resulting in reliable products that perform consistently in real-world applications.
                </p>
              </motion.div>
            </Col>
            <Col lg={6} className="text-center">
              <motion.img 
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                src="https://sdn.co.in/wp-content/uploads/2025/10/LOKESH-TL160.png" 
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
            <h2 style={{ color: '#009CD7', fontWeight: 'bold', fontSize: '36px' }}>CERTIFICATIONS AND PATENTS</h2>
          </div>
          <Row className="align-items-center mb-5 justify-content-center">
            <Col md={3} className="text-center mb-4 mb-md-0">
                 <img src="https://sdn.co.in/wp-content/uploads/2025/10/certificate.png" alt="Certificate" className="img-fluid shadow-sm" style={{ maxHeight: '250px', border: '1px solid #eee', padding: '10px' }} onError={(e) => e.target.style.display='none'} />
            </Col>
            <Col md={3} className="text-center mb-4 mb-md-0">
                 <img src="https://sdn.co.in/wp-content/uploads/2025/10/award.png" alt="Award" className="img-fluid shadow-sm" style={{ maxHeight: '250px', border: '1px solid #eee', padding: '10px' }} onError={(e) => e.target.style.display='none'} />
            </Col>
            <Col md={5}>
              <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#333' }}>
                As an ISO 9001:2015 certified company, SDN Engineering is committed to achieving the highest standards of precision and reliability in every component we manufacture. Our strong quality system, advanced CNC and VMC technology, and automation ensure consistent, defect-free production. Continuous improvement and innovation drive us to deliver superior value and performance to every customer.
              </p>
            </Col>
          </Row>

          <Row className="text-center g-3 mb-5">
            <Col lg={3} md={6}>
               <div style={{ backgroundColor: '#7BC1E8', padding: '25px', borderRadius: '10px', color: '#fff' }}>
                  <div className="mb-2" style={{ color: '#000', fontWeight: 'bold' }}>Annual Turnover:</div>
                  <div style={{ fontWeight: 'bold', fontSize: '18px' }}>2.50 - 3.00Crores</div>
               </div>
            </Col>
            <Col lg={3} md={6}>
               <div style={{ backgroundColor: '#7BC1E8', padding: '25px', borderRadius: '10px', color: '#fff' }}>
                  <div className="mb-2" style={{ color: '#000', fontWeight: 'bold' }}>No.of Employees</div>
                  <div style={{ fontWeight: 'bold', fontSize: '18px' }}>25-30 Employees</div>
               </div>
            </Col>
            <Col lg={3} md={6}>
               <div style={{ backgroundColor: '#7BC1E8', padding: '25px', borderRadius: '10px', color: '#fff' }}>
                  <div className="mb-2" style={{ color: '#000', fontWeight: 'bold' }}>Annual Turnover with<br/>Sister Concern:</div>
                  <div style={{ fontWeight: 'bold', fontSize: '18px' }}>14.0-15.0 Crores</div>
               </div>
            </Col>
            <Col lg={3} md={6}>
               <div style={{ backgroundColor: '#7BC1E8', padding: '25px', borderRadius: '10px', color: '#fff' }}>
                  <div className="mb-2" style={{ color: '#000', fontWeight: 'bold' }}>GSTIN</div>
                  <div style={{ fontWeight: 'bold', fontSize: '18px' }}>33AKMPR<br/>8857J1ZC</div>
               </div>
            </Col>
          </Row>

          <div style={{ height: '350px', backgroundImage: "url('https://sdn.co.in/wp-content/uploads/2025/10/shutterstock_1492926674-1-2.png')", backgroundSize: 'cover', backgroundPosition: 'center', marginBottom: '80px' }}>
          </div>
          
          {/* Vision / Mission */}
          <Row className="g-4 mb-5">
            <Col md={6}>
               <div style={{ border: '1px solid #ddd', padding: '50px 30px', textAlign: 'center', height: '100%' }}>
                  <h2 style={{ color: '#009CD7', fontWeight: 'bold', marginBottom: '20px' }}>OUR VISION</h2>
                  <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#444' }}>
                     Our vision is to become a recognized industry leader by our customers in component / P roto part manufacturing and commitment to excellence in the markets we serve and ensure business growth in a manner that serves the interest of all our stakeholders.
                  </p>
               </div>
            </Col>
            <Col md={6}>
               <div style={{ border: '1px solid #ddd', padding: '50px 30px', textAlign: 'center', height: '100%' }}>
                  <h2 style={{ color: '#009CD7', fontWeight: 'bold', marginBottom: '20px' }}>OUR MISSION</h2>
                  <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#444' }}>
                     Our mission is to create consistant value for our customers by delivering highest quality of products with providing complete solutions like full finished parts
                  </p>
               </div>
            </Col>
          </Row>
          
          {/* Customers */}
          <div className="text-center mb-5">
            <h2 style={{ color: '#009CD7', fontWeight: 'bold', fontSize: '24px', marginBottom: '30px' }}>OUR CUSTOMERS</h2>
            <Row className="justify-content-center align-items-center g-4">
               {/* Placeholders for logos, styled like the SS */}
               <Col xs={6} md={3}><img src="https://sdn.co.in/wp-content/uploads/2025/10/ashok-leyland.png" alt="Ashok Leyland" className="img-fluid" style={{ maxHeight: '60px' }} onError={(e) => e.target.style.display='none'} /></Col>
               <Col xs={6} md={3}><img src="https://sdn.co.in/wp-content/uploads/2025/10/fastenex.png" alt="FASTENEX" className="img-fluid" style={{ maxHeight: '60px' }} onError={(e) => e.target.style.display='none'} /></Col>
               <Col xs={6} md={3}><img src="https://sdn.co.in/wp-content/uploads/2025/10/sundram.png" alt="Sundram Fasteners" className="img-fluid" style={{ maxHeight: '60px' }} onError={(e) => e.target.style.display='none'} /></Col>
               <Col xs={6} md={3}><img src="https://sdn.co.in/wp-content/uploads/2025/10/secheron.png" alt="Secheron" className="img-fluid" style={{ maxHeight: '60px' }} onError={(e) => e.target.style.display='none'} /></Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* Pre-footer Image Section */}
      <div style={{ height: '400px', backgroundImage: "url('https://sdn.co.in/wp-content/uploads/2025/10/shutterstock_1492926674-1-2.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      </div>
    </div>
  );
};

export default AboutUs;
