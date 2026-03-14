

const PricingHero = () => {
  return (
      <section className="relative min-h-screen  w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/img/pricingHeroImg.svg')` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1550px] px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-[90px] font-lora  font-bold leading-tight lg:leading-[90px] mb-6">
         Become a Fight Sister
        </h1>
        
        <p className="text-secondaryColor text-xl md:text-2xl font-lora font-semibold leading-6 md:leading-8 mb-6  ">
       Choose the plan that fits your fight. All plans include compassionate AI coaching and our anti-scale philosophy.
        </p>

      

      </div>
    </section>
  );
};

export default PricingHero;