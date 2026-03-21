import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sitemap = () => {
  return (
    <section style={{ padding: '64px 0' }}>
      <Container>
        <h1 style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 700, color: '#4169E1', marginBottom: '24px' }}>
          Sitemap
        </h1>
        <p style={{ color: '#333', marginBottom: '18px' }}>
          Quick links to key pages.
        </p>
        <ul style={{ margin: 0, paddingLeft: '18px' }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/capabilities">Capabilities</Link>
          </li>
          <li>
            <Link to="/sister-concern">Sister Concern</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default Sitemap;

