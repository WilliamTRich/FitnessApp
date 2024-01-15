import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyleNav,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-center h-screen w-1/6 bg-secondary">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/">
              <NavigationMenuLink className={navigationMenuTriggerStyleNav()}>
                Dashboard
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default Navbar;
