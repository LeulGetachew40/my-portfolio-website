"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Award, BookOpen, Code2 } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function SkillsEducationPage() {
  const skills = {
    frontend: {
      title: "Frontend Development",
      description: "Modern web interfaces and interactive experiences",
      items: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 75 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Zustand", level: 75 },
        { name: "Redux", level: 90 },
        { name: "Tanstack Query", level: 80 },
      ],
    },
    backend: {
      title: "Backend Development",
      description: "Scalable server-side applications and APIs",
      items: [
        { name: "Node.js", level: 90 },
        { name: "NestJS", level: 90 },
        { name: "Express.js", level: 90 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 90 },
        { name: "MongoDB", level: 75 },
        { name: "Prisma ORM", level: 80 },
        { name: "REST APIs", level: 80 },
        { name: "Authentication", level: 80 },
      ],
    },
    tools: {
      title: "Tools & DevOps",
      description: "Development tools and deployment platforms",
      items: [
        { name: "Git & GitHub", level: 95 },
        { name: "Docker", level: 70 },
        { name: "Vercel", level: 95 },
        { name: "CI/CD", level: 70 },
      ],
    },
  };

  const education = [
    {
      degree: "Bachelors Degree in Software Engineering",
      school: "Addis Ababa Science and Technology University",
      year: "2018 - 2022",
      description:
        "Graduated from Addis Ababa Science and Technology University with a Bachelor's Degree in Software Engineering.",
      highlights: ["Built an Anbessa Bus Tracking and Ticketing System"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/5">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-foreground">
            Portfolio
          </Link>
          <div className="hidden md:flex gap-8">
            <Link
              href="/projects"
              className="text-foreground/70 hover:text-foreground transition"
            >
              Projects
            </Link>
            <Link
              href="/skills-education"
              className="text-foreground font-medium"
            >
              Skills & Education
            </Link>
            <Link
              href="/contact"
              className="text-foreground/70 hover:text-foreground transition"
            >
              Contact
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-12 px-6 border-b border-border">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft size={16} />
            </Button>
          </Link>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Skills & Education
            </h1>
            <p className="text-foreground/70 mt-2">
              My technical expertise, educational background, and professional
              certifications
            </p>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <Code2 size={32} className="text-primary" />
            Technical Skills
          </h2>
          <p className="text-foreground/70 mb-12">
            Years of focused experience with cutting-edge technologies
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.values(skills).map((category, idx) => (
              <div key={idx} className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {category.title}
                  </h3>
                  <p className="text-foreground/60 text-sm">
                    {category.description}
                  </p>
                </div>
                <div className="space-y-4">
                  {category.items.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className="text-xs text-foreground/60">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-primary to-accent h-full rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 px-6 bg-secondary/5 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <BookOpen size={32} className="text-primary" />
            Education
          </h2>

          <div className="space-y-8">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-primary font-medium text-sm mt-1">
                      {edu.school}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full whitespace-nowrap">
                    {edu.year}
                  </span>
                </div>
                <p className="text-foreground/70 mb-4">{edu.description}</p>
                <ul className="space-y-2">
                  {edu.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="text-sm text-foreground/60 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-20 px-6 bg-secondary/5 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">What I Bring</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Full Stack Expertise",
                description:
                  "End-to-end development from database design to UI implementation",
                count: "4+",
              },
              {
                title: "Years of Experience",
                description:
                  "Continuously learning and adapting to new technologies",
                count: "2+",
              },
              {
                title: "Projects Shipped",
                description:
                  "Successfully delivered projects for startups and enterprises",
                count: "5+",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg border border-border text-center hover:border-primary/50 transition"
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {item.count}
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-foreground/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Work Together?</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Check out my projects or reach out to discuss your next opportunity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects">
              <Button variant="outline" size="lg">
                View Projects
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 bg-secondary/5">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} Leul Getachew. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/LeulGetachew40"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/leul-getachew-78355a235/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:leulgetachew40@gmail.com"
              className="hover:text-foreground transition"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
