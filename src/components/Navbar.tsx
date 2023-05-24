import { FormEvent, ChangeEvent } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { BsYoutube, BsCameraVideo, BsBell } from "react-icons/bs";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { IoAppsSharp } from "react-icons/io5";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { changeSearchTerm, clearVideos } from "../store/slices/youtubeSlice";

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (location.pathname !== "/search") {
      navigate("/search");
      return;
    }

    dispatch(clearVideos());
    dispatch(getSearchPageVideos(false));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearchTerm(e.target.value));
  };

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
        <form action="" onSubmit={handleSearch}>
          <div className="flex h-10 items-center bg-zinc-900 px-4 pr-0">
            <div className="flex items-center gap-4 pr-5">
              <div>
                <AiOutlineSearch className="text-xl" />
              </div>

              <input
                type="text"
                className="w-96 border-none bg-zinc-900 focus:outline-none"
                value={searchTerm}
                onChange={handleChange}
              />

              <AiOutlineClose className="cursor-pointer text-xl" />
            </div>
            <button className="flex h-10 w-16 items-center justify-center bg-zinc-800">
              <AiOutlineSearch className="text-xl" />
            </button>
          </div>
        </form>
        <div className="rounded-full bg-zinc-900 p-3 text-xl">
          <TiMicrophone />
        </div>
      </div>

      <div className="flex items-center gap-5 text-xl">
        <BsCameraVideo />
        <IoAppsSharp />

        <div className="relative">
          <BsBell />
          <span className="absolute bottom-2 left-2 rounded-full bg-red-600 px-1 text-xs">
            9+
          </span>
        </div>

        <img src="/user.png" alt="logo" className="h-9 w-9 rounded-full" />
      </div>
    </div>
  );
};
