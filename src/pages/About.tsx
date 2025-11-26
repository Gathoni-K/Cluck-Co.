import Layout from "../components/layout/Layout";
import AboutHeader from "../components/sections/AboutHeader";
import Carousel from "../components/sections/CarouselDemo";
import AboutStory from "../components/sections/AboutStory";
import Mission from "../components/sections/Mission";
import Values from "../components/sections/Values";

const About = () => {
    return (
        <Layout>
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                {/* content of about page starts here */}
                    <AboutHeader />
                    <Carousel />
                    <AboutStory />

                {/* last section of our about page, these two should lie side by side hence why they are
                enclosed in a div  */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-8">
                        <Mission />
                        <Values />
                    </div>
            </div>
        </Layout>
    )
    }

export default About