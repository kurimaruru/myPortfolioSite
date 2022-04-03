
export const Skills = props => {
  const {circle,png,percent,vsbl,title,wors,experience,language,anima} = props;
  const visible = vsbl;
  return (
    // <div className="h-auto pt-5 md:m-1 xl:m-auto animate-slideIn4">
    <div className={visible?"h-auto pt-5 md:m-1 xl:m-auto"+" "+anima: "hidden opacity-0"}>
      <div className="w-64 bg-opacity-50 shadow-xl md:w-56 lg:w-80 h-78 card bg-slate-50">
        <div className="m-auto ">
          <div className={circle}>
            <span>
              <img src={png} alt="asp" className="w-20 h-20 pt-5 m-auto" />
            </span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <span className="font-bold text-center">
            <p>{percent + "%"}</p>
          </span>
        </div>
        <div className="pt-0 pb-5 pl-0 card-body">
          <div className="m-auto">
           <h3 className="card-title">{title}</h3>
          </div>
          <div className="flex">
            <span className="mt-2 ml-2 badge badge-primary badge-outline">work or study</span>
            <p className="pt-1 ml-3">{wors}</p>
          </div>
          <div className="flex">
            <span className="mt-2 ml-2 badge badge-primary badge-outline">experience</span>
            <p className="pt-1 ml-3">{experience}</p>
          </div>
          <div className="flex">
            <span className="mt-2 ml-2 badge badge-primary badge-outline">language</span>
            <p className="pt-1 ml-3">{language}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
