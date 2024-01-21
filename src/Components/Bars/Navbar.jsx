import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mx-24 py-4">
      <h1>Navbar</h1>
      <Link to={"/login"}>
        <button className="px-5 py-2 bg-[#c29d59] rounded text-white text-xl font-bold">
          Login
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
