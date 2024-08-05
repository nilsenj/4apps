import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import App1 from "./apps/App1/App1.jsx";
import App2 from "./apps/App2/App2.jsx";
import App3 from "./apps/App3/App3.jsx";
import App4 from "./apps/App4/App4.jsx";
import BaseNav from "./Components/BaseNav.jsx";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={ <BaseNav/> }/>
                    <Route path="/app1" element={ <App1/> }/>
                    <Route path="/app2" element={ <App2/> }/>
                    <Route path="/app3" element={ <App3/> }/>
                    <Route path="/app4" element={ <App4/> }/>
                    {/* ... add routes for all lessons */}
                    <Route path="/" exact element={() => <h1>Home Page</h1>}/>
                </Routes>
            </Router>
        </>
    )
}

export default App
