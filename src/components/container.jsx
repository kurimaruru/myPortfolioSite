import {useState,useEffect,useCallback} from "react";
import {Nav} from '../components/nav';
import {Hero} from "../components/hero";
import {Footer} from "../components/footer";
import {Header} from "../components/header";
import {About} from "../components/about";
import { MySkills } from "./mySkills";

export const Container = () =>{
  const [bgColor,setBgColor] = useState(false);
  const [bgColor2,setBgColor2] = useState(false);
  let backColor = "";
  if(bgColor === false && bgColor2 === false){
    backColor = "bg-gradient-to-br from-red-300 via-red-400 to-red-500"
  }else if(bgColor === true&& bgColor2 === false){
    backColor="bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500"
  }else if(bgColor2 === true && bgColor === true){
    backColor = "bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500"
  }else if(bgColor2 === true  && bgColor === false){
    backColor = "bg-gradient-to-br from-lime-300 via-lime-400 to-lime-500"
  }


  const changeBgColor = useCallback(() =>{
    if(window.scrollY < 300 || window.scrollY > 1500){
      setBgColor(false);
    } else if(window.scrollY > 400 && window.scrollY < 700 ){
      setBgColor(true);
    }
  });

  const changeBgColor2 = useCallback(() =>{
    if(window.scrollY > 700 && window.scrollY < 1000){
      setBgColor2(false);
    } else if(window.scrollY > 1000 && window.scrollY < 1500){
      setBgColor2(true);
    }
  });


  useEffect(() => {
    window.addEventListener('scroll',changeBgColor);
    window.addEventListener('scroll',changeBgColor2);
    return () => {
      window.removeEventListener('scroll',changeBgColor());
      window.removeEventListener('scroll',changeBgColor2());
    }
  },[]);


  return (
    // <div className={backColor + "container"}>
    <div className="overflow-hidden ">
      <Nav></Nav>
      <Header></Header>
      <About></About>
      <MySkills></MySkills>
      <Hero></Hero>
      <Footer></Footer>
    </div>
  )
}
