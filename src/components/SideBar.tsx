import {
  mainLinks,
  secondaryLinks,
  subscriptionLinks,
} from "../data/iconsData";

export const SideBar = () => {
  return (
    <div className="sidebar w-2/12 overflow-auto bg-[#212121] pb-8 pr-5">
      <ul className="flex flex-col border-b-2 border-gray-700">
        {mainLinks.map(({ icon, name }) => (
          <li
            className={`py-3 pl-6 hover:bg-zinc-600 ${
              name === "Home" ? "bg-slate-600" : ""
            }`}
            key={name}
          >
            <a href="#" className="flex items-center gap-5">
              {icon}
              <span className="text-sm tracking-wider">{name}</span>
            </a>
          </li>
        ))}
      </ul>

      <ul className="flex flex-col border-b-2 border-gray-700">
        {secondaryLinks.map(({ icon, name }) => (
          <li className="py-3 pl-6 hover:bg-zinc-600" key={name}>
            <a href="#" className="flex items-center gap-5">
              {icon}
              <span className="text-sm tracking-wider">{name}</span>
            </a>
          </li>
        ))}
      </ul>

      <ul className="flex flex-col border-b-2 border-gray-700">
        {subscriptionLinks.map(({ icon, name }) => (
          <li className="py-3 pl-6 hover:bg-zinc-600" key={name}>
            <a href="#" className="flex items-center gap-5">
              {icon}
              <span className="text-sm tracking-wider">{name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
