import React, { useEffect, useState } from 'react';
import { X, Send } from 'lucide-react';
import { useContactModal } from '../context/ContactContext';
import styles from './ContactModal.module.css';
import MagneticButton from './MagneticButton';

export default function ContactModal() {
  const { isContactModalOpen, closeContactModal } = useContactModal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (isContactModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // Reset state after animation completes
      const timer = setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: '', email: '', company: '', message: '' });
        setErrors({});
      }, 300);
      return () => clearTimeout(timer);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isContactModalOpen]);

  if (!isContactModalOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    // Clear error for the field when user types
    if (errors[id]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[id];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your full name';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your work email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.company.trim()) newErrors.company = 'Please enter your company/organization';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  // To prevent TS unused vars errors while form is commented out:
  void Send;
  void MagneticButton;
  void isSubmitting;
  void handleChange;
  void handleSubmit;

  return (
    <div className={styles.overlay} onClick={closeContactModal}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={closeContactModal} aria-label="Close modal">
          <X size={24} />
        </button>

        {!isSuccess ? (
          <>
            <h2 className={styles.title}>Partner With Us</h2>
            <p className={styles.subtitle}>
              Reach out to us directly via email at<br/>
              <span style={{ display: 'inline-block', marginTop: '16px', fontSize: '1.2rem' }}>
                <a href="mailto:ina.nistoras@magnaqore.io" style={{ color: 'var(--accent-gold)', textDecoration: 'none', fontWeight: 'bold' }}>ina.nistoras@magnaqore.io</a>
              </span>
            </p>

            {/* <form onSubmit={handleSubmit} className={styles.form} noValidate>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe" 
                  className={errors.name ? styles.errorInput : ''}
                />
                {errors.name && <span className={styles.errorText}>{errors.name}</span>}
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="email">Work Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com" 
                  className={errors.email ? styles.errorInput : ''}
                />
                {errors.email && <span className={styles.errorText}>{errors.email}</span>}
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="company">Company / Organization</label>
                <input 
                  type="text" 
                  id="company" 
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Ltd" 
                  className={errors.company ? styles.errorInput : ''}
                />
                {errors.company && <span className={styles.errorText}>{errors.company}</span>}
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="message">Message (Optional)</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <MagneticButton>
                <button type="submit" className={`btn-primary ${styles.submitBtn}`} disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className={styles.loader}></span>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} style={{ marginLeft: '8px' }} />
                    </>
                  )}
                </button>
              </MagneticButton>
            </form> */}
          </>
        ) : (
          <div className={styles.successMessage}>
            <div className={styles.successIcon}>✓</div>
            <h3>Message Sent!</h3>
            <p>Thank you for reaching out. We will be in touch with you shortly to discuss your AI transformation.</p>
          </div>
        )}
      </div>
    </div>
  );
}
