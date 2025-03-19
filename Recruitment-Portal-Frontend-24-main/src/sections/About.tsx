import BoundingBox from "../components/BoundingBox";
import Navbar from "../components/Navbar";
const About = () => {
  return (
    <div className="w-full min-h-screen h-full flex flex-col md:flex-row justify-center items-center p-4 md:p-12">
      <Navbar />
      <BoundingBox>
        <div className="w-full h-full text-center relative">
          <h1
            className="text-[1.5rem] md:text-[3rem] text-prime"
            style={{ textShadow: "3px 3px 0px red" }}
          >
            MOZILLA FIREFOX
          </h1>
          <div className="nes-container is-rounded is-dark text-[0.7rem] md:text-base text-left md:text-center">
            <p>
              Mozilla Firefox Club - VIT has been a beacon of innovation within
              VIT's student developer community for the last 10 years, boasting
              a dynamic ensemble of over 150 dedicated core and board members.
              Moreover, our influential presence extends beyond borders, with a
              robust social media footprint across various open-source
              communities. At MFC, we're steadfast believers in the
              transformative power of hands-on, impact-oriented projects. We
              cover a range of areas like technical work, managing projects,
              creating content, and reaching out to potential sponsors, speakers
              and various other entities
            </p>
          </div>
          <section className="icon-list flex gap-10 md:gap-8 mt-8 w-full justify-center scale-75 md:scale-100">
            <a href="https://www.instagram.com/mfc_vit">
              <i className="nes-icon instagram is-medium"></i>
            </a>
            <a href="mailto:mozillafirefox@vit.ac.in">
              <i className="nes-icon gmail is-medium"></i>
            </a>
            <a href="https://www.linkedin.com/company/mfcvit?originalSubdomain=in">
              <i className="nes-icon linkedin is-medium"></i>
            </a>
          </section>
          <img
            src="/background.png"
            alt=""
            className="hidden lg:block absolute -bottom-12 invert brightness-[50%] left-1/2 -translate-x-1/2 scale-x-75 scale-y-90"
          />
        </div>
      </BoundingBox>
    </div>
  );
};

export default About;
