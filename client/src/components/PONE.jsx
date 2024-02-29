import img from "../Assets/h1.png";

import "./PONE.css";

const PONE = () => {
  return (
    <div className="justify-center text-center">
      <h1 className="t1">CONNECTING DREAMS TO REALITY</h1>
      <h1 className="t2">YOUR PREMIER</h1>
      <h1 className="t3">REAL ESTATE MARKETPLACE</h1>
      <h5 className="t4">where every serach ends with a home</h5>
      <div className="flex justify-center my-10">
        <button className="btn m-2">Find Your Home →</button>
        <button className="btn m-2">List Your Property →</button>
      </div>
      <img className="h-[80%] w-[80%] ml-[10%]" src={img} alt="image" />
    </div>
  );
};

export default PONE;
