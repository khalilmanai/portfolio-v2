"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { navVariants } from "@/lib/framer-variants";
import { ThemeToggle } from "./theme-toggle";
import { navItems } from "@/lib/data";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 100,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="show"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/95 backdrop-blur-sm border-b shadow-sm"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Image src="images/logo.png" alt="Logo" width={80} height={80} className="inline-block mr-2" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.path}
              variant="ghost"
              className="text-foreground/80 hover:text-primary hover:bg-accent/50 rounded-md"
              onClick={() => scrollToSection(item.path)}
            >
              {item.name}
            </Button>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <ThemeToggle className="mr-2" />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-background border-b"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant="ghost"
                className="w-full justify-start text-foreground/80 hover:text-primary"
                onClick={() => scrollToSection(item.path)}
              >
                {item.name}
              </Button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}