
import { Link } from 'react-router-dom';
import '../styles/homeStyle.css';

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero">
        <h1>Welcome to the Medical AI Model</h1>
        <p>
          Harness the power of AI for <strong>early detection</strong> of medical conditions.  
          Our model supports <strong>Cancer</strong> and <strong>Tuberculosis detection</strong> with high accuracy.
        </p>
      </header>

      {/* Two-Column Section */}
      <section className="two-column-section">
        {/* Left - Why Choose Our Model */}
        <div className="left-section">
          <h2>🌟 Why Choose Our AI Model?</h2>
          <div className="feature">
            <h3>📈 High Accuracy</h3>
            <p>Our AI models provide <strong>95% accuracy</strong> in image-based disease detection.</p>
          </div>
          <div className="feature">
            <h3>⚡ Fast & Reliable</h3>
            <p>Get instant results with a <strong>secure and efficient</strong> system.</p>
          </div>
          <div className="feature">
            <h3>🩺 Healthcare Support</h3>
            <p>Designed to assist <strong>doctors and patients</strong> in early diagnosis.</p>
          </div>
        </div>

        {/* Right - How It Works */}
        <div className="right-section">
          <h2>🔍 How It Works?</h2>
          <p>1️⃣ <strong>Select a disease type</strong> (Cancer/Tuberculosis).</p>
          <p>2️⃣ <strong>Upload an image</strong> (X-ray, MRI, or medical scan).</p>
          <p>3️⃣ Our AI model <strong>analyzes</strong> and provides predictions.</p>
          <Link to="/option">
            <button className="secondary-btn">Start Now</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
