import { useState, useEffect } from 'react';
import ExpandablePanel from '../components/ExpandablePanel';
import { coursesData } from '../data/coursesData';
import './Syllabus.css';

function Syllabus() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a brief loading state for smooth UX
        setTimeout(() => {
            setCourses(coursesData);
            setLoading(false);
        }, 100);
    }, []);

    if (loading) {
        return (
            <div className="section section-white">
                <div className="container">
                    <div className="loading-container">
                        <div className="loading-spinner"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="syllabus-page">
            <section className="section section-white">
                <div className="container">
                    <div className="syllabus-header">
                        <h1 className="page-title">Course Syllabus</h1>
                        <p className="page-subtitle">
                            Detailed curriculum for each module. Click on any module to view the complete syllabus.
                        </p>
                    </div>

                    <div className="syllabus-panels">
                        {courses.map((course, index) => (
                            <ExpandablePanel
                                key={course.id}
                                title={course.name}
                                defaultOpen={index === 0}
                            >
                                <div className="syllabus-content">
                                    <p className="module-description">{course.description}</p>
                                    {course.duration && (
                                        <p className="module-duration">
                                            <strong>Duration:</strong> {course.duration}
                                        </p>
                                    )}

                                    <div className="syllabus-sections">
                                        {course.syllabus.map((section, sectionIndex) => (
                                            <div key={sectionIndex} className="syllabus-section">
                                                <h4 className="section-title">{section.title}</h4>
                                                <ul className="topics-list">
                                                    {section.topics.map((topic, topicIndex) => (
                                                        <li key={topicIndex} className="topic-item">
                                                            {topic}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </ExpandablePanel>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Syllabus;
