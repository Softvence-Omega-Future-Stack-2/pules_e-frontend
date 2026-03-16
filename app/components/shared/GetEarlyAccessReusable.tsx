import Link from "next/link";


interface GetEarlyAccessProps {
  title: string;
  description: string;
  buttonText: string;
}

const GetEarlyAccessReusable = ({
  title,
  description,
  buttonText,
}: GetEarlyAccessProps) => {
  return (
    <section className="relative min-h-[60vh] w-full border-b-2 border-secondaryColor flex items-center justify-center py-20 px-6 overflow-hidden">
      
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/allBaner.svg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172bf2] via-[#0f172be6] to-[#7b3306e6]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full text-center text-white">
        <h2 className="text-4xl md:text-6xl font-lora font-bold leading-6 md:leading-[4rem] mb-4">
          {title}
        </h2>

        <p className="text-[#FFFFFFCC] text-xl font-lora md:text-2xl font-semibold leading-8 mb-8">
          {description}
        </p>
        
         <div>
           <Link href="/waitlist">
        <button className="w-full font-lora md:w-auto px-10 py-4 rounded-lg font-bold text-white transition-all bg-gradient-to-b from-[#C9A96E] to-[#57431F] hover:brightness-110 active:scale-95 cursor-pointer">
          {buttonText}
        </button>
        </Link>
       </div>
      </div>
    </section>
  );
};

export default GetEarlyAccessReusable;
