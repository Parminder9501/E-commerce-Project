import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import icons
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" style={{ marginTop: "5%" }}>
      <div className="container" >
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className='footer-section'>
              <h2 className="footer-title">Find Us</h2>
              <p ><FaMapMarkerAlt style={{ marginRight: '8px' }} /> # 230 A, Sector 30 A, CHANDIGARH</p>
              <div className="footer-location">
                <iframe
                  title="Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.0923557596984!2d76.8034823151311!3d30.719870693615835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feefa7429a409%3A0xddadb8c0614a8296!2sSector%2030A%2C%20Sector%2030%2C%20Chandigarh!5e0!3m2!1sen!2sin!4v1694625415503!5m2!1sen!2sin"
                  style={{ border: "none", width: "60%", height: "100px", borderRadius: "8px" }}
                ></iframe>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className='footer-section'>
              <h2 className="footer-title">Call Us</h2>
              <p><FaPhoneAlt style={{ marginRight: '8px' }} /> +91 9501324647</p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className='footer-section'>
              <h2 className="footer-title">Mail Us</h2>
              <p><FaEnvelope style={{ marginRight: '8px' }} /><a href="/about" style={{ color: "white", textDecoration: "none" }}>parminder1014@gmail.com</a></p>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-secondary" style={{ borderTop: "1px solid #444", paddingTop: "20px" }}>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className='footer-section'>
              <h2 className="footer-title">Follow Us</h2>
              <p>Stay connected through our social platforms for updates and news.</p>
              <div className="social-icons">
                <a href="#" style={{ margin: " 8px", color: "#fff" }}><FaFacebook size={24} /></a>
                <a href="#" style={{ margin: " 8px", color: "#fff" }}><FaTwitter size={24} /></a>
                <a href="#" style={{ margin: " 8px", color: "#fff" }}><FaInstagram size={24} /></a>
                <a href="#" style={{ margin: " 8px", color: "#fff" }}><FaLinkedin size={24} /></a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className='footer-section'>
              <h2 className="footer-title">Useful Links</h2>
              <div className="footer-links d-flex">
                <ul className="list-unstyled me-3">
                  <li><a href="/" >Home</a></li>
                  <li><a href="/services" >Services</a></li>
                  <li><a href="/contact" >Contact</a></li>
                  <li><a href="/contact-us" >Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className='footer-section'>
              <h2 className="footer-title">Subscribe</h2>
              <p>Don't miss updates - subscribe to our newsletter.</p>

              <input type="email" placeholder="Enter your email" className="footer-input" style={{ width: "100%", padding: "8px", marginBottom: "10px", borderRadius: "4px", border: "1px solid #555", backgroundColor: "#333" }} />

              <button className="btn btn-warning subscribe-btn" style={{ width: "100%", padding: "8px", border: "none", borderRadius: "4px", backgroundColor: "#28a745" }}>
                Subscribe
              </button>
            </div>

          </div>
        </div>
      </div>

      <div className="container footer-bottom" style={{ textAlign: "center", marginTop: "50px" }}>
        <p>&copy; 2025, All Rights Reserved <span style={{ fontWeight: "normal", fontStyle: "italic" }}>"Parminder Singh"</span></p>
      </div>
    </footer>


  );
};

export default Footer;