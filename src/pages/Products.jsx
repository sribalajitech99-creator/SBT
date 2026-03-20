import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Products = () => {
  const products = [
    { title: 'Precision Component A', desc: 'Tolerance up to 0.001mm', img: 'https://images.unsplash.com/photo-1611077544837-29dcb29d20c3?q=80&w=800&auto=format&fit=crop' },
    { title: 'Mechanical Assembly B', desc: 'Automated assembly systems', img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop' },
    { title: 'Custom Tooling C', desc: 'Aerospace grade materials', img: 'https://images.unsplash.com/photo-1530262929451-caf6b99b5136?q=80&w=800&auto=format&fit=crop' },
    { title: 'Engineered Fastener D', desc: 'High stress resilience', img: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=800&auto=format&fit=crop' },
    { title: 'Industrial Valve E', desc: 'Corrosion resistant', img: 'https://images.unsplash.com/photo-1582215284457-3f338d22e032?q=80&w=800&auto=format&fit=crop' },
    { title: 'Aerospace Fitting F', desc: 'Ultra-lightweight alloy', img: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <div>
      <section className="page-header-premium">
        <div className="hero-glow"></div>
        <Container className="position-relative" style={{ zIndex: 2 }}>
          <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <div className="premium-badge mb-3">Our Portfolio</div>
            <h1 className="display-4 fw-bolder text-white mb-3">Engineered <span className="text-gradient-accent">Products</span></h1>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Explore our comprehensive range of high-performance mechanical components designed for extreme environments.
            </p>
          </motion.div>
        </Container>
      </section>
      
      <section className="py-5" style={{ marginTop: '80px', marginBottom: '80px' }}>
        <Container>
          <Row className="g-5">
            {products.map((p, idx) => (
              <Col lg={4} md={6} key={idx}>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="h-100"
                >
                  <Card className="premium-card p-2 border-0">
                    <div style={{ overflow: 'hidden', borderRadius: '16px' }}>
                      <Card.Img variant="top" src={p.img} style={{ height: '240px', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="product-img" />
                    </div>
                    <Card.Body className="text-center mt-3">
                      <Card.Title className="fw-bolder fs-4 mb-2" style={{ color: 'var(--premium-dark)' }}>{p.title}</Card.Title>
                      <Card.Text className="text-muted fw-medium">{p.desc}</Card.Text>
                      <button className="btn btn-outline-premium mt-3 text-dark border-dark w-100" style={{ backdropFilter: 'none' }}>View Details</button>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <style>{`
        .product-img:hover { transform: scale(1.1); }
      `}</style>
    </div>
  );
};

export default Products;
