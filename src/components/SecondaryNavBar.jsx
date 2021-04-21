import Dropdown from "./common/Dropdown";
import { DropdownLink } from "./common/Dropdown";
import { FlexCenterAling } from "./common/Flex";

function SecondaryNavBar() {
  return (
    <FlexCenterAling className="navbar-secondary animate__animated animate__fadeIn">
      <Dropdown title="ARTICLES">
        <DropdownLink to="/">WW2</DropdownLink>
        <DropdownLink to="/">Vikings</DropdownLink>
        <DropdownLink to="/">Blood & Empire</DropdownLink>
      </Dropdown>
      <Dropdown title="MEDIA">
        <DropdownLink to="/">Wallpapers</DropdownLink>
      </Dropdown>
    </FlexCenterAling>
  );
}
export default SecondaryNavBar;
