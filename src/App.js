import React, { useState } from 'react';

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
  },
  // Navigation Styles
  nav: {
    borderBottom: '1px solid #e5e7eb',
    padding: '1rem 0',
  },
  navContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
  },
  navButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#f1f5f9',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },

  // Main Section Styles
  mainContent: {
    maxWidth: '1200px',
    margin: '2rem auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem',
  },
  leftColumn: {
    fontSize: '1.125rem',
    color: '#374151',
  },
  heading: {
    fontSize: '3rem',
    fontWeight: 'bold',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.125rem',
  },
  input: {
    width: '100%',
    padding: '1rem',
    fontSize: '1rem',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
  },
  button: {
    backgroundColor: '#22c55e',
    color: 'white',
    padding: '1rem',
    width: '100%',
    borderRadius: '8px',
    fontSize: '1.125rem',
    cursor: 'pointer',
  },

  // Application Section Styles
  applicationSection: {
    backgroundColor: '#f8f9fa',
    padding: '4rem 1rem',
    marginTop: '4rem',
  },
  applicationContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '3rem',
    alignItems: 'center',
  },
  phoneImage: {
    width: '100%',
    maxWidth: '400px',
    borderRadius: '12px',
    margin: '0 auto',
  },
  requirementsList: {
    listStyle: 'none',
    padding: 0,
    margin: '2rem 0',
  },
  requirementItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
    fontSize: '1.1rem',
  },
  checkIcon: {
    color: '#22c55e',
    marginRight: '1rem',
  },
  downloadButton: {
    backgroundColor: '#15803d',
    color: 'white',
    padding: '0.75rem 1.5rem',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '1rem',
  },

  // Stats Section Styles
  statsSection: {
    padding: '4rem 1rem',
    textAlign: 'center',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '2rem auto',
  },
  statCard: {
    backgroundColor: '#f0fdf4',
    padding: '2rem',
    borderRadius: '8px',
    textAlign: 'left',
  },
  statIcon: {
    backgroundColor: '#22c55e',
    color: 'white',
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem',
  },

  // Testimonial Section Styles
  testimonialSection: {
    padding: '4rem 1rem',
    backgroundColor: '#fff',
  },
  testimonialGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '2rem auto',
  },
  testimonialCard: {
    padding: '2rem',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    backgroundColor: 'white',
  },
  starRating: {
    color: '#22c55e',
    marginTop: '1rem',
  },

  // News Section Styles
  newsSection: {
    padding: '4rem 1rem',
    backgroundColor: '#f8f9fa',
  },
  newsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '2rem auto',
    alignItems: 'center',
  },
  newsLogo: {
    width: '100%',
    maxWidth: '150px',
    opacity: 0.7,
  },
};

const LoanLandingPage = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    monthlySales: '',
    phoneNumber: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContent}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>shara</div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button style={styles.navButton}>About</button>
            <button style={styles.navButton}>Loan Calculator</button>
            <button style={styles.navButton}>Nigeria</button>
            <button style={styles.navButton}>Download Shara</button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main style={styles.mainContent}>
        <div style={styles.leftColumn}>
          <h1 style={styles.heading}>
            Get up to ₦10M
            <div style={{ width: '100%', height: '3px', backgroundColor: '#22c55e' }}></div>
            in SME loans
          </h1>
          <ul>
            <li style={styles.listItem}>
              <span>•</span> No collateral needed
            </li>
            <li style={styles.listItem}>
              <span>•</span> Competitive rates
            </li>
          </ul>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="businessName"
              placeholder="Business Name"
              value={formData.businessName}
              onChange={handleChange}
              style={styles.input}
            />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <input
                type="text"
                name="monthlySales"
                placeholder="Monthly Sales"
                value={formData.monthlySales}
                onChange={handleChange}
                style={styles.input}
              />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
            <button type="submit" style={styles.button}>
              Get Loan Estimate for free!
            </button>
          </form>
        </div>

        <div>
          <img
            src="/api/placeholder/600/400"
            alt="Shara representative"
            style={{ width: '100%', borderRadius: '12px' }}
          />
        </div>
      </main>

      {/* Quick Application Section */}
      <section style={styles.applicationSection}>
        <div style={styles.applicationContainer}>
          <div>
            <img
              src="/api/placeholder/400/800"
              alt="Shara app interface"
              style={styles.phoneImage}
            />
          </div>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>
              Quick and easy application process
            </h2>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Requirements:</h3>
            <ul style={styles.requirementsList}>
              <li style={styles.requirementItem}>
                <span style={styles.checkIcon}>✓</span> Based in Nigeria
              </li>
              <li style={styles.requirementItem}>
                <span style={styles.checkIcon}>✓</span> Sole trader, partnership, or limited company
              </li>
              <li style={styles.requirementItem}>
                <span style={styles.checkIcon}>✓</span> Basic information about your business
              </li>
              <li style={styles.requirementItem}>
                <span style={styles.checkIcon}>✓</span> Bank statement
              </li>
            </ul>
            <p style={{ marginBottom: '2rem', color: '#4b5563' }}>
              Download the app to get started today!
            </p>
            <button style={styles.downloadButton}>Download Shara</button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={styles.statsSection}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem' }}>
          Grow your business with Shara
        </h2>
        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={styles.statIcon}>₦</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Over ₦50BN Disbursed
            </h3>
            <p>Businesses use Shara loans to achieve their goals and thrive in a competitive market.</p>
          </div>

          <div style={styles.statCard}>
            <div style={styles.statIcon}>📈</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              100k Loans Taken
            </h3>
            <p>Shara loans fuel growth across several business sectors.</p>
          </div>

          <div style={styles.statCard}>
            <div style={styles.statIcon}>👥</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              7,000+ Shara Businesses
            </h3>
            <p>Over 7000 business owners trust Shara to grow their business.</p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section style={styles.testimonialSection}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '1rem' }}>
            What Shara customers say
          </h2>
          <p style={{ textAlign: 'center', color: '#4b5563', marginBottom: '3rem' }}>
            Shara loans have transformed thousands of businesses across Nigeria
          </p>
          <div style={styles.testimonialGrid}>
            <div style={styles.testimonialCard}>
              <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Abdullahi</h4>
              <p>Building Materials, Kano</p>
              <p>"I always use Shara because Shara's offer is better than other lenders..."</p>
              <div style={styles.starRating}>★★★★★</div>
            </div>

            <div style={styles.testimonialCard}>
              <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Korede</h4>
              <p>Processed Foods, Abeokuta</p>
              <p>"I prefer Shara to other financial institutions because Shara is reliable..."</p>
              <div style={styles.starRating}>★★★★★</div>
            </div>

            <div style={styles.testimonialCard}>
              <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Ola</h4>
              <p>Consumer Electronics, Lagos</p>
              <p>"Shara is perfect for my business because it ensures I always have the funds..."</p>
              <div style={styles.starRating}>★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section style={styles.newsSection}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem' }}>
          Shara in the news
        </h2>
        <div style={styles.newsGrid}>
          {['Vanguard', 'Nairametrics', 'BusinessDay', 'Ventures', 'Business Insider', 'TechCabal'].map((logo) => (
            <img
              key={logo}
              src="/api/placeholder/150/50"
              alt={`${logo} logo`}
              style={styles.newsLogo}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default LoanLandingPage;
