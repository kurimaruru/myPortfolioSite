import Snowfall from "react-snowfall";
import { Cube } from "./cube";

export const Header = () => {
  return (
    <div
      className="relative z-0 w-full h-screen text-center background-opacity-70"
      id="Home"
    >
      <div className="w-full pt-48 md:pt-52">
        <div className="absolute top-auto z-30 w-full">
        <div className="flex flex-wrap justify-between m-auto md:w-2/3">
          <Cube cube={1} slide={1}></Cube>
          <Cube cube={2} slide={8}></Cube>
        </div>
        <h1
          style={{ fontFamily: "Patua One" }}
          className="m-auto font-bold text-7xl md:text-9xl"
        >
          Kurimaru
        </h1>
        <h3 className="text-3xl font-bold md:text-5xl">Engineering Site</h3>
        <div className="flex flex-wrap justify-between m-auto md:w-2/3">
          <Cube cube={2} slide={8}></Cube>
          <Cube cube={1} slide={1}></Cube>
        </div>
        </div>
      </div>

      {/* react snowfall */}
      <div className="z-20">
        <Snowfall color="#67e8f9" snowflakeCount={400}></Snowfall>
      </div>
    </div>
  );
};
