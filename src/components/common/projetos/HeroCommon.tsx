const HeroCommon = ({
    title = "Projetos",
    desc = "Faiz Produções",
  }) => {
    return (
      <section className="bg-faiz-100 relative">
        <div className="row relative">
          <div className="container">
            <h1 className="font-bold text-white text-xl sm:text-2xl lg:text-3xl">
              {title}
            </h1>
            <p className="text-lg text-zinc-100 font-medium">{desc}</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroCommon;