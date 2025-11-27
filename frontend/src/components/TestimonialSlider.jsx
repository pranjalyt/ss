import { useState, useEffect } from 'react';
import './TestimonialSlider.css';

function TestimonialSlider() {
    const testimonials = [
        {
            name: 'Rahul Sharma',
            course: 'Advanced Hardware Module',
            text: 'Best decision of my career! Shanu Sir\'s practical approach and industry insights helped me start my own mobile repair shop within 6 months of completing the course.'
        },
        {
            name: 'Priya Patel',
            course: 'Complete 4-Month Program',
            text: 'The hands-on training and lifetime support are incredible. I went from zero knowledge to confidently repairing all types of smartphones. Highly recommended!'
        },
        {
            name: 'Amit Kumar',
            course: 'eMMC & UFS Training',
            text: 'The chip-level training is unmatched. Shanu Sir\'s expertise in advanced repairs opened up high-paying opportunities for me. Worth every penny!'
        },
        {
            name: 'Sneha Reddy',
            course: 'Software Module',
            text: 'Excellent teaching methodology and state-of-the-art lab facilities. The job assistance program helped me land a position at a leading service center.'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <section className="section section-black">
            <div className="container">
                <div className="testimonial-slider">
                    <h2 className="slider-title">What Our Students Say</h2>
                    <div className="slider-container">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
                            >
                                <p className="testimonial-text">"{testimonial.text}"</p>
                                <div className="testimonial-author">
                                    <p className="author-name">{testimonial.name}</p>
                                    <p className="author-course">{testimonial.course}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="slider-dots">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestimonialSlider;
