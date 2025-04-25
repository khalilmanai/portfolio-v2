"use client";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/lib/framer-variants";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          variants={textVariant(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-sm md:max-w-md aspect-square rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-6 border border-primary/20" />
              <Card className="relative z-10 h-full overflow-hidden">
                <CardContent className="p-0 h-full">
                  <Image
                    src="/images/photo.png"
                    alt="Khalil Manai"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 120vw, 650px"
                    priority
                  />
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="flex flex-col space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-semibold">
              Hi there! I&apos;m <span className="text-primary">Khalil Manai</span>
            </h3>

            <p className="text-muted-foreground">
              I&apos;m a passionate Software Engineer from Tunisia, focused on crafting exceptional mobile and web applications. My expertise spans Flutter, React Native, and full-stack development using technologies like NestJS, Symfony, and Node.js.
            </p>

            <p className="text-muted-foreground">
              I&apos;m currently working on <strong>RoadGuard</strong> — an AI-powered road surveillance system using YOLO and OCR to detect traffic violations in real-time, with blockchain integration for secure record-keeping. I love building impactful tech that blends AI, real-time data, and smart city concepts.
            </p>

            <p className="text-muted-foreground">
              Outside of development, I enjoy exploring new tech, contributing to meaningful projects, and collaborating with driven teams. I aim to create tools that not only solve problems but also empower users and communities.
            </p>

            <div className="flex space-x-4 pt-4">
              <Button asChild>
                <Link href="#experience">
                  My Experience
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button variant="outline" asChild>
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
