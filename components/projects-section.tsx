"use client";

import { motion } from "framer-motion";
import { fadeIn, textVariant, staggerContainer } from "@/lib/framer-variants";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          variants={textVariant(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            A showcase of my recent work, including web applications, design projects, and experiments.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    link?: string;
    github?: string;
  };
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeIn("up", 0.1 * (index + 1))}
      className="h-full"
    >
      <Card className="overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-500 h-full flex flex-col group">
        <div className="relative overflow-hidden h-48">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
            {project.github && (
              <Button size="icon" variant="secondary" asChild>
                <Link href={project.github} target="_blank" rel="noopener noreferrer" aria-label="View GitHub repository">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
            )}
            {project.link && (
              <Button size="icon" asChild>
                <Link href={project.link} target="_blank" rel="noopener noreferrer" aria-label="Visit live site">
                  <ExternalLink className="h-5 w-5" />
                </Link>
              </Button>
            )}
          </div>
        </div>
        
        <CardHeader className="pb-2">
          <h3 className="text-xl font-semibold">{project.title}</h3>
        </CardHeader>
        
        <CardContent className="flex-grow">
          <p className="text-muted-foreground mb-4">{project.description}</p>
        </CardContent>
        
        <CardFooter className="flex flex-wrap gap-2 pt-0">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </motion.div>
  );
}