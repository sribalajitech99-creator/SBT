import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState(null); // null | 'submitting' | 'opened'

  const handleSubmit = (e) => {
    e.preventDefault();

    const required = [
      { key: 'firstName', label: 'First name' },
      { key: 'email', label: 'Email address' },
      { key: 'subject', label: 'Subject' },
      { key: 'message', label: 'Message' },
    ];
    for (const item of required) {
      if (!String(form[item.key] || '').trim()) {
        alert(`Please enter: ${item.label}`);
        return;
      }
    }

    const to = 'sribalajitech99@gmail.com';
    const name = `${form.firstName.trim()} ${form.lastName.trim()}`.trim();
    const subject = form.subject.trim();

    const body = [
      `Name: ${name || '-'}`,
      `Email: ${form.email.trim()}`,
      '',
      'Inquiry Details:',
      form.message.trim(),
      '',
      '---',
      'Sent from SDN-clone website contact form',
    ].join('\n');

    const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('submitting');
    window.location.href = mailto;
    setStatus('opened');
  };

  return (
    <div>
      <section className="page-header-premium">
        <div className="hero-glow"></div>
        <Container className="position-relative" style={{ zIndex: 2 }}>
          <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <div className="premium-badge mb-3">Get Connected</div>
            <h1 className="display-4 fw-bolder text-white mb-3">Contact <span className="text-gradient-accent">Us</span></h1>
            <p className="lead text-white mx-auto" style={{ maxWidth: '600px' }}>
              We are ready to discuss your requirements and answer any questions you might have.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-5" style={{ marginTop: '60px', marginBottom: '80px' }}>
        <Container>
          <Row className="g-5">
            <Col lg={5}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="display-6 fw-bolder mb-4" style={{ color: 'var(--premium-dark)' }}>Get In Touch</h3>
                <p className="text-muted fs-5 mb-5 lh-lg">Have a question or need a quote? Reach out to us directly or fill out the form, and our sales team will get back to you shortly.</p>

                <div className="d-flex align-items-center mb-5">
                  <div className="premium-card-icon me-4 mb-0" style={{ width: '60px', height: '60px', fontSize: '24px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', borderRadius: '12px' }}>
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h5 className="mb-1 fw-bold" style={{ color: 'var(--premium-dark)' }}>Phone</h5>
                    <p className="text-muted mb-0 fs-5">+91 97101 11579, +91 89257 46458</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-5">
                  <div className="premium-card-icon me-4 mb-0" style={{ width: '60px', height: '60px', fontSize: '24px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', borderRadius: '12px' }}>
                    <FaEnvelope />
                  </div>
                  <div>
                    <h5 className="mb-1 fw-bold" style={{ color: 'var(--premium-dark)' }}>Email</h5>
                    <p className="text-muted mb-0 fs-5">sribalajitech99@gmail.com</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-5">
                  <div className="premium-card-icon me-4 mb-0" style={{ width: '60px', height: '60px', fontSize: '24px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', borderRadius: '12px' }}>
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h5 className="mb-1 fw-bold" style={{ color: 'var(--premium-dark)' }}>Address</h5>
                    <p className="text-muted mb-0 fs-5">SIDCO Industrial Estate, North Phase<br />Pattaravakkam, Ambattur, Chennai, India</p>
                  </div>
                </div>
              </motion.div>
            </Col>

            <Col lg={7}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="premium-card p-5 border-0"
                style={{
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.08), 0 5px 10px rgba(0, 0, 0, 0.06)',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <h4 className="fw-bolder mb-4 fs-3" style={{ color: 'var(--premium-dark)' }}>Send us a Message</h4>
                <Form onSubmit={handleSubmit}>
                  <Row className="g-4">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-semibold text-muted">First Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="John"
                          className="py-3 px-4 bg-light shadow-none border-0 rounded-4"
                          value={form.firstName}
                          onChange={(e) => setForm((p) => ({ ...p, firstName: e.target.value }))}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-semibold text-muted">Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Doe"
                          className="py-3 px-4 bg-light shadow-none border-0 rounded-4"
                          value={form.lastName}
                          onChange={(e) => setForm((p) => ({ ...p, lastName: e.target.value }))}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={12}>
                      <Form.Group>
                        <Form.Label className="fw-semibold text-muted">Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="john@example.com"
                          className="py-3 px-4 bg-light shadow-none border-0 rounded-4"
                          value={form.email}
                          onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={12}>
                      <Form.Group>
                        <Form.Label className="fw-semibold text-muted">Subject</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Inquiry about..."
                          className="py-3 px-4 bg-light shadow-none border-0 rounded-4"
                          value={form.subject}
                          onChange={(e) => setForm((p) => ({ ...p, subject: e.target.value }))}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={12}>
                      <Form.Group>
                        <Form.Label className="fw-semibold text-muted">Message</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={5}
                          placeholder="Your message details..."
                          className="py-3 px-4 bg-light shadow-none border-0 rounded-4"
                          value={form.message}
                          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={12} className="mt-5">
                      <Button className="btn-premium w-100 py-3 fs-5" type="submit" disabled={status === 'submitting'}>
                        SEND MESSAGE
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Google Maps Embed Location */}
      <section className="p-0 m-0">
        <iframe
          title="SRI BALAJI TECH Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7771.689098612657!2d80.1609139372785!3d13.10903253533833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263003abc33f7%3A0x29864554b78ddf4c!2sSRI%20BALAJI%20TECH!5e0!3m2!1sen!2sin!4v1773993545339!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0, display: 'block' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
