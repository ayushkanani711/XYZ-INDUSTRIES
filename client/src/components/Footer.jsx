import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const subscribe = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email");
      return;
    }
    try {
      const response = await fetch("http://localhost:8000/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert("Email saved successfully");
      } else {
        alert("Error saving email");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div>
      <div className="footer">
        <div className="footer-column">
          <h1>
            XYZ <span>INDUSTRIES</span>
          </h1>
          <div className="footer-text">
            XYZ Industries: Where real estate dreams meet seamless transactions,
            transforming aspirations into achievements.
          </div>
          <button className="explore-button">
            Explore <span className="arrow">→</span>
          </button>
        </div>

        <div className="s2">
          <div className="column1">
            <h3 className="hadding1">Quick Links</h3>
            <ul className="ul1">
              <li>About Us</li>
              <li>Blog</li>
              <li>Testimonials</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Site Map</li>
            </ul>
          </div>

          <div className="column2">
            <h3 className="hadding2">Customer Support</h3>
            <ul className="ul2">
              <li>Feedback</li>
              <li>Report a Problem</li>
              <li>Request a Call Back</li>
            </ul>
          </div>

          <div className="column3">
            <div className="hadding3-bar">
              <h3 className="hadding3">Subscribe Us</h3>
              <p className="hadding3-text">
                Subscribe to our weekly newsletter
              </p>
            </div>
            <br />
            <input
              type="email"
              placeholder="Email Id"
              value={email}
              typeof="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <button onClick={subscribe}>Subscribe</button>
          </div>
        </div>

        <div className="s3">
          <div className="line"></div>
          <div className="section">
            <div className="left">
              <FontAwesomeIcon icon={faYoutube} className="youtube-icon" />
              <FontAwesomeIcon icon={faTwitter} className="twitter-icon" />
              <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
              <FontAwesomeIcon icon={faFacebook} className="facebook-icon" />
            </div>
            <div className="right">
              Terms | Privacy <span>@2024 XYZ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
