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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

function Navbar() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-1/6 bg-secondary">
      <div className="flex flex-col items-center gap-4">
        <Avatar className="h-32 w-32">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h3 className="font-medium text-4xl text-primary">Suralias</h3>
      </div>
      <NavigationMenu className="h-1/2">
        <NavigationMenuList className="flex-col gap-4">
          <NavigationMenuItem>
            <Link to="/">
              <NavigationMenuLink className={navigationMenuTriggerStyleNav()}>
                Dashboard
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/">
              <NavigationMenuLink className={navigationMenuTriggerStyleNav()}>
                Messages
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/">
              <NavigationMenuLink className={navigationMenuTriggerStyleNav()}>
                Calendar
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/">
              <NavigationMenuLink className={navigationMenuTriggerStyleNav()}>
                Settings
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Button
        variant={"destructive"}
        size={"lg"}
        className="text-2xl h-16 w-48"
      >
        Logout
      </Button>
    </div>
  );
}

export default Navbar;
