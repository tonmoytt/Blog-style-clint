import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import NewsLetter from "../NewsLetter/NewsLetter";
import Post from "../Post/Post";

 

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Post></Post>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    );
};

export default Home;