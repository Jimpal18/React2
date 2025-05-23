import React from 'react'
import './contact.css';

const ContactMap = () => {
  return (
    <div className="contact-container">
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form className='contact'>
        <label>Name</label>
        <input type="text" placeholder="Your Name" />
        <label>Email</label>
        <input type="email" placeholder="Your Email" />
        <label>Message</label>
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>

    <div className="contact-info">
      <p className="description">
        Get in touch with our team for inquiries about our products and services.
      </p>
      <h3>Get in touch</h3>
      <div className="icons">
        <img src="/images/call.png" alt='check'/>
        <img src="/images/email.png" alt='check'/>
        <img src="/images/mapp.png" alt='check'/>
      </div>
      <div className="map">
        <img
          src="/images/location.png"
          width="90%"
          alt="image"
          height="90%"
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        />
      </div>
    </div>
  </div>
  )
}

export default ContactMap
