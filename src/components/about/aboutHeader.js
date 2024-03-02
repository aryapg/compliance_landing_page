import React from "react";
import Fade from "react-reveal/Fade";
import imageSrc from "./Screenshot 2024-03-02 100514.png";
const AboutHeader = () => {
  return (
    <Fade bottom cascade>
      <div className="max-w-7xl mx-auto mt-10">
        <div className="overflow-hidden rounded-xl">
        <img 
            src={imageSrc} 
            alt="Office Space" 
            style={{ height: '600px', width: '2000px' }}
        />
        </div>
        <div className="mt-5">
          <span className="text-white text-sm opacity-50">About the Project</span>
          <h1 className="text-white text-7xl font-poppins font-semibold leading-snug xxs:text-lg xs:text-lg sm:text-3xl lg:text-7xl">
            Revolutionizing Compliance Check with Blockchain and AI
          </h1>
          <p className="text-white text-lg mt-3">
            Welcome to our compliance check platform, where we merge cutting-edge technology to streamline the compliance process for financial companies.
          </p>
          <p className="text-white text-lg mt-3">
            Our platform allows companies to sign up, submit their datasets, and seamlessly check their compliance status against predefined rules using advanced machine learning algorithms.
          </p>
          <p className="text-white text-lg mt-3">
            Leveraging the power of blockchain technology, we secure and transparently store your compliance data on the Ethereum Mumbai Testnet using Sepolia ETH and MetaMask wallets.
          </p>
          <p className="text-white text-lg mt-3">
            After deploying the details on the blockchain, our GPT-3 powered AI provides a comprehensive summary, highlighting which fields are compliant and which need attention.
          </p>
          <p className="text-white text-lg mt-3">
            Join us in reshaping the landscape of compliance checking, making it more efficient, secure, and user-friendly.
          </p>
        </div>
      </div>
    </Fade>
  );
};

export default AboutHeader;
