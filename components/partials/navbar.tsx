"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    // Check if user is logged in by looking for a token in localStorage
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    alert("Logout berhasil!");
  };

  const components = isLoggedIn
    ? [
        {
          title: "Profile",
          href: "/profile",
        },
        {
          title: "Logout",
          href: "/",
          onClick: handleLogout,
        },
      ]
    : [
        {
          title: "Login",
          href: "/login",
        },
      ];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Beranda */}
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Beranda
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Buat Vote */}
        <NavigationMenuItem>
          <Link href="/vote/create" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Buat Vote
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* User */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>User</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[100px] gap-3 p-4 md:w-[200px] md:grid-cols-2 lg:w-[300px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  onClick={component.onClick}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
