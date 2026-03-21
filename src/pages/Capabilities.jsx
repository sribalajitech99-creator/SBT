import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import newVideo from '../assets/852341-hd_1920_1080_30fps.mp4';

const Capabilities = () => {
   return (
      <div>
         {/* Hero Image Section */}
         <section className="p-0 m-0">
            <video
               src={newVideo}
               autoPlay
               loop
               muted
               playsInline
               style={{ width: '100%', maxHeight: '500px', objectFit: 'cover', display: 'block' }}
            />
         </section>

         {/* Services Section */}
         <section className="py-5" style={{ marginTop: '40px', marginBottom: '80px' }}>
            <Container>
               <Row className="g-5 text-center mb-5">
                  <Col lg={4}>
                     <motion.div
                       style={{
                         position: 'relative',
                         overflow: 'hidden',
                         borderRadius: '20px',
                         marginBottom: '20px'
                       }}
                       initial={{ opacity: 0, y: 30 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.8, delay: 0.1 }}
                       whileHover={{
                         scale: 1.03,
                         transition: { duration: 0.3 }
                       }}
                     >
                       <img src="https://sdn.co.in/wp-content/uploads/2025/10/tl160-series-500x500-1.webp" alt="CNC Machining" className="img-fluid" style={{
                         height: '220px',
                         objectFit: 'cover',
                         boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15), 0 15px 35px rgba(0, 0, 0, 0.12), 0 8px 20px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.08)',
                         borderRadius: '20px',
                         background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.95) 50%, rgba(248, 250, 252, 0.95) 100%)',
                         backdropFilter: 'blur(20px)',
                         border: '1px solid rgba(255, 255, 255, 0.3)',
                         transition: 'all 0.3s ease'
                       }} onError={(e) => e.target.style.display = 'none'} />
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
                     </motion.div>
                     <h4 style={{ color: '#4169E1', fontWeight: 'bold', fontSize: '18px', marginBottom: '15px' }}>CNC MACHINING</h4>
                     <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#444', textAlign: 'justify' }}>
                        At SBT Engineering, we specialize in the precision machining of complex components using advanced CNC turning centers and Vertical Machining Centers (VMCs). Our machining capabilities cover a wide range of materials including carbon steel, alloy steel, stainless steel, aluminum, and brass. With multi-axis CNCs, VMCs with 4th-axis functionality, and robotic automation, we ensure consistent accuracy, repeatability, and productivity in every operation.
                     </p>
                  </Col>
                  <Col lg={4}>
                     <motion.div
                       style={{
                         position: 'relative',
                         overflow: 'hidden',
                         borderRadius: '20px',
                         marginBottom: '20px'
                       }}
                       initial={{ opacity: 0, y: 30 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.8, delay: 0.2 }}
                       whileHover={{
                         scale: 1.03,
                         transition: { duration: 0.3 }
                       }}
                     >
                       <img src="https://sdn.co.in/wp-content/uploads/2025/10/machining-and-secondary-operation.png" alt="Secondary Operations" className="img-fluid" style={{
                         height: '220px',
                         objectFit: 'cover',
                         boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15), 0 15px 35px rgba(0, 0, 0, 0.12), 0 8px 20px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.08)',
                         borderRadius: '20px',
                         background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.95) 50%, rgba(248, 250, 252, 0.95) 100%)',
                         backdropFilter: 'blur(20px)',
                         border: '1px solid rgba(255, 255, 255, 0.3)',
                         transition: 'all 0.3s ease'
                       }} onError={(e) => e.target.style.display = 'none'} />
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
                     </motion.div>
                     <h4 style={{ color: '#4169E1', fontWeight: 'bold', fontSize: '18px', marginBottom: '15px' }}>SECONDARY OPERATIONS</h4>
                     <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#444', textAlign: 'justify' }}>
                        Our in-house machining setup supports a variety of secondary and finishing operations such as thread rolling, drilling, tapping, and bandsaw cutting. Equipped with high-precision thread rolling machines, automated handling systems, and dedicated finishing equipment, we provide complete machining solutions from raw material to finished part — all under one roof.
                     </p>
                  </Col>
                  <Col lg={4}>
                     <motion.div
                       style={{
                         position: 'relative',
                         overflow: 'hidden',
                         borderRadius: '20px',
                         marginBottom: '20px'
                       }}
                       initial={{ opacity: 0, y: 30 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.8, delay: 0.3 }}
                       whileHover={{
                         scale: 1.03,
                         transition: { duration: 0.3 }
                       }}
                     >
                       <img src="https://sdn.co.in/wp-content/uploads/2025/10/dedicated-tool-room.png" alt="Tooling" className="img-fluid" style={{
                         height: '220px',
                         objectFit: 'cover',
                         boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15), 0 15px 35px rgba(0, 0, 0, 0.12), 0 8px 20px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.08)',
                         borderRadius: '20px',
                         background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.95) 50%, rgba(248, 250, 252, 0.95) 100%)',
                         backdropFilter: 'blur(20px)',
                         border: '1px solid rgba(255, 255, 255, 0.3)',
                         transition: 'all 0.3s ease'
                       }} onError={(e) => e.target.style.display = 'none'} />
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
                     </motion.div>
                     <h4 style={{ color: '#4169E1', fontWeight: 'bold', fontSize: '18px', marginBottom: '15px' }}>TOOLING & FIXTURE DEVELOPMENT</h4>
                     <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#444', textAlign: 'justify' }}>
                        We maintain an in-house tool and fixture development facility for producing jigs, fixtures, and gauges essential for our machining operations. This enables quick setup changes, reduced downtime, and higher consistency. Our experienced engineering team also collaborates with specialized tool manufacturers to design cutting tools and fixtures for complex components, ensuring efficiency and precision in production.
                     </p>
                  </Col>
               </Row>

               <hr style={{ borderColor: '#4169E1', borderWidth: '2px', opacity: 0.5, marginBottom: '50px' }} />

               <Row className="g-5 text-center mb-5">
                  <Col lg={4}>
                     <h4 style={{ color: '#4169E1', fontWeight: 'bold', fontSize: '18px', marginBottom: '15px' }}>HEAT TREATMENT</h4>
                     <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#444', textAlign: 'justify' }}>
                        Heat treatment is carried out through approved, customer-certified vendors to ensure the required mechanical properties and dimensional stability. Processes such as hardening, tempering, case hardening, induction hardening, and nitriding are performed under strict quality supervision. Components are periodically validated through NABL-approved laboratories to ensure compliance with customer and industry standards.
                     </p>
                  </Col>
                  <Col lg={4}>
                     <h4 style={{ color: '#4169E1', fontWeight: 'bold', fontSize: '18px', marginBottom: '15px' }}>SURFACE TREATMENT</h4>
                     <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#444', textAlign: 'justify' }}>
                        All surface treatment and coating operations are handled by qualified and approved vendors. Processes include zinc, zinc-nickel, trivalent zinc, and electroless nickel plating, depending on the component application. Coating thickness, adhesion, and corrosion resistance are verified through periodic salt spray and XRF tests at certified laboratories, ensuring the highest surface quality and performance.
                     </p>
                  </Col>
                  <Col lg={4}>
                     <h4 style={{ color: '#4169E1', fontWeight: 'bold', fontSize: '18px', marginBottom: '15px' }}>QUALITY CONTROL & INSPECTION</h4>
                     <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#444', textAlign: 'justify' }}>
                        Quality is the foundation of everything we do at SBT Engineering. Each new product undergoes Advanced Product Quality Planning (APQP) to ensure complete understanding of customer requirements. We apply global quality methodologies such as FMEA, MSA, SPC, and PPAP to develop robust processes. All critical dimensions are verified using precision instruments and gauges, and a Coordinate Measuring Machine (CMM) is planned for installation to further enhance accuracy and validation capabilities. Our commitment to continuous improvement, traceability, and process control ensures that every component meets or exceeds customer expectations — consistently and reliably.
                     </p>
                  </Col>
               </Row>
            </Container>
         </section>

         {/* Machine Capacity Section */}
         <section className="py-5 bg-light" style={{ paddingBottom: '100px' }}>
            <Container>
               <div className="text-center mb-5">
                  <h2 style={{ color: '#4169E1', fontWeight: 'bold', fontSize: '28px' }}>Machine Capacity</h2>
               </div>

               <style>
                  {`
               .machine-table th { color: #006644; border: 1px solid #000; padding: 12px; text-align: center; font-weight: bold; background: #fff; }
               .machine-table td { border: 1px solid #000; padding: 12px; text-align: center; font-weight: bold; background: #fff; }
             `}
               </style>

               {/* Row 1 */}
               <Row className="align-items-center justify-content-center mb-5 pb-4 border-bottom">
                  <Col lg={5} className="text-center mb-4 mb-lg-0">
                     <motion.div
                       style={{
                         position: 'relative',
                         overflow: 'hidden',
                         borderRadius: '20px'
                       }}
                       initial={{ opacity: 0, x: -30 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.8, delay: 0.1 }}
                       whileHover={{
                         scale: 1.02,
                         transition: { duration: 0.3 }
                       }}
                     >
                       <img src="https://sdn.co.in/wp-content/uploads/2025/10/Screenshot-2025-10-05-113649-768x643.png" alt="CNC Turning" className="img-fluid" style={{
                         maxHeight: '350px',
                         boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15), 0 15px 35px rgba(0, 0, 0, 0.12), 0 8px 20px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.08)',
                         borderRadius: '20px',
                         background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.95) 50%, rgba(248, 250, 252, 0.95) 100%)',
                         backdropFilter: 'blur(20px)',
                         border: '1px solid rgba(255, 255, 255, 0.3)',
                         transition: 'all 0.3s ease'
                       }} onError={(e) => { e.target.onError = null; e.target.src = "/gallery/9.jpeg" }} />
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
                     </motion.div>
                  </Col>
                  <Col lg={6}>
                     <motion.div
                       style={{
                         boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15), 0 15px 35px rgba(0, 0, 0, 0.12), 0 8px 20px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.08)',
                         borderRadius: '20px',
                         background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.95) 50%, rgba(248, 250, 252, 0.95) 100%)',
                         backdropFilter: 'blur(20px)',
                         border: '1px solid rgba(255, 255, 255, 0.3)',
                         overflow: 'hidden',
                         position: 'relative'
                       }}
                       initial={{ opacity: 0, x: 30 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.8, delay: 0.2 }}
                       whileHover={{
                         scale: 1.01,
                         boxShadow: '0 35px 70px rgba(0, 0, 0, 0.2), 0 20px 45px rgba(0, 0, 0, 0.15), 0 12px 25px rgba(0, 0, 0, 0.12), 0 6px 15px rgba(0, 0, 0, 0.1)',
                         transition: { duration: 0.3 }
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
                       <table className="table machine-table w-100 mb-0">
                        <thead>
                           <tr><th>Machine</th><th>Make</th><th>Capacity</th><th>No's</th></tr>
                        </thead>
                        <tbody>
                           <tr><td>CNC Turning<br />Centre</td><td>Jobber Elite</td><td>270x200<br />mm</td><td>3</td></tr>
                           <tr><td>CNC Turning<br />Centre</td><td>Lokesh-TL20N</td><td>275x325<br />mm</td><td>3</td></tr>
                           <tr><td>CNC Turning<br />Centre</td><td>Lokesh-TL200</td><td>270x200<br />mm</td><td>1</td></tr>
                           <tr><td>CNC Turning<br />Centre</td><td>Macpower</td><td>270x350<br />mm</td><td>1</td></tr>
                        </tbody>
                     </table>
                     </motion.div>
                  </Col>
               </Row>

               {/* Row 2 */}
               <Row className="align-items-center justify-content-center mb-5 pb-4 border-bottom">
                  <Col lg={5} className="text-center mb-4 mb-lg-0">
                     <motion.div
                       style={{
                         position: 'relative',
                         overflow: 'hidden',
                         borderRadius: '20px'
                       }}
                       initial={{ opacity: 0, x: -30 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.8, delay: 0.3 }}
                       whileHover={{
                         scale: 1.02,
                         transition: { duration: 0.3 }
                       }}
                     >
                       <img src="https://sdn.co.in/wp-content/uploads/2025/10/Screenshot-2025-10-05-113706.png" alt="Vertical Machine Centre" className="img-fluid" style={{
                         maxHeight: '350px',
                         boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15), 0 15px 35px rgba(0, 0, 0, 0.12), 0 8px 20px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.08)',
                         borderRadius: '20px',
                         background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.95) 50%, rgba(248, 250, 252, 0.95) 100%)',
                         backdropFilter: 'blur(20px)',
                         border: '1px solid rgba(255, 255, 255, 0.3)',
                         transition: 'all 0.3s ease'
                       }} onError={(e) => { e.target.onError = null; e.target.src = "/gallery/9.jpeg" }} />
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
                     </motion.div>
                  </Col>
                  <Col lg={6}>
                     <motion.div
                       style={{
                         boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15), 0 15px 35px rgba(0, 0, 0, 0.12), 0 8px 20px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.08)',
                         borderRadius: '20px',
                         background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.95) 50%, rgba(248, 250, 252, 0.95) 100%)',
                         backdropFilter: 'blur(20px)',
                         border: '1px solid rgba(255, 255, 255, 0.3)',
                         overflow: 'hidden',
                         position: 'relative'
                       }}
                       initial={{ opacity: 0, x: 30 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.8, delay: 0.4 }}
                       whileHover={{
                         scale: 1.01,
                         boxShadow: '0 35px 70px rgba(0, 0, 0, 0.2), 0 20px 45px rgba(0, 0, 0, 0.15), 0 12px 25px rgba(0, 0, 0, 0.12), 0 6px 15px rgba(0, 0, 0, 0.1)',
                         transition: { duration: 0.3 }
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
                       <table className="table machine-table w-100 mb-0">
                        <thead>
                           <tr><th>Machine</th><th>Make</th><th>Capacity</th><th>No's</th></tr>
                        </thead>
                        <tbody>
                           <tr><td>Vertical<br />Machine<br />Centre</td><td>Lokesh-VM-09<br />With 4th Axis</td><td>800x500x<br />500 mm</td><td>2</td></tr>
                        </tbody>
                     </table>
                     </motion.div>
                  </Col>
               </Row>

               {/* Row 3 */}
               <Row className="align-items-center justify-content-center mb-5 pb-4 border-bottom">
                  <Col lg={5} className="text-center mb-4 mb-lg-0">
                     <motion.div
                       style={{
                         position: 'relative',
                         overflow: 'hidden',
                         borderRadius: '20px'
                       }}
                       initial={{ opacity: 0, x: -30 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.8, delay: 0.5 }}
                       whileHover={{
                         scale: 1.02,
                         transition: { duration: 0.3 }
                       }}
                     >
                       <img src="https://sdn.co.in/wp-content/uploads/2025/10/fanuc.png" alt="Robot Cell" className="img-fluid" style={{
                         maxHeight: '350px',
                         boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15), 0 15px 35px rgba(0, 0, 0, 0.12), 0 8px 20px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.08)',
                         borderRadius: '20px',
                         background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.95) 50%, rgba(248, 250, 252, 0.95) 100%)',
                         backdropFilter: 'blur(20px)',
                         border: '1px solid rgba(255, 255, 255, 0.3)',
                         transition: 'all 0.3s ease'
                       }} onError={(e) => { e.target.onError = null; e.target.src = "/gallery/9.jpeg" }} />
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
                     </motion.div>
                  </Col>
                  <Col lg={6}>
                     <motion.div
                       style={{
                         boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15), 0 15px 35px rgba(0, 0, 0, 0.12), 0 8px 20px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.08)',
                         borderRadius: '20px',
                         background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.95) 50%, rgba(248, 250, 252, 0.95) 100%)',
                         backdropFilter: 'blur(20px)',
                         border: '1px solid rgba(255, 255, 255, 0.3)',
                         overflow: 'hidden',
                         position: 'relative'
                       }}
                       initial={{ opacity: 0, x: 30 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.8, delay: 0.6 }}
                       whileHover={{
                         scale: 1.01,
                         boxShadow: '0 35px 70px rgba(0, 0, 0, 0.2), 0 20px 45px rgba(0, 0, 0, 0.15), 0 12px 25px rgba(0, 0, 0, 0.12), 0 6px 15px rgba(0, 0, 0, 0.1)',
                         transition: { duration: 0.3 }
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
                       <table className="table machine-table w-100 mb-0">
                        <thead>
                           <tr><th>Machine</th><th>Make</th><th>Capacity</th><th>No's</th></tr>
                        </thead>
                        <tbody>
                           <tr><td>Automation<br />Robot Cell</td><td>Fanuc</td><td>25 Kg</td><td>2</td></tr>
                        </tbody>
                     </table>
                     </motion.div>
                  </Col>
               </Row>

               {/* Row 4 - Two tables */}
               <Row className="justify-content-center mt-5">
                  <Col lg={5} className="mb-5 mb-lg-0">
                     <motion.div
                       style={{
                         boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15), 0 15px 35px rgba(0, 0, 0, 0.12), 0 8px 20px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.08)',
                         borderRadius: '20px',
                         background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.95) 50%, rgba(248, 250, 252, 0.95) 100%)',
                         backdropFilter: 'blur(20px)',
                         border: '1px solid rgba(255, 255, 255, 0.3)',
                         overflow: 'hidden',
                         position: 'relative'
                       }}
                       initial={{ opacity: 0, y: 30 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.8, delay: 0.7 }}
                       whileHover={{
                         scale: 1.01,
                         boxShadow: '0 35px 70px rgba(0, 0, 0, 0.2), 0 20px 45px rgba(0, 0, 0, 0.15), 0 12px 25px rgba(0, 0, 0, 0.12), 0 6px 15px rgba(0, 0, 0, 0.1)',
                         transition: { duration: 0.3 }
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
                     <div className="text-center mb-4">
                        <img src="" alt="Thread Rolling" className="img-fluid" style={{ maxHeight: '250px' }} onError={(e) => e.target.style.display = 'none'} />
                     </div>
                     <table className="table machine-table w-100 mb-0">
                        <thead>
                           <tr><th>Machine</th><th>Make</th><th>Capacity</th><th>No's</th></tr>
                        </thead>
                        <tbody>
                           <tr><td>Thread<br />Rolling</td><td>MTE</td><td>30 Ton</td><td>1</td></tr>
                        </tbody>
                     </table>
                     </motion.div>
                  </Col>
                  <Col lg={1}></Col>
                  <Col lg={5}>
                     <motion.div
                       style={{
                         boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15), 0 15px 35px rgba(0, 0, 0, 0.12), 0 8px 20px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.08)',
                         borderRadius: '20px',
                         background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.95) 50%, rgba(248, 250, 252, 0.95) 100%)',
                         backdropFilter: 'blur(20px)',
                         border: '1px solid rgba(255, 255, 255, 0.3)',
                         overflow: 'hidden',
                         position: 'relative'
                       }}
                       initial={{ opacity: 0, y: 30 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.8, delay: 0.8 }}
                       whileHover={{
                         scale: 1.01,
                         boxShadow: '0 35px 70px rgba(0, 0, 0, 0.2), 0 20px 45px rgba(0, 0, 0, 0.15), 0 12px 25px rgba(0, 0, 0, 0.12), 0 6px 15px rgba(0, 0, 0, 0.1)',
                         transition: { duration: 0.3 }
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
                     <div className="text-center mb-4">
                        <img src="" alt="Bandsaw" className="img-fluid" style={{ maxHeight: '250px' }} onError={(e) => e.target.style.display = 'none'} />
                     </div>
                     <table className="table machine-table w-100 mb-0">
                        <thead>
                           <tr><th>Machine</th><th>Make</th><th>Capacity</th><th>No's</th></tr>
                        </thead>
                        <tbody>
                           <tr><td>Bandsaw<br />Cutting<br />Machine</td><td>Laxson</td><td>200 mm</td><td>1</td></tr>
                        </tbody>
                     </table>
                     </motion.div>
                  </Col>
               </Row>

            </Container>
         </section>
      </div>
   );
};

export default Capabilities;
