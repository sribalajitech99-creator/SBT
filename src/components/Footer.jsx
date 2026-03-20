import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      {/* Top Footer (Contact) */}
      <div className="footer-top" style={{ backgroundColor: '#009CD7', color: '#fff', padding: '50px 0' }}>
        <Container>
          <Row className="align-items-start g-4 text-start">
            <Col lg={3} md={6}>
              <div style={{ textTransform: 'uppercase', fontWeight: 700, fontSize: '18px', marginBottom: '20px' }}>ADMIN:</div>
              <div style={{ fontSize: '15px', lineHeight: '1.8' }}>
                72993 32000, 73054 84528<br />
                accounts@sbt.co.in<br />
                sbtramesh@sbt.co.in
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div style={{ textTransform: 'uppercase', fontWeight: 700, fontSize: '18px', marginBottom: '20px' }}>MARKETING:</div>
              <div style={{ fontSize: '15px', lineHeight: '1.8' }}>
                97101 11579, 7305484528<br />
                marketing@sbt.co.in
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div style={{ textTransform: 'uppercase', fontWeight: 700, fontSize: '18px', marginBottom: '20px' }}>OFFICE:</div>
              <div style={{ fontSize: '15px', lineHeight: '1.8' }}>
                +91 044-4768 4420, 89257 46458<br />
                sales@sbt.co.in<br />
                purchase@sbt.co.in
              </div>
            </Col>
            <Col lg={3} md={6} className="text-lg-end text-start mt-4 mt-lg-5">
              <Link to="/contact" style={{ color: '#fff', fontWeight: 700, fontSize: '18px', textDecoration: 'none', textTransform: 'uppercase' }}>
                GET YOUR QUOTE
              </Link>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Bottom Footer (Copyright & Links) */}
      <div className="footer-bottom" style={{ backgroundColor: '#000000', padding: '20px 0' }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={2} md={12} className="text-center text-lg-start mb-3 mb-lg-0">
              <a href="#" style={{ color: '#fff', fontSize: '24px' }}><FaLinkedin /></a>
            </Col>
            
            <Col lg={6} md={12} className="text-center mb-3 mb-lg-0">
              <Link to="/" className="footer-link-bottom">HOME</Link>
              <Link to="/about-us" className="footer-link-bottom">ABOUT US</Link>
              <Link to="/products" className="footer-link-bottom">PRODUCTS</Link>
              <Link to="/capabilities" className="footer-link-bottom">CAPABILITIES</Link>
              <Link to="/sister-concern" className="footer-link-bottom">SISTER CONCERN</Link>
              <Link to="/contact" className="footer-link-bottom">CONTACT</Link>
            </Col>

            <Col lg={4} md={12} className="text-center text-lg-end" style={{ color: '#666', fontSize: '13px' }}>
              <Link to="/sitemap" style={{ color: '#666', textDecoration: 'none', marginRight: '10px' }}>Sitemap</Link>
              Designed & Developed by Prashanth web Tech
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
