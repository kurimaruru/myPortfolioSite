import {Skills} from "../components/skills";
import Asp from "../image/asp.png";
import Rct from "../image/react.png";
import Spring from "../image/spring.png";
import Laravel from "../image/laravel.png";
import Oracle from "../image/oracle.png";
import Git from "../image/git.png";
import Html from "../image/html.png";
import Css from "../image/css.png";
import React, { useRef } from 'react';
import { useIsVisible } from 'react-is-visible';


export const MySkills = () =>{
  const nodeRef = useRef();
  const isVisible = useIsVisible(nodeRef);
  return(
    <div className="pt-5 text-center md:pt-20" ref={nodeRef} id="Skill">
      <h1 className={isVisible?"font-bold text-7xl animate-slideIn1":"text-white"}>My Skills</h1>
        <div className={isVisible?"flex flex-wrap items-center justify-center w-full px-4 py-4":"hidden"}>
        {/* percent,title,wors,experience,language */}
          <Skills  circle={"c100 p80 small"} png={Asp} percent={80} vsbl={isVisible}
           title={"ASP.NET MVC"} wors={"work"} experience={"6month"} language={"Visual Basic"} anima={"animate-slideIn1"}/>
          <Skills circle={"c100 p55 small"} png={Rct} percent={55} vsbl={isVisible}
          title={"React"} wors={"study"} experience={"2month"} language={"JavaScript"}  anima={"animate-slideIn2"}/>
          <Skills circle={"c100 p65 small"} png={Spring} percent={65} vsbl={isVisible}
          title={"Spring Boot"} wors={"work"} experience={"3month"} language={"Java"}  anima={"animate-slideIn3"}/>
          <Skills circle={"c100 p70 small"} png={Laravel} percent={70} vsbl={isVisible}
          title={"Laravel"} wors={"study"} experience={"4month"} language={"PHP"}  anima={"animate-slideIn4"}/>
          <Skills circle={"c100 p85 small"} png={Oracle} percent={70} vsbl={isVisible}
          title={"Oracle"} wors={"work"} experience={"10month"} language={"Oracle SQL"}  anima={"animate-slideIn5"}/>
          <Skills circle={"c100 p70 small"} png={Git} percent={65} vsbl={isVisible}
          title={"GitHub"} wors={"work"} experience={"6month"} language={"Git"}  anima={"animate-slideIn6"}/>
          <Skills circle={"c100 p70 small"} png={Html} percent={70} vsbl={isVisible}
          title={"HTML5"} wors={"work"} experience={"9month"} language={"HTML"}  anima={"animate-slideIn7"}/>
          <Skills circle={"c100 p70 small"} png={Css} percent={55} vsbl={isVisible}
          title={"CSS3"} wors={"both"} experience={"9month"} language={"CSS"}  anima={"animate-slideIn8"}/>
        </div>
    </div>

  )
}
