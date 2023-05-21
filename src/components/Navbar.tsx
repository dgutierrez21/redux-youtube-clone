import { GiHamburgerMenu } from "react-icons/gi";
import { BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 flex h-14 items-center justify-between bg-[#212121] px-14 opacity-95">
      <div className="flex items-center gap-8 text-2xl">
        <div>
          <GiHamburgerMenu />
        </div>
        <Link to="/">
          <div className="flex items-center justify-center gap-1">
            <BsYoutube className="text-3xl text-red-600" />
            <span className="text-xl font-medium">YouTube</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
