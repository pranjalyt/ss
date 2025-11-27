import { useState } from 'react';
import { API_ENDPOINTS } from '../config/api';
import './ContactForm.css';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [status, setStatus] = useState({
        type: '', // 'success', 'error', or ''
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await fetch(API_ENDPOINTS.contact, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({
                    type: 'success',
                    message: data.message
                });
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            } else {
                setStatus({
                    type: 'error',
                    message: data.detail || 'Failed to submit form. Please try again.'
                });
            }
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'Network error. Please check your connection and try again.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name" className="form-label">Name *</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    minLength={2}
                    maxLength={100}
                />
            </div>

            <div className="form-group">
                <label htmlFor="email" className="form-label">Email *</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone *</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-input"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    minLength={10}
                    maxLength={15}
                />
            </div>

            <div className="form-group">
                <label htmlFor="message" className="form-label">Message *</label>
                <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    minLength={10}
                    maxLength={1000}
                />
            </div>

            {status.message && (
                <div className={`form-status ${status.type}`}>
                    {status.message}
                </div>
            )}

            <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
            >
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    );
}

export default ContactForm;
