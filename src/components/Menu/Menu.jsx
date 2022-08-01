import MenuItem from "./MenuItem";
import MenuLink from "./MenuLink";
import MenuList from "./MenuList";

const Menu = () => {
  return (
    <MenuList>
      <MenuItem>
        <MenuLink href="#!">Articles</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink href="#!">Locations</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink href="#!">Videos</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink href="#!">Sign in</MenuLink>
      </MenuItem>
    </MenuList>
  )
}

export default Menu;