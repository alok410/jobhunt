// Footer.js
import React from 'react';
import './Footer.css'; // Import the CSS file for styling

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Your Company</p>
        <div className="social-media">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
