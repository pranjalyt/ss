import ContactForm from '../components/ContactForm';
import './Contact.css';

function Contact() {
    return (
        <div className="contact-page">
            <section className="section section-white">
                <div className="container">
                    <div className="contact-header">
                        <h1 className="page-title">Contact Us</h1>
                        <p className="page-subtitle">
                            Get in touch with us for course inquiries, demo class bookings, or any questions.
                        </p>
                    </div>

                    <div className="contact-layout">
                        <div className="contact-info-section">
                            <div className="info-block">
                                <h3 className="info-title">Address</h3>
                                <p className="info-text">
                                    Shanu Sir Classes<br />
                                    123 Mobile Repair Street<br />
                                    Tech Hub, Delhi - 110001<br />
                                    India
                                </p>
                            </div>

                            <div className="info-block">
                                <h3 className="info-title">Phone</h3>
                                <p className="info-text">
                                    <a href="tel:+919876543210" className="info-link">+91 98765 43210</a><br />
                                    <a href="tel:+919876543211" className="info-link">+91 98765 43211</a>
                                </p>
                            </div>

                            <div className="info-block">
                                <h3 className="info-title">Email</h3>
                                <p className="info-text">
                                    <a href="mailto:info@shanusirclasses.com" className="info-link">
                                        info@shanusirclasses.com
                                    </a>
                                </p>
                            </div>

                            <div className="info-block">
                                <h3 className="info-title">Hours</h3>
                                <p className="info-text">
                                    Monday - Saturday: 9:00 AM - 6:00 PM<br />
                                    Sunday: Closed
                                </p>
                            </div>

                            <div className="map-placeholder">
                                <div className="map-content">
                                    <p>Google Maps Embed Placeholder</p>
                                    <p className="map-instruction">
                                        Replace this with your Google Maps embed code
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-section">
                            <h2 className="form-section-title">Send us a Message</h2>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
