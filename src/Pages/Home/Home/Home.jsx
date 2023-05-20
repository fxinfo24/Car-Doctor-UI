import NavBar from "../../Shared/NavBar/NavBar";
import About from "../About/About";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <About></About>
            <h2>This is home</h2>
        </div>
    );
};

export default Home;