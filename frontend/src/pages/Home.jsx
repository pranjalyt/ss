import Hero from '../components/Hero';
import MentorIntro from '../components/MentorIntro';
import InstituteOverview from '../components/InstituteOverview';
import CourseHighlights from '../components/CourseHighlights';
import TestimonialSlider from '../components/TestimonialSlider';
import ContactStrip from '../components/ContactStrip';

function Home() {
    return (
        <div className="home-page">
            <Hero />
            <MentorIntro />
            <InstituteOverview />
            <CourseHighlights />
            <TestimonialSlider />
            <ContactStrip />
        </div>
    );
}

export default Home;
