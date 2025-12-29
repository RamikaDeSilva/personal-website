"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#books", label: "Books" },
  { href: "#writing", label: "Writing" },
  { href: "#contact", label: "Connect" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full mt-6 transition-all duration-300 ${
        isScrolled
          ? "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 py-8 lg:px-8">
        {/* Brand */}
        <Link
          href="#home"
          className="text-xl text-muted-foreground transition-colors hover:text-foreground/80"
        >
          RD
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors hover:text-foreground/80 ${
                link.label === "Home" ? "font-semibold" : "text-foreground/60"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <nav className="flex flex-col space-y-4 pt-8">
                {navLinks.map((link) => (
                  <SheetClose key={link.href} asChild>
                    <Link
                      href={link.href}
                      className={`text-base transition-colors hover:text-foreground/80 ${
                        link.label === "Home"
                          ? "font-semibold"
                          : "text-foreground/60"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}


