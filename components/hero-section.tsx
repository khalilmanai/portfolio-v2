"use client";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/lib/framer-variants";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { socialLinks } from "@/lib/data";
import Link from "next/link";

export function HeroSection() {
  const handleScrollDown = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "Github":
        return <Github className="h-5 w-5" />;
      case "Linkedin":
        return <Linkedin className="h-5 w-5" />;
      case "Twitter":
        return <Twitter className="h-5 w-5" />;
      case "Mail":
        return <Mail className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 flex flex-col items-center">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          className="w-full max-w-3xl text-center"
        >
          <motion.h1
            variants={textVariant(0.1)}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            <span className="text-primary">Khalil </span> Manai
          </motion.h1>

          <motion.div
            variants={textVariant(0.2)}
            className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground/80 mb-6"
          >
            <span className="relative inline-block">
              Software Engineering Student
              <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/40"></span>
            </span>
          </motion.div>

          <motion.p
            variants={textVariant(0.3)}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8"
          >
            I craft high-quality, user-friendly mobile and web applications, blending sleek design with clean, scalable code. My focus is on performance, responsiveness, and delivering seamless digital experiences.
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.5)}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              className="rounded-full"
              onClick={handleScrollDown}
            >
              Explore My Work
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="rounded-full"
              asChild
            >
              <Link href="https://drive.google.com/drive/folders/1ZYqnuPIC9UMKr-mML4YpXZ-d9oN4K0YF" target="_blank" rel="noopener noreferrer">
                Download Resume
              </Link>
            </Button>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.7)}
            className="flex justify-center gap-4"
          >
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                size="icon"
                className="rounded-full hover:text-primary hover:bg-accent/50"
                asChild
              >
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  {getSocialIcon(link.icon)}
                </Link>
              </Button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full animate-bounce"
            onClick={handleScrollDown}
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}