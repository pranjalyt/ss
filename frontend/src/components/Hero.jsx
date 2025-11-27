import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
    return (
        <section className="hero grid-bg">
            <div className="hero-overlay"></div>
            <div className="container">
                <div className="hero-content animate-fade-in">
                    <h1 className="hero-title">
                        India's No. 1 Mobile Repairing Training Institute
                    </h1>
                    <p className="hero-subtitle">
                        Master the art of mobile repairing with 15 years of excellence.
                        From basic repairs to advanced chip-level training, we transform beginners into professionals.
                    </p>
                    <div className="hero-cta">
                        <Link to="/courses" className="btn btn-primary">
                            Explore Courses
                        </Link>
                        <Link to="/contact" className="btn btn-secondary">
                            Book Demo Class
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
