import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import {Designs} from "./components/Designs";
// import { Achievements } from "./components/Achievements";
import { Contact } from "./components/Contact";

const App=()=>{
 return(
  <>
  <Header/>
  <Home/>
  <About/>
  <Experience/>
    <Projects/>
    <Designs/>
    {/* <Achievements/> */}
  <Contact/>
  </>
 )
}
export default App;