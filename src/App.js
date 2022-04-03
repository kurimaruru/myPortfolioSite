import './App.css';
import {Nav} from './components/nav';
import {Hero} from "./components/hero";
import {Footer} from "./components/footer";
import {Header} from "./components/header";
import {About} from "./components/about";
import { MySkills } from "./components/mySkills";

function App() {


  return (
    <div className="overflow-hidden ">
      <Nav></Nav>
      <Header></Header>
      <About></About>
      <MySkills></MySkills>
      <Hero></Hero>
      <Footer></Footer>
    </div>
  );
}

export default App;
