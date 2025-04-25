"use client";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/lib/framer-variants";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { experiences, education } from "@/lib/data";
import { BriefcaseIcon, GraduationCapIcon } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          variants={textVariant(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <Tabs defaultValue="experience" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="experience" className="text-base">
              <BriefcaseIcon className="mr-2 h-4 w-4" />
              Work Experience
            </TabsTrigger>
            <TabsTrigger value="education" className="text-base">
              <GraduationCapIcon className="mr-2 h-4 w-4" />
              Education
            </TabsTrigger>
          </TabsList>

          <TabsContent value="experience" className="space-y-6">
            {experiences.map((job, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", 0.1 * (index + 1))}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
              >
                <TimelineCard
                  title={job.title}
                  subtitle={job.company}
                  date={job.date}
                  description={job.description}
                  tags={job.skills}
                />
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="education" className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", 0.1 * (index + 1))}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
              >
                <TimelineCard
                  title={edu.degree}
                  subtitle={edu.school}
                  date={edu.date}
                  description={edu.description}
                />
              </motion.div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

interface TimelineCardProps {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  tags?: string[];
}

function TimelineCard({ title, subtitle, date, description, tags }: TimelineCardProps) {
  return (
    <Card className="border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-muted-foreground">{subtitle}</p>
          </div>
          <Badge variant="secondary" className="self-start md:self-center">
            {date}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-muted-foreground">{description}</p>
        {tags && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}