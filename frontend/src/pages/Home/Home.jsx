import Hero from "../../components/hero/Hero";
import Brands from "../../components/brands/Brands";
import { FeaturedCollection } from "../../components/featuredCollection";

const Home = () => {
    return (
        <>
            <Hero />
            <Brands />
            <FeaturedCollection />
        </>
    );
};

export default Home;