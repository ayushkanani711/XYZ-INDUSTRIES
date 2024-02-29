import img from "../Assets/h3.png";
import "./Section2.css";

const Section2 = () => {
  return (
    <div>
      <img src={img} alt="" />
      <div className="justify-center text-center part2 my-36">
        <div className="he2 p-3">
          <span className="font-extrabold">YOUR </span>
          <span className="italic">TRUSTED </span>
          <span className="font-extrabold">PARTNER IN</span>
        </div>
        <div className="he2">
          <span className="font-extrabold">THE FUTURE </span>
          <span className="italic">OF HOUSING</span>
        </div>
        <div className="image-cont">
          <div className="he3">
            Our partnerships with governments and local banks ensure that our
            housing prices
          </div>
          <div className="he3">
            are affordable enough for our target market.
          </div>
          <button className="button mt-8 mb-3">
            Join Our Community Today →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section2;
