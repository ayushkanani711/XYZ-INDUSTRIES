import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div>XYZ Industries</div>
      <NavBar></NavBar>
      <div>
        <button>Sign Up</button>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Header;
