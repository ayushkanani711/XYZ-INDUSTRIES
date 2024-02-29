import img1 from "../Assets/h2.1.png";
import img2 from "../Assets/h2.2.png";
import img3 from "../Assets/h2.3.png";
import img4 from "../Assets/h2.4.png";

import './HIW.css'

const HIW = () => {
  return (
    <div className="ml-[15%] w-[70%] my-20">
      <h1 className="con1T text-center">HOW IT WORKS?</h1>
      <h5 className="con1T2 text-center">Step by Step Guide</h5>
      <div className="flex my-10">
        <img className="img mr-10" src={img1} alt="" />
        <div className="">
          <h1 className="ct1"> Discover Your Perfect Home</h1>
          <p className="para">
            Use our advanced filters to narrow down your search. Specify
            everything from location to amenities, ensuring you find the
            property that feels right.
          </p>
          <a className="learn" href="">Learn More</a>
        </div>
      </div>
      <div className="flex my-10">
        <div>
          <h1 className="ct1">Showcase Your Property</h1>
          <p className="para">
            List your property with ease. Fill in detailed forms to highlight
            every feature, attracting the perfect buyer directly.
          </p>
          <a className="learn" href="">Learn More</a>
        </div>
        <img className="img ml-10" src={img2} alt="" />
      </div>
      <div className="flex my-10">
        <img className="img mr-10" src={img3} alt="" />
        <div>
          <h1 className="ct1">Connect and Communicate</h1>
          <p className="para">
            Our platform facilitates direct communication between buyer and
            seller, making negotiations transparent and straightforward.
          </p>
          <a className="learn" href="">Learn More</a>
        </div>
      </div>
      <div className="flex my-10">
        <div>
          <h1 className="ct1">Seal the Deal Securely</h1>
          <p className="para">
            Advance payments made safe. Secure your agreement with confidence,
            and step closer to your dream property.
          </p>
          <a className="learn" href="">Learn More</a>
        </div>
        <img className="img ml-10" src={img4} alt="" />
      </div>
    </div>
  );
};

export default HIW;
