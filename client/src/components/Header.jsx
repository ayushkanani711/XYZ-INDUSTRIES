import NavBar from "./NavBar";
import "./Header.css";

const Header = () => {
  return (
    <div className="flex justify-between mb-10 mt-10 mx-2">
      <div className="logo">
        <span className="font-extrabold mr-2">XYZ</span>
        <span className="italic">Industries</span>{" "}
      </div>
      <NavBar />
      <div className="buttons">
        <button className="button1">Sign Up</button>
        <button className="button2">Sign In</button>
      </div>
    </div>
  );
};

export default Header;
