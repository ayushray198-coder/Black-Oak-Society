import Hero from "../../components/hero/Hero";
import Brands from "../../components/brands/Brands";
import { FeaturedCollection } from "../../components/featuredCollection";
import StorySection from "../../components/story/StorySection";

const Home = () => {
    return (
        <>
            <Hero />
            <Brands />
            <FeaturedCollection />
             <StorySection />
        </>
    );
};

export default Home;