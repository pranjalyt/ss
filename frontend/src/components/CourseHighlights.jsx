import './CourseHighlights.css';

function CourseHighlights() {
    const highlights = [
        {
            title: '4 Months Duration',
            description: 'Comprehensive training program covering all aspects of mobile repairing'
        },
        {
            title: 'Hands-On Training',
            description: 'Work with real devices and professional-grade tools from day one'
        },
        {
            title: 'Job Assistance',
            description: 'Placement support and industry connections to kickstart your career'
        },
        {
            title: 'Lifetime Support',
            description: 'Continued guidance and updates even after course completion'
        },
        {
            title: 'ISO Certified',
            description: 'Recognized certification that adds value to your professional profile'
        },
        {
            title: 'Free Demo Class',
            description: 'Experience our teaching methodology before enrolling'
        }
    ];

    return (
        <section className="section section-white">
            <div className="container">
                <div className="course-highlights">
                    <h2 className="highlights-title">Why Choose Our Training?</h2>
                    <div className="highlights-grid">
                        {highlights.map((highlight, index) => (
                            <div
                                key={index}
                                className={`highlight-card animate-fade-in animate-delay-${(index % 5) + 1}`}
                            >
                                <h3 className="highlight-title">{highlight.title}</h3>
                                <p className="highlight-description">{highlight.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CourseHighlights;
