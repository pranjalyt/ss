import './About.css';

function About() {
    const features = [
        {
            title: 'ISO Certified',
            description: 'Recognized certification that adds credibility to your professional profile'
        },
        {
            title: 'Free Demo Class',
            description: 'Experience our teaching methodology and facilities before enrolling'
        },
        {
            title: 'Lifetime Support',
            description: 'Continued guidance, updates, and support even after course completion'
        },
        {
            title: 'Job Assistance',
            description: 'Placement support and industry connections to launch your career'
        },
        {
            title: 'Hands-On Training',
            description: 'Work with real devices using professional-grade tools and equipment'
        },
        {
            title: 'Expert Faculty',
            description: '15+ years of industry experience with proven teaching excellence'
        }
    ];

    return (
        <div className="about-page">
            <section className="section section-white">
                <div className="container">
                    <div className="about-header">
                        <h1 className="page-title">About Shanu Sir Classes</h1>
                        <p className="page-subtitle">
                            India's No. 1 Mobile Repairing Training Institute
                        </p>
                    </div>

                    <div className="about-content">
                        <div className="about-section">
                            <h2 className="about-section-title">Our Story</h2>
                            <p className="about-text">
                                Established over 15 years ago, Shanu Sir Classes has been at the forefront of
                                mobile repairing education in India. What started as a small training center
                                has grown into the nation's most trusted institute for mobile repair professionals.
                            </p>
                            <p className="about-text">
                                With thousands of successful students now running their own repair businesses
                                or working at leading service centers, our legacy speaks for itself.
                            </p>
                        </div>

                        <div className="about-section">
                            <h2 className="about-section-title">Our Mission</h2>
                            <p className="about-text">
                                To empower individuals with world-class mobile repairing skills through practical,
                                hands-on training. We believe in transforming beginners into confident professionals
                                who can tackle any mobile repair challenge.
                            </p>
                        </div>

                        <div className="about-section">
                            <h2 className="about-section-title">Why We're Trusted</h2>
                            <p className="about-text">
                                Our commitment to excellence, state-of-the-art facilities, industry-standard tools,
                                and expert guidance have made us the preferred choice for aspiring mobile repair
                                technicians across India. We don't just teach theory – we create job-ready professionals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-black grid-bg">
                <div className="container">
                    <h2 className="features-title">What Makes Us the Best</h2>
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`feature-card animate-fade-in animate-delay-${(index % 5) + 1}`}
                            >
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
