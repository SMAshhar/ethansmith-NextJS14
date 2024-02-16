import AboutPage from "@/components/About/about";
import Circles from "@/components/About/circles";

const About = () => {
  return (
    <div className="h-full flex justify-center items-center w-full py-32 text-center xl:text-left px-1 xl:px-10">
      <Circles />
      <AboutPage />
    </div>
  );
};

export default About;
