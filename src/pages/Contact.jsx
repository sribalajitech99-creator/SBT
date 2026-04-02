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

  const handleSubmit = async (e) => {
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

    // Primary path: formsubmit.co as server-side e-mail dispatch
    try {
      const payload = new URLSearchParams();
      payload.append('_subject', `SDN Website Inquiry: ${subject}`);
      payload.append('_captcha', 'false');
      payload.append('name', name || '-');
      payload.append('email', form.email.trim());
      payload.append('subject', subject);
      payload.append('message', form.message.trim());

      const response = await fetch('https://formsubmit.co/ajax/sribalajitech99@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload.toString(),
      });

      if (!response.ok) throw new Error(`Form submission failed: ${response.status}`);

      const json = await response.json();
      alert('Thanks for choosing us! Your form is submitted successfully.');
      setForm({ firstName: '', lastName: '', email: '', subject: '', message: '' });
      setStatus('opened');

      return;
    } catch (error) {
      console.warn('FormSubmit.co failed, falling back to mailto:', error);
      alert('Direct submission failed. Opening your email client as fallback. Please hit send in your email app.');
      window.location.href = mailto;
      setStatus('opened');
      return;
    } finally {
      setStatus(null);
    }
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
                  <motion.div
                    className="premium-card-icon me-4 mb-0 d-flex align-items-center justify-content-center"
                    style={{
                      width: '60px',
                      height: '60px',
                      fontSize: '24px',
                      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15), 0 6px 12px rgba(0, 0, 0, 0.1)',
                      borderRadius: '16px',
                      background: 'linear-gradient(135deg, #009CD7 0%, #4169E1 100%)',
                      color: 'white',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: '0 20px 40px rgba(0, 156, 215, 0.3), 0 10px 20px rgba(65, 105, 225, 0.2)',
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaPhoneAlt />
                  </motion.div>
                  <div>
                    <h5 className="mb-1 fw-bold" style={{ color: 'var(--premium-dark)' }}>Phone</h5>
                    <p className="text-muted mb-0 fs-5">+91 7299331000</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-5">
                  <motion.div
                    className="premium-card-icon me-4 mb-0 d-flex align-items-center justify-content-center"
                    style={{
                      width: '60px',
                      height: '60px',
                      fontSize: '24px',
                      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15), 0 6px 12px rgba(0, 0, 0, 0.1)',
                      borderRadius: '16px',
                      background: 'linear-gradient(135deg, #009CD7 0%, #4169E1 100%)',
                      color: 'white',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: '0 20px 40px rgba(0, 156, 215, 0.3), 0 10px 20px rgba(65, 105, 225, 0.2)',
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaEnvelope />
                  </motion.div>
                  <div>
                    <h5 className="mb-1 fw-bold" style={{ color: 'var(--premium-dark)' }}>Email</h5>
                    <p className="text-muted mb-0 fs-5">Sales@sribalajitech.net</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-5">
                  <motion.div
                    className="premium-card-icon me-4 mb-0 d-flex align-items-center justify-content-center"
                    style={{
                      width: '60px',
                      height: '60px',
                      fontSize: '24px',
                      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15), 0 6px 12px rgba(0, 0, 0, 0.1)',
                      borderRadius: '16px',
                      background: 'linear-gradient(135deg, #009CD7 0%, #4169E1 100%)',
                      color: 'white',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: '0 20px 40px rgba(0, 156, 215, 0.3), 0 10px 20px rgba(65, 105, 225, 0.2)',
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaMapMarkerAlt />
                  </motion.div>
                  <div>
                    <h5 className="mb-1 fw-bold" style={{ color: 'var(--premium-dark)' }}>Address</h5>
                    <p className="text-muted mb-0 fs-5">364, 4th St, Sidco Industrial Estate, <br /> Ambattur, Chennai, Tamil Nadu 600053
</p>
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
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15), 0 15px 35px rgba(0, 0, 0, 0.12), 0 8px 20px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.08)',
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.95) 50%, rgba(248, 250, 252, 0.95) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                whileHover={{
                  scale: 1.02,
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
                  background: 'linear-gradient(90deg, #009CD7 0%, #4169E1 50%, #009CD7 100%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 3s ease-in-out infinite'
                }}></div>
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
          height="300"
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
