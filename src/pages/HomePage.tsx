import HeroSection from "../components/sections/HeroSection";
import Layout from '../components/layout/Layout';
import Testimonials from "../components/sections/Testimonials";
import HomePageServices from "../components/sections/HomePageServices";
import WhyUs from "../components/sections/WhyUs";

const HomePage = () => {
    return (
        <div>
            <Layout>
                <HeroSection />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-8 ml-5 mr-5">
                    <HomePageServices />
                    <WhyUs />
                </div>
                
                

                <Testimonials />
            </Layout>
        </div>
    )
}

export default HomePage