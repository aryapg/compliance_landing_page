import React from "react";
import Fade from "react-reveal/Fade";

const AboutMore = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <Fade bottom cascade>
        <div className="grid grid-cols-3 h-full overflow-hidden gap-4 xxs:grid-cols-1 xs:grid-cols-1 sm:grid-cols-3">
          <div className="col-start-1 col-end-3 h-96 overflow-hidden rounded-xl">
            <img
              className="object-cover h-96 w-full"
              src="https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2890&q=80"
              alt="Team Collaboration"
            ></img>
          </div>
          <div className="col-start-3 overflow-hidden rounded-xl h-96 xxs:col-start-1 sm:col-start-3">
            <img
              className="object-cover h-96"
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
              alt="Innovative Solutions"
            ></img>
          </div>
        </div>
      </Fade>
      <div className="grid grid-cols-4">
        <p className="col-start-3 col-end-5 text-white text-3xl leading-normal mt-10 xxs:col-start-1 sm:col-start-3 xxs:text-sm xs:text-lg sm:text-3xl">
          Welcome to our innovative platform, where we are reshaping the landscape of compliance checking for financial companies. Our commitment to excellence and cutting-edge technology sets us apart.
        </p>
        <p className="col-start-3 col-end-5 text-white text-3xl leading-normal mt-6 xxs:col-start-1 sm:col-start-3 xxs:text-sm xs:text-lg sm:text-3xl">
          With a focus on transparency and security, we utilize blockchain technology to store compliance data securely on the Ethereum Mumbai Testnet. This ensures that your company's sensitive information is protected at the highest level.
        </p>
        <p className="col-start-3 col-end-5 text-white text-3xl leading-normal mt-6 xxs:col-start-1 sm:col-start-3 xxs:text-sm xs:text-lg sm:text-3xl">
          Dive into the future with our platform, where data transforms into insights and compliance becomes a seamless journey. We're not just rewriting rules; we're crafting a narrative of innovation, empowering companies to soar beyond limits.
        </p>
      </div>
    </div>
  );
};

export default AboutMore;
