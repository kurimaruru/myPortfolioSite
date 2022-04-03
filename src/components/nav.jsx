import AnchorLink from "react-anchor-link-smooth-scroll";

export const Nav = () => {
  return (
    <>
      <div className="fixed z-10 mb-2 shadow-lg opacity-90 navbar text-neutral-content bg-slate-900">
        <div className="px-2 mx-2 navbar-start">
          <span className="text-lg font-bold">Kurimaru</span>
        </div>
        <div className="hidden px-2 mx-2 navbar-center md:flex">
          <div className="flex items-stretch">
            {/* <a href="#" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </a> */}
            <AnchorLink
              href="#Home"
              className="btn btn-ghost btn-sm rounded-btn"
            >
              Home
            </AnchorLink>
            <AnchorLink
              href="#About"
              className="btn btn-ghost btn-sm rounded-btn"
            >
              About
            </AnchorLink>
            <AnchorLink
              href="#Skill"
              className="btn btn-ghost btn-sm rounded-btn"
            >
              MySkill
            </AnchorLink>
          </div>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end md:hidden opacity-80">
            <label tabindex="0" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-slate-900 rounded-box w-52"
            >
              <li>
                <AnchorLink
                  href="#Home"
                  className="btn btn-ghost btn-sm rounded-btn"
                >
                  Home
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  href="#About"
                  className="btn btn-ghost btn-sm rounded-btn"
                >
                  About
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  href="#Skill"
                  className="btn btn-ghost btn-sm rounded-btn"
                >
                  MySkill
                </AnchorLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
