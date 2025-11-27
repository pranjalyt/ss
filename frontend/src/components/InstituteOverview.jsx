import './InstituteOverview.css';

function InstituteOverview() {
    return (
        <section className="section section-black grid-bg">
            <div className="container">
                <div className="institute-overview">
                    <h2 className="overview-title animate-fade-in">
                        15 Years of Excellence in Mobile Repairing Education
                    </h2>
                    <div className="overview-grid">
                        <div className="overview-item animate-fade-in animate-delay-1">
                            <h3 className="overview-number">15+</h3>
                            <p className="overview-label">Years Experience</p>
                        </div>
                        <div className="overview-item animate-fade-in animate-delay-2">
                            <h3 className="overview-number">5000+</h3>
                            <p className="overview-label">Students Trained</p>
                        </div>
                        <div className="overview-item animate-fade-in animate-delay-3">
                            <h3 className="overview-number">100%</h3>
                            <p className="overview-label">Practical Training</p>
                        </div>
                        <div className="overview-item animate-fade-in animate-delay-4">
                            <h3 className="overview-number">4</h3>
                            <p className="overview-label">Specialized Modules</p>
                        </div>
                    </div>
                    <div className="overview-description animate-fade-in animate-delay-5">
                        <p>
                            From basic mobile repairs to advanced chip-level techniques, we offer comprehensive
                            training that covers every aspect of mobile repairing. Our state-of-the-art lab,
                            industry-standard tools, and expert guidance ensure you're job-ready from day one.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InstituteOverview;
