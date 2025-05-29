import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="absolute right-0 top-0 h-screen w-screen bg-pattern-2 bg-cover bg-center md:-right-28 xl:-top-60" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="text-[52px] font-[700] leading-[120%] lg:text-[88px] font-[700] leading-[120%] leading-[120%]">
          Flow Forge
        </h1>
        <p className="text-[16px] font-[400] mt-6 text-gray-30 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app
        </p>

        <div className="flex flex-col w-full gap-3 sm:flex-row my-7">
          <Link href="/login">
            <Button
              type="button"
              title="Get Started"
              variant="border-[#30AF5B] bg-[#30AF5B] px-8 py-5 text-white"
            />
          </Link>
          <Button
            type="button"
            title="How we work?"
            // icon="/play.svg"
            variant="border-[#30AF5B] bg-[#30AF5B] px-8 py-5 text-white"
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <Image
          src="/dash.png"
          alt="hero"
          width={500}
          height={500}
          className="w-full transform rotate-[0deg] scale-105 transition duration-700 ease-in-out hover:rotate-[-3deg] hover:scale-110 shadow-2xl"
        />
      </div>
    </section>
  );
};

export default Hero;
