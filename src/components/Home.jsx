import Navbar from "./Navbar";
import About from "./About";
import Main from "./Main";

function Home() {
    return (
        <div className="container">
        <Navbar />
        <Main />
        <div id="blank"></div>
        <About />
    </div>
    );
}

export default Home;