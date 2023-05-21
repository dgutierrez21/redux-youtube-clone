import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 flex h-14 items-center justify-between bg-[#212121] px-14 opacity-95">
      <div className="flex items-center gap-8 text-2xl">
        <div>
          <GiHamburgerMenu />
        </div>
      </div>
    </div>
  );
};
