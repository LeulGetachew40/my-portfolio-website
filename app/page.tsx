"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/5">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-foreground">
            Leul's Portfolio
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link
              href="/projects"
              className="text-foreground/70 hover:text-foreground transition"
            >
              Projects
            </Link>
            <Link
              href="/skills-education"
              className="text-foreground/70 hover:text-foreground transition"
            >
              Skills
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
              Full Stack Developer & Creative Technologist
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl leading-relaxed">
              My Name is Leul Getachew. I build beautiful, performant web
              experiences that combine thoughtful design with robust
              engineering. Currently exploring modern web technologies and
              crafting digital solutions that matter.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Get in Touch
              </Button>
            </Link>
            <Link href="/projects">
              <Button size="lg" variant="outline">
                View My Work
              </Button>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com/LeulGetachew40"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/leul-getachew-78355a235/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:leulgetachew40@gmail.com"
              className="text-foreground/60 hover:text-foreground transition transform hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section id="skills" className="py-20 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Programming Languages",
                skills: ["PHP", "JavaScript", "TypeScript", "Python"],
              },
              {
                title: "Frontend",
                skills: [
                  "HTML",
                  "CSS",
                  "React",
                  "Next.js",
                  "Tailwind CSS",
                  "Redux Toolkit",
                  "Zustand",
                  "Redux Toolkit Query",
                  "Tanstack Query",
                ],
              },
              {
                title: "Backend",
                skills: [
                  "Node.js",
                  "Express.js",
                  "NestJS",
                  "Laravel",
                  "Django",
                  "PostgreSQL",
                  "MySQL",
                  "MongoDB",
                  "Redis",
                  "REST APIs",
                  "GraphQL",
                  "Prisma",
                  "JWT Authentication",
                  "WebSockets",
                ],
              },
              {
                title: "Tools & DevOps",
                skills: ["Git", "Docker", "Vercel", "CI/CD"],
              },
            ].map((category, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="font-semibold text-lg">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="text-foreground/70 text-sm">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/skills-education">
              <Button variant="outline" size="sm">
                Learn More About My Background
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 px-6 bg-secondary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">My Recent Projects</h2>
          <p className="text-foreground/70 mb-12">
            A selection of work I've worked on recently
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                title: "Hospital Management System",
                description:
                  "Full-stack hospital management system with real-time notifications and staff management",
                tags: ["NestJS", "React", "MySQL"],
              },
              {
                title: "Mind Pilot Admin Dashboard",
                description:
                  "Interactive admin dashboard with real-time updates",
                tags: ["Laravel", "React", "Inertia.js", "MySQL"],
              },
            ].map((project, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg border border-border hover:border-primary/50 transition bg-card"
              >
                <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-foreground/70 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Link href="/projects">
            <Button>
              View All Projects
              <ExternalLink size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">
            Let's Build Something Great Together
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and
            opportunities. Feel free to reach out!
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Start a Conversation
            </Button>
          </Link>
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
