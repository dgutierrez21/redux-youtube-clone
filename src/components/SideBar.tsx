import {
  helpsLinks,
  mainLinks,
  secondaryLinks,
  subscriptionLinks,
  textLinks,
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

      <ul className="flex flex-col border-b-2 border-gray-700">
        {helpsLinks.map(({ icon, name }) => (
          <li className="py-3 pl-6 hover:bg-zinc-600" key={name}>
            <a href="#" className="flex items-center gap-5">
              {icon}
              <span className="text-sm tracking-wider">{name}</span>
            </a>
          </li>
        ))}
      </ul>

      <ul className="flex flex-wrap gap-2 to-zinc-400 p-4 text-sm">
        {textLinks[0].map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <ul className="flex flex-wrap gap-2 to-zinc-400 p-4 text-sm">
        {textLinks[1].map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <footer>
        <span className="px-4 text-sm text-zinc-400">
          &copy; 2023 Google LLC
        </span>
        <p className="px-4 pt-3 text-sm text-zinc-400">
          This clone is educational purpose only.
        </p>
      </footer>
    </div>
  );
};
