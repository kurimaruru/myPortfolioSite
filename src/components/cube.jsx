// import { BsTriangle } from "react-icons/bs";
import { useIsVisible } from 'react-is-visible';
import React, { useRef } from 'react';


export const Cube = (props) => {
  const nodeRef = useRef();
  const isVisible = useIsVisible(nodeRef);
  const { cube, slide } = props;
  return (
    <div className={isVisible?"animate-slideIn" + slide : ""} ref={nodeRef}>
      <div className={"cube" + cube}>
        <div className="pt-3 text-center">
          {/* <BsTriangle className="w-full h-full m-auto"></BsTriangle> */}
          <p className="text-xl">1</p>
        </div>
        <div className="pt-3 text-center">
          {/* <BsTriangle className="w-full h-full m-auto"></BsTriangle> */}
          <p className="text-xl">2</p>
        </div>
        <div className="pt-3 text-center">
          {/* <BsTriangle className="w-full h-full m-auto"></BsTriangle> */}
          <p className="text-xl">3</p>
        </div>
        <div className="pt-3 text-center">
          {/* <BsTriangle className="w-full h-full m-auto"></BsTriangle> */}
          <p className="text-xl">4</p>
        </div>
        <div className="pt-3 text-center">
          {/* <BsTriangle className="w-full h-full m-auto"></BsTriangle> */}
          <p className="text-xl">5</p>
        </div>
        <div className="pt-3 text-center">
          {/* <BsTriangle className="w-full h-full m-auto"></BsTriangle> */}
          <p className="text-xl">6</p>
        </div>
      </div>
    </div>
  );
};
