import './ContactStrip.css';

function ContactStrip() {
    return (
        <section className="contact-strip">
            <div className="container">
                <div className="contact-strip-content">
                    <h3 className="contact-strip-title">Ready to Start Your Journey?</h3>
                    <div className="contact-info">
                        <div className="contact-item">
                            <span className="contact-label">Phone:</span>
                            <a href="tel:+919876543210" className="contact-link">+91 98765 43210</a>
                            <span className="contact-separator">|</span>
                            <a href="tel:+919876543211" className="contact-link">+91 98765 43211</a>
                        </div>
                        <div className="contact-item">
                            <span className="contact-label">Email:</span>
                            <a href="mailto:info@shanusirclasses.com" className="contact-link">
                                info@shanusirclasses.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactStrip;
