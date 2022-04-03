export const Hobbies = (props) => {
  const { png, title, detail } = props;
  const bgStyle ={
    backgroundImage:`url(${png})`,
    backgroundSize: `cover`,
  }

  return (
    <div>
        <div className="md:min-h-screen h-72 hero" style={bgStyle}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="flex-col hero-content">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-white md:text-7xl">About Me</h1>
              <h1 className="text-5xl font-bold text-white md:text-7xl">{title}</h1>
              <p className="py-6">{detail}</p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
    </div>
    // <div className="w-full min-h-screen shadow-xl card image-full">
    //   <figure>
    //     <img
    //       src={png}
    //       alt="png"
    //     />
    //   </figure>
    //   <div className="card-body">
    //     <h2 className="card-title">{title}</h2>
    //     <p>{detail}</p>
    //     <div className="justify-end card-actions">
    //       <button className="btn btn-primary">Buy Now</button>
    //     </div>
    //   </div>
    // </div>
  );
};
