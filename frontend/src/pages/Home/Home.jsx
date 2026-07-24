import Hero from "../../components/hero/Hero";
import Brands from "../../components/brands/Brands";
import { FeaturedCollection } from "../../components/featuredCollection";
import StorySection from "../../components/story/StorySection";
import EditorialSection from "../../components/editorial/EditorialSection";
import SignatureSection from "../../components/signature/SignatureSection";
import MemberExperienceSection from "../../components/MemberExperience/MemberExperienceSection";

const Home = () => {
    return (
        <>
            <Hero />
            <Brands />
            <FeaturedCollection />
             <StorySection />
             <EditorialSection />
             <SignatureSection />
             <MemberExperienceSection />
        </>
    );
};

export default Home;