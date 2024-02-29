import React, { useState } from "react";

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
        <div>
          <h1>XYZ INDUSTRIES</h1>
          <div>
            XYZ Industries: Where real estate dreams meet seamless transactions,
            transforming aspirations into achievements.
          </div>
          <button>Expore</button>
        </div>

        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>About Us</li>
            <li>Blog</li>
            <li>Testimonials</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Site Map</li>
          </ul>
        </div>

        <div className="customer-support">
          <h3>Customer Support</h3>
          <ul>
            <li>Feedback</li>
            <li>Report a Problem</li>
            <li>Request a Call Back</li>
          </ul>
        </div>

        <div>
          Subscribe Us
          <br />
          Subscribe to our weekly newsletter
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
    </div>
  );
};

export default Footer;
