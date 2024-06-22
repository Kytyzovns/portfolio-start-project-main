import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {About} from "./layout/sections/about/About";
import {Portfolio} from "./layout/sections/portfolio/Portfolio";
import {Footer} from "./layout/footer/Footer";



function App() {
    return (
        <div className="App">
                <Header/>
                <Main/>
                <About/>
                {/*<Portfolio/>*/}
                {/*<Footer/>*/}
        </div>
    );
}

export default App;
