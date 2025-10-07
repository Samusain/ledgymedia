import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiSend, FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm('service_kfh724j', 'template_fqc7bba', form.current, {
        publicKey: '6JehNra3FZoYoSEmU',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSubmitting(false);
          setIsSuccess(true);
          form.current.reset();
          
          // Hide success message after 5 seconds
          setTimeout(() => {
            setIsSuccess(false);
          }, 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsSubmitting(false);
        },
      );
  };

  return (
    <div className="contact-page">
      <div className="container">
        {/* Back to Home Button */}
        <div className="back-home-container">
          <Link to="/" className="back-home-btn">
            <FiArrowLeft />
            
          </Link>
        </div>

        <div className="contact-container">
          <div className="contact-header">
            <h1>Get In Touch</h1>
            <p className="contact-subtitle">
              Ready to bring your creative vision to life? Let's start a conversation about your project.
            </p>
          </div>

          {isSuccess && (
            <div className="success-message">
              <FiSend />
              <span>Message sent successfully! We'll get back to you soon.</span>
            </div>
          )}

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <div className="input-wrapper">
                <FiUser className="input-icon" />
                <input 
                  type="text" 
                  name="name" 
                  className="blurred-input"
                  placeholder="Your Full Name"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="input-wrapper">
                <FiMail className="input-icon" />
                <input 
                  type="email" 
                  name="email" 
                  className="blurred-input"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="input-wrapper">
                <FiMessageSquare className="input-icon textarea-icon" />
                <textarea 
                  name="message" 
                  className="blurred-input"
                  placeholder="Tell us about your project, timeline, and any specific requirements..."
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="spinner"></div>
                  Sending...
                </>
              ) : (
                <>
                  <FiSend />
                  Send Message
                </>
              )}
            </button>
          </form>

          {/* Additional Contact Info */}
          <div className="contact-info">
            <div className="contact-method">
              <h3>Email Us</h3>
              <p>hello@ledgymedia.com</p>
            </div>
            <div className="contact-method">
              <h3>Business Hours</h3>
              <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
            </div>
            <div className="contact-method">
              <h3>Response Time</h3>
              <p>Within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;