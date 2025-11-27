import { Link } from 'react-router-dom';
import './CourseCard.css';

function CourseCard({ id, name, description, duration }) {
    return (
        <div className="course-card card">
            <h3 className="course-card-title">{name}</h3>
            {duration && <p className="course-duration">{duration}</p>}
            <p className="course-card-description">{description}</p>
            <Link to="/syllabus" className="btn btn-secondary course-card-btn">
                View Full Syllabus
            </Link>
        </div>
    );
}

export default CourseCard;
