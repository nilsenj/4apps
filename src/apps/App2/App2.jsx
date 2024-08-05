import './App2.css';
import Navbar from "./components/Navbar/Navbar.jsx";
import Header from "./container/Header/Header.jsx";
import AboutUs from "./container/AboutUs/AboutUs.jsx";
import SpecialMenu from "./container/Menu/SpecialMenu.jsx";
import Chef from "./container/Chef/Chef.jsx";
import Intro from "./container/Intro/Intro.jsx";
import Laurels from "./container/Laurels/Laurels.jsx";
import Gallery from "./container/Gallery/Gallery.jsx";
import FindUs from "./container/Findus/FindUs.jsx";
import Footer from "./container/Footer/Footer.jsx";

const App = () => (
    <div>
        <Navbar/>
        <Header/>
        <AboutUs/>
        <SpecialMenu/>
        <Chef/>
        <Intro/>
        <Laurels/>
        <Gallery/>
        <FindUs/>
        <Footer/>
    </div>
);

export default App;
