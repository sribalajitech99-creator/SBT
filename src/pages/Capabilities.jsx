import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FiThermometer, FiLayers, FiCheckCircle } from 'react-icons/fi';
import newVideo from '../assets/852341-hd_1920_1080_30fps.mp4';
import threadmachine from '../assets/Thread rolling.png';
import Bandsaw from '../assets/Bandsaw.png';
import homeVideo from '../assets/Home.mp4';

const Capabilities = () => {
   return (
      <div>
         {/* Hero Image Section */}
         <section style={{ position: 'relative', width: '100%', height: '500px', overflow: 'hidden' }}>
            <video
               src={newVideo}
               autoPlay
               loop
               muted
               playsInline
               style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
               <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  <h1 style={{ color: '#fff', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, margin: 0, textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>Capabilities</h1>
               </motion.div>
            </div>
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
                         maxHeight: '220px',
                         width: '100%',
                         objectFit: 'cover',
                         boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                         borderRadius: '20px',
                         border: '1px solid rgba(255, 255, 255, 0.3)'
                       }} onError={(e) => e.target.style.display = 'none'} />
                       <div style={{
                         position: 'absolute',
                         top: 0,
                         left: 0,
                         right: 0,
                         height: '4px',
                         background: 'linear-gradient(90deg, #4169E1 0%, #009CD7 50%, #4169E1 100%)'
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
                         maxHeight: '220px',
                         width: '100%',
                         objectFit: 'cover',
                         boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                         borderRadius: '20px',
                         border: '1px solid rgba(255, 255, 255, 0.3)'
                       }} onError={(e) => e.target.style.display = 'none'} />
                       <div style={{
                         position: 'absolute',
                         top: 0,
                         left: 0,
                         right: 0,
                         height: '4px',
                         background: 'linear-gradient(90deg, #4169E1 0%, #009CD7 50%, #4169E1 100%)'
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
                         maxHeight: '220px',
                         width: '100%',
                         objectFit: 'cover',
                         boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                         borderRadius: '20px',
                         border: '1px solid rgba(255, 255, 255, 0.3)'
                       }} onError={(e) => e.target.style.display = 'none'} />
                       <div style={{
                         position: 'absolute',
                         top: 0,
                         left: 0,
                         right: 0,
                         height: '4px',
                         background: 'linear-gradient(90deg, #4169E1 0%, #009CD7 50%, #4169E1 100%)'
                       }}></div>
                     </motion.div>
                     <h4 style={{ color: '#4169E1', fontWeight: 'bold', fontSize: '18px', marginBottom: '15px' }}>TOOLING & FIXTURE DEVELOPMENT</h4>
                     <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#444', textAlign: 'justify' }}>
                        We maintain an in-house tool and fixture development facility for producing jigs, fixtures, and gauges essential for our machining operations. This enables quick setup changes, reduced downtime, and higher consistency. Our experienced engineering team also collaborates with specialized tool manufacturers to design cutting tools and fixtures for complex components, ensuring efficiency and precision in production.
                     </p>
                  </Col>
               </Row>

               <hr style={{ borderColor: '#4169E1', borderWidth: '2px', opacity: 0.3, marginBottom: '50px' }} />

               <Row className="g-5 text-center mb-5">
                  <Col lg={4}>
                     <div style={{ marginBottom: '15px', color: '#4169E1' }}><FiThermometer size={35} /></div>
                     <h4 style={{ color: '#4169E1', fontWeight: 'bold', fontSize: '18px', marginBottom: '15px' }}>HEAT TREATMENT</h4>
                     <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#444', textAlign: 'justify' }}>
                        Heat treatment is carried out through approved, customer-certified vendors to ensure the required mechanical properties and dimensional stability. Processes such as hardening, tempering, case hardening, induction hardening, and nitriding are performed under strict quality supervision. Components are periodically validated through NABL-approved laboratories to ensure compliance with customer and industry standards.
                     </p>
                  </Col>
                  <Col lg={4}>
                     <div style={{ marginBottom: '15px', color: '#4169E1' }}><FiLayers size={35} /></div>
                     <h4 style={{ color: '#4169E1', fontWeight: 'bold', fontSize: '18px', marginBottom: '15px' }}>SURFACE TREATMENT</h4>
                     <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#444', textAlign: 'justify' }}>
                        All surface treatment and coating operations are handled by qualified and approved vendors. Processes include zinc, zinc-nickel, trivalent zinc, and electroless nickel plating, depending on the component application. Coating thickness, adhesion, and corrosion resistance are verified through periodic salt spray and XRF tests at certified laboratories, ensuring the highest surface quality and performance.
                     </p>
                  </Col>
                  <Col lg={4}>
                     <div style={{ marginBottom: '15px', color: '#4169E1' }}><FiCheckCircle size={35} /></div>
                     <h4 style={{ color: '#4169E1', fontWeight: 'bold', fontSize: '18px', marginBottom: '15px' }}>QUALITY CONTROL & INSPECTION</h4>
                     <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#444', textAlign: 'justify' }}>
                        Quality is the foundation of everything we do at SBT Engineering. Each new product undergoes Advanced Product Quality Planning (APQP) to ensure complete understanding of customer requirements. We apply global quality methodologies such as FMEA, MSA, SPC, and PPAP to develop robust processes. All critical dimensions are verified using precision instruments and gauges to further enhance accuracy and validation capabilities.
                     </p>
                  </Col>
               </Row>
            </Container>
         </section>

         {/* Machine Capacity Section */}
         <section className="py-5 bg-light" style={{ paddingBottom: '100px' }}>
            <Container>
               <div className="text-center mb-5">
                  <h2 style={{ color: '#4169E1', fontWeight: 'bold', fontSize: '32px' }}>Machine Capacity</h2>
               </div>

               <style>
                  {`
                    .machine-table th { color: #fff; background: #4169E1; border: 1px solid #ddd; padding: 12px; text-align: center; font-weight: bold; }
                    .machine-table td { border: 1px solid #ddd; padding: 12px; text-align: center; background: #fff; }
                    .machine-table tr:nth-child(even) td { background: #f9f9f9; }
                  `}
               </style>

               {/* CNC Turning Centres Row */}
               <Row className="align-items-center justify-content-center mb-5">
                  <Col lg={11}>
                     <motion.div
                       style={{
                         boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
                         borderRadius: '20px',
                         background: '#fff',
                         border: '1px solid #eee',
                         overflow: 'hidden'
                       }}
                       initial={{ opacity: 0, y: 30 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                     >
                       <div className="p-3 text-center" style={{ background: '#4169E1', color: '#fff', fontWeight: 'bold' }}>
                          CNC TURNING CENTRES
                       </div>
                       <table className="table machine-table w-100 mb-0">
                         <thead>
                            <tr><th>Machine</th><th>Make</th><th>Capacity</th><th>No's</th></tr>
                         </thead>
                         <tbody>
                            <tr><td>CNC Turning Centre</td><td>Lokesh-TL160</td><td>270x200 mm</td><td>5</td></tr>
                            <tr><td>CNC Turning Centre</td><td>GlobalVagor-130</td><td>275x325 mm</td><td>3</td></tr>
                            <tr><td>CNC Turning Centre</td><td>Lokesh-TL200</td><td>270x200 mm</td><td>10</td></tr>
                            <tr><td>CNC Turning Centre</td><td>LMW-LL20TL7</td><td>270x700 mm</td><td>1</td></tr>
                            <tr><td>CNC Turning Centre</td><td>Jyoti</td><td>270x1200 mm</td><td>1</td></tr>
                         </tbody>
                       </table>
                     </motion.div>
                  </Col>
               </Row>

               {/* Secondary Machines Row */}
               <Row className="justify-content-center g-4 mb-5">
                  <Col lg={5}>
                     <motion.div style={{ boxShadow: '0 15px 35px rgba(0,0,0,0.1)', borderRadius: '20px', background: '#fff', overflow: 'hidden' }} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <div className="p-3 text-center" style={{ background: '#4169E1', color: '#fff', fontWeight: 'bold' }}>THREAD ROLLING</div>
                        <table className="table machine-table w-100 mb-0">
                           <thead><tr><th>Machine</th><th>Make</th><th>Capacity</th><th>No's</th></tr></thead>
                           <tbody><tr><td>Thread Rolling</td><td>MTE</td><td>30 Ton</td><td>1</td></tr></tbody>
                        </table>
                     </motion.div>
                  </Col>
                  <Col lg={5}>
                     <motion.div style={{ boxShadow: '0 15px 35px rgba(0,0,0,0.1)', borderRadius: '20px', background: '#fff', overflow: 'hidden' }} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <div className="p-3 text-center" style={{ background: '#4169E1', color: '#fff', fontWeight: 'bold' }}>BANDSAW CUTTING</div>
                        <table className="table machine-table w-100 mb-0">
                           <thead><tr><th>Machine</th><th>Make</th><th>Capacity</th><th>No's</th></tr></thead>
                           <tbody><tr><td>Bandsaw Machine</td><td>Laxson</td><td>200 mm</td><td>1</td></tr></tbody>
                        </table>
                     </motion.div>
                  </Col>
               </Row>

               {/* Other Machineries Row */}
               <Row className="justify-content-center mb-5">
                  <Col lg={11}>
                     <motion.div style={{ boxShadow: '0 15px 35px rgba(0,0,0,0.1)', borderRadius: '20px', background: '#fff', overflow: 'hidden' }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="p-3 text-center" style={{ background: '#4169E1', color: '#fff', fontWeight: 'bold' }}>OTHER MACHINERIES</div>
                        <table className="table machine-table w-100 mb-0">
                           <thead><tr><th>Machine</th><th>Make</th><th>Capacity</th><th>No's</th></tr></thead>
                           <tbody>
                              <tr><td>CENTRELESS GRINDING</td><td>BHAGWAN SONS 150</td><td>Ø150 MM</td><td>2</td></tr>
                              <tr><td>CENTRELESS GRINDING HCG 75</td><td>BHAGWAN SONS 100</td><td>Ø75 MM</td><td>3</td></tr>
                              <tr><td>SHOT PEENING</td><td>TECHNO BRIGHT</td><td>150kg</td><td>1</td></tr>
                              <tr><td>DRILLING MACHINE</td><td>ITCO</td><td>13 mm</td><td>1</td></tr>
                              <tr><td>AIR COMPRESSOR</td><td>ELGI</td><td>220 Ltr</td><td>1</td></tr>
                              <tr><td>BEND REMOVING MACHINE</td><td>-</td><td>-</td><td>1</td></tr>
                              <tr><td>BENCH GRINDING MACHINE</td><td>-</td><td>-</td><td>1</td></tr>
                           </tbody>
                        </table>
                     </motion.div>
                  </Col>
               </Row>

               {/* Quality & Inspection Equipments Row */}
               <Row className="justify-content-center">
                  <Col lg={11}>
                     <motion.div style={{ boxShadow: '0 25px 50px rgba(0,0,0,0.15)', borderRadius: '20px', background: '#fff', overflow: 'hidden' }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="p-3 text-center" style={{ background: '#4169E1', color: '#fff', fontWeight: 'bold', fontSize: '20px' }}>LIST OF EQUIPMENTS (INSPECTION / QUALITY CONTROL)</div>
                        <div className="table-responsive">
                           <table className="table machine-table w-100 mb-0" style={{ fontSize: '13px' }}>
                              <thead>
                                 <tr><th>Sl.No</th><th>Instrument Name</th><th>Range</th><th>Make</th><th>Qty</th></tr>
                              </thead>
                              <tbody>
                                 <tr><td>01</td><td>DIGITAL VERNIER</td><td>0-300 mm</td><td>MITUTOYO</td><td>02</td></tr>
                                 <tr><td>02</td><td>VERNIER CALLIPER</td><td>0-300 mm</td><td>MITUTOYO</td><td>01</td></tr>
                                 <tr><td>03</td><td>VERNIER CALLIPER</td><td>0-150 mm</td><td>MITUTOYO</td><td>02</td></tr>
                                 <tr><td>04</td><td>VERNIER CALLIPER</td><td>0-600 mm</td><td>MITUTOYO</td><td>01</td></tr>
                                 <tr><td>05</td><td>MICROMETER</td><td>0-25 mm</td><td>MITUTOYO</td><td>10</td></tr>
                                 <tr><td>06</td><td>MICROMETER</td><td>25-50mm</td><td>MITUTOYO</td><td>02</td></tr>
                                 <tr><td>07</td><td>MICROMETER</td><td>50-75mm</td><td>MITUTOYO</td><td>01</td></tr>
                                 <tr><td>08</td><td>BLADE MICROMETER</td><td>0.25 mm</td><td>MITUTOYO</td><td>01</td></tr>
                                 <tr><td>09</td><td>DIGITAL MICROMETER</td><td>0-25 mm</td><td>MITUTOYO</td><td>02</td></tr>
                                 <tr><td>10</td><td>DIGITAL MICROMETER</td><td>25-50 mm</td><td>MITUTOYO</td><td>02</td></tr>
                                 <tr><td>11</td><td>PLUNGER DIAL</td><td>0 - 10 mm</td><td>MITUTOYO</td><td>05</td></tr>
                                 <tr><td>12</td><td>LEVER DIAL</td><td>0-0.8</td><td>MITUTOYO</td><td>02</td></tr>
                                 <tr><td>13</td><td>LEVER DIAL</td><td>0-0.14</td><td>MITUTOYO</td><td>02</td></tr>
                                 <tr><td>14</td><td>SURFACE TABLE</td><td>600x600</td><td>MITUTOYO</td><td>02</td></tr>
                                 <tr><td>15</td><td>PROFILE PROJECTOR</td><td>200x100</td><td>MITUTOYO</td><td>01</td></tr>
                                 <tr><td>16</td><td>CONTOUR MEASURING MACHINE</td><td>X-140mm, Y-60mm, Z-350mm</td><td>MAHR</td><td>01</td></tr>
                                 <tr><td>17</td><td>ACCURATE BRIDGE TYPE CMM MACHINE</td><td>500mm X 600mm X 400mm</td><td>SPECTRA</td><td>01 <small>(Order Placed)</small></td></tr>
                                 <tr><td>18</td><td>VIDEO MEASURING SYSTEM</td><td>X-300mm, Y-200mm, Z-200mm</td><td>MAHR</td><td>01</td></tr>
                              </tbody>
                           </table>
                        </div>
                     </motion.div>
                  </Col>
               </Row>
            </Container>
         </section>

         {/* Bottom Video Section */}
         <section className="py-5 bg-white">
            <Container>
               <motion.div
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 style={{ width: '100%', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.1)' }}
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
            </Container>
         </section>
      </div>
   );
};

export default Capabilities;
