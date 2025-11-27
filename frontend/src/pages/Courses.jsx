import { useState, useEffect } from 'react';
import CourseCard from '../components/CourseCard';
import './Courses.css';

function Courses() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8000/api/courses/')
            .then(response => response.json())
            .then(data => {
                setCourses(data.modules);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching courses:', error);
                setLoading(false);
            });
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
        <div className="courses-page">
            <section className="section section-white">
                <div className="container">
                    <div className="courses-header">
                        <h1 className="page-title">Our Courses</h1>
                        <p className="page-subtitle">
                            Comprehensive mobile repairing training from basic to advanced levels.
                            Choose the module that fits your learning goals.
                        </p>
                    </div>

                    <div className="courses-grid">
                        {courses.map((course, index) => (
                            <div
                                key={course.id}
                                className={`animate-fade-in animate-delay-${(index % 5) + 1}`}
                            >
                                <CourseCard
                                    id={course.id}
                                    name={course.name}
                                    description={course.description}
                                    duration={course.duration}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Courses;
