import { Twirl as Hamburger } from "hamburger-react";

const HamburgerContainer = ({ toggle, toggled, color }) => {
  return (
    <button>
      <Hamburger
        direction="left"
        toggle={toggle}
        toggled={toggled}
        size={24}
        color={color}
      />
    </button>
  );
};

export default HamburgerContainer;
