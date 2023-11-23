import { Twirl as Hamburger } from "hamburger-react";

const HamburgerContainer = ({
  isHamburgerToggled,
  setIsHamburgerToggled,
  color,
}) => {
  return (
    <Hamburger
      direction="left"
      toggle={setIsHamburgerToggled}
      toggled={isHamburgerToggled}
      size={24}
      color={color}
    />
  );
};

export default HamburgerContainer;
