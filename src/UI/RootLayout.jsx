import { Outlet, NavLink } from "react-router-dom";

import Logo from "../components/Logo";
import HamburgerContainer from "../components/HamburgerContainer";
import { useState } from "react";

const RootLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <header className="p-5">
        <nav className="flex justify-between align-middle">
          <div>
            <Logo variant="light" />
          </div>
          {/** MAIN NAV */}
          <div
            className={`px-5 pt-5 absolute ${isOpen ? "top-0" : "-top-96"} 
             left-0 w-full bg-slate-200 z-10 transition-all duration-300 ease-out`}
          >
            <header className="flex justify-between align-middle">
              <div>
                <Logo variant="dark" />
              </div>
              <div>
                <HamburgerContainer toggled={isOpen} toggle={setIsOpen} />
              </div>
            </header>
            <ul>
              <li className="uppercase text-center text-2xl border-b border-b-slate-300 py-2">
                <NavLink
                  to="#skills"
                  reloadDocument
                  className={({ isActive }) => {
                    return isActive ? "" : "text-slate-800";
                  }}
                >
                  skill-ek
                </NavLink>
              </li>
              <li className="uppercase text-center text-2xl border-b border-b-slate-300 py-2">
                <NavLink
                  to="projects"
                  reloadDocument
                  className={({ isActive }) => {
                    return isActive ? "text-emerald-300" : "text-slate-800";
                  }}
                >
                  projektek
                </NavLink>
              </li>
              <li className="uppercase text-center text-2xl border-b border-b-slate-300 py-2">
                értékek
              </li>
              <li className="uppercase text-center text-2xl border-b border-b-slate-300 py-2">
                rólam
              </li>
              <li className="uppercase text-center text-2xl border-b border-b-slate-300 py-2">
                kontakt
              </li>
            </ul>
          </div>
          <div>
            <HamburgerContainer
              toggled={isOpen}
              toggle={setIsOpen}
              color="rgb(203, 213, 225)"
            />
          </div>
        </nav>
      </header>
      <main className="text-slate-300 px-10">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
