"use client";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/lib/framer-variants";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { skills } from "@/lib/data";
import { useMemo } from "react";

export function SkillsSection() {
  const skillCategories = useMemo(() => {
    const categories = Array.from(new Set(skills.map(skill => skill.category)));
    return ["All", ...categories];
  }, []);

  return (
    <section id="skills" className="py-16 md:py-24 bg-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          variants={textVariant(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <Tabs defaultValue="All" className="max-w-4xl mx-auto">
          <TabsList className="flex flex-wrap justify-center mb-8 h-auto">
            {skillCategories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="m-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {skillCategories.map((category) => (
            <TabsContent key={category} value={category} className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skills
                  .filter(skill => category === "All" || skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={fadeIn("up", 0.1 * (index % 10 + 1))}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.25 }}
                    >
                      <SkillBar
                        name={skill.name}
                        level={skill.level}
                      />
                    </motion.div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

interface SkillBarProps {
  name: string;
  level: number;
}

function SkillBar({ name, level }: SkillBarProps) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-base font-medium">{name}</h3>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <Progress value={level} className="h-2.5" />
    </div>
  );
}