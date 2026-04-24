import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, Send } from 'lucide-react';
import { useContactModal } from '../context/ContactContext';
import styles from './ContactModal.module.css';
import MagneticButton from './MagneticButton';

export default function ContactModal() {
  const { t } = useTranslation('contact');
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
    if (!formData.name.trim()) newErrors.name = t('errors.nameRequired');

    if (!formData.email.trim()) {
      newErrors.email = t('errors.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('errors.emailInvalid');
    }

    if (!formData.company.trim()) newErrors.company = t('errors.companyRequired');
    
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
        <button className={styles.closeBtn} onClick={closeContactModal} aria-label={t('closeAria')}>
          <X size={24} />
        </button>

        {!isSuccess ? (
          <>
            <h2 className={styles.title}>{t('title')}</h2>
            <p className={styles.subtitle}>
              {t('subtitleLead')}<br/>
              <span style={{ display: 'inline-block', marginTop: '16px', fontSize: '1.2rem' }}>
                <a href="mailto:ina.nistoras@magnaqore.io" style={{ color: 'var(--accent-gold)', textDecoration: 'none', fontWeight: 'bold' }}>ina.nistoras@magnaqore.io</a>
              </span>
            </p>

            {/* <form onSubmit={handleSubmit} className={styles.form} noValidate>
              <div className={styles.inputGroup}>
                <label htmlFor="name">{t('form.nameLabel')}</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('form.namePlaceholder')}
                  className={errors.name ? styles.errorInput : ''}
                />
                {errors.name && <span className={styles.errorText}>{errors.name}</span>}
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="email">{t('form.emailLabel')}</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('form.emailPlaceholder')}
                  className={errors.email ? styles.errorInput : ''}
                />
                {errors.email && <span className={styles.errorText}>{errors.email}</span>}
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="company">{t('form.companyLabel')}</label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder={t('form.companyPlaceholder')}
                  className={errors.company ? styles.errorInput : ''}
                />
                {errors.company && <span className={styles.errorText}>{errors.company}</span>}
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="message">{t('form.messageLabel')}</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('form.messagePlaceholder')}
                ></textarea>
              </div>

              <MagneticButton>
                <button type="submit" className={`btn-primary ${styles.submitBtn}`} disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className={styles.loader}></span>
                  ) : (
                    <>
                      {t('form.submit')}
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
            <h3>{t('successTitle')}</h3>
            <p>{t('successBody')}</p>
          </div>
        )}
      </div>
    </div>
  );
}
