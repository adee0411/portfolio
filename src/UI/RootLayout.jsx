import { Outlet } from "react-router-dom";

import Logo from "../components/Logo";
import HamburgerContainer from "../components/HamburgerContainer";
import { useState } from "react";

const RootLayout = () => {
  const [isHamburgerToggled, setIsHamburgerToggled] = useState(false);
  return (
    <div className="relative">
      <header className="">
        <nav className="flex justify-between align-middle">
          <div>
            <Logo variant="light" />
          </div>
          <div
            className={`px-5 pt-5 absolute top-0
             left-0 w-full bg-slate-200 z-10 `}
          >
            <header className="flex justify-between align-middle">
              <div>
                <Logo variant="dark" />
              </div>
              <div>
                <HamburgerContainer
                  toggled={isHamburgerToggled}
                  toggle={setIsHamburgerToggled}
                />
              </div>
            </header>
            <ul>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
            </ul>
          </div>
          <div>
            <HamburgerContainer
              toggled={isHamburgerToggled}
              toggle={setIsHamburgerToggled}
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
