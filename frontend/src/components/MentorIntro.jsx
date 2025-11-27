import './MentorIntro.css';

function MentorIntro() {
    return (
        <section className="section section-white">
            <div className="container">
                <div className="mentor-intro">
                    <div className="mentor-content animate-slide-left">
                        <h2 className="section-title">Meet Your Mentor</h2>
                        <h3 className="mentor-name">Shanu Sir</h3>
                        <p className="mentor-description">
                            With over 15 years of hands-on experience in mobile repairing and training,
                            Shanu Sir has transformed thousands of students into successful mobile repair professionals.
                            His expertise spans from basic repairs to advanced chip-level techniques, making him one of
                            India's most respected mobile repairing trainers.
                        </p>
                        <p className="mentor-description">
                            Known for his practical teaching approach and industry connections, Shanu Sir ensures
                            every student gains real-world skills and job-ready expertise. His commitment to student
                            success has made Shanu Sir Classes the premier destination for mobile repairing education.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MentorIntro;
