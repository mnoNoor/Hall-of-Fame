import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-black text-white px-6 py-4 shadow-sm border-b">
      <h1 className="text-xl font-bold">Hall of Fame</h1>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/" className="px-3 py-2 hover:bg-neutral-300">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/about" className="px-3 py-2 hover:bg-neutral-300">About</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/contact" className="px-3 py-2 hover:bg-neutral-300">Contact</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Button className="hover:cursor-pointer">Sign in</Button>
    </header>
  )
}
