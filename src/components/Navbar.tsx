import { GiHamburgerMenu } from "react-icons/gi";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

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

      <div className="flex items-center justify-center gap-5">
        <form action="">
          <div className="flex h-10 items-center bg-zinc-900 px-4 pr-0">
            <div className="flex items-center gap-4 pr-5">
              <div>
                <AiOutlineSearch className="text-xl" />
              </div>

              <input
                type="text"
                className="w-96 border-none bg-zinc-900 focus:outline-none"
              />

              <AiOutlineClose className="cursor-pointer text-xl" />
            </div>
            <button className="flex h-10 w-16 items-center justify-center bg-zinc-800">
              <AiOutlineSearch className="text-xl" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
