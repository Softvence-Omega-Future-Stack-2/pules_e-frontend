import React from 'react';


const DailyStrength: React.FC = () => {
  return (
    <section className="bg-[#0a192f] py-24 px-6 flex flex-col items-center">

      <h2 className="text-[#C9A96E] text-2xl md:text-3xl font-bold mb-8 text-center">
        Daily Strength from Scripture (Optional)
      </h2>

      {/* Border Box */}
      <div className="w-full max-w-4xl border border-[#C9A96E4D] rounded-2xl p-8">

        {/* Quote Image Box */}
        <div
          className="bg-cover bg-center rounded-xl p-10 md:p-16 text-center"
          style={{ backgroundImage: `url('/img/strengthImg.svg')` }}
        >
          <p className="text-white text-xl md:text-3xl  italic leading-relaxed md:leading-10">
            "Be strong and courageous. Do not be afraid; do not be discouraged,
            for the Lord your God will be with you wherever you go."
          </p>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <cite className="text-[#C9A96E] font-semibold text-lg md:text-xl not-italic block">
            — Joshua 1:9
          </cite>

          <span className="text-[#F8F1E9B2] text-sm font-normal  tracking-widest mt-2 block">
            Powered by YouVersion
          </span>
        </div>

      </div>

    </section>
  );
};

export default DailyStrength;