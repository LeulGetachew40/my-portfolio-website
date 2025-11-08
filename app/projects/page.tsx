"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Hospital Management System",
      description:
        "A full-stack hospital management system with patient management, appointment scheduling, and medical record management.",
      fullDescription:
        "Built with NestJS and React, this platform features real-time patient management, appointment scheduling, and medical record management.",
      tags: [
        "NestJS",
        "React",
        "MySQL",
        "TypeScript",
        "Tailwind CSS",
        "Redux",
        "Redux Toolkit Query",
      ],
      image: "/Hospital Management System - Screenshot.png",
      links: {
        github: "https://github.com/scitech-valley/hospital-management",
        live: "https://hospitalmanagment.silverlionsecurity.com/",
      },
    },
    {
      title: "Mind Pilot Admin Dashboard",
      description:
        "Interactive admin dashboard with real-time updates for content management, managing users, enterprises, payments and notifications.",
      fullDescription:
        "This dashboard provides real-time insights with interactive charts, custom date range filters, and exportable reports. Features WebSocket integration for live notifications.",
      tags: ["Laravel", "React", "Inertia.js", "MySQL"],
      image: "/Mind Pilot Admin Dashboard - Screenshot.png",
      links: {
        github: "https://github.com/scitech-valley/mind-pilot",
        live: "https://mindplotbackend.fidellinks.com/",
      },
    },
    {
      title: "Fidel Links - Amharic Tutoring Platform",
      description:
        "Amharic tutoring platform with real-time updates, team workspaces, and progress tracking.",
      fullDescription:
        "A productive amharic tutoring solution with Kanban boards, team collaboration features, real-time notifications, and integrations with popular calendar apps.",
      tags: ["Next.js", "Express.js", "MySQL", "Tailwind CSS", "Redux"],
      image: "/Fidel Links - Amharic Tutoring Platform - Screenshot.png",
      links: {
        github: "https://github.com/scitech-valley/fidel-link",
        live: "https://fidellinks.com/",
      },
    },
    {
      title: "Miracle Cars",
      description:
        "Feature-rich car selling platform with customer to customer (C2C) and customer to business (C2B) features.",
      fullDescription:
        "Built with React and Express.js, this platform allows users to showcase their cars for sale and buy cars from other users.",
      tags: ["React", "Express.js", "MySQL", "Tailwind CSS", "Zustand"],
      image: "/Miracle Cars - Screenshot.png",
      links: {
        github: "https://github.com/scitech-valley/miracle-car",
        live: "https://themiraclecars.com/",
      },
    },
    {
      title: "Wild Oasis",
      description:
        "Feature-rich internal cabin management platform with and customer to business (C2B) features.",
      fullDescription:
        "Built with React and Supabase, this platform allows hotel management staff manage their cabins.",
      tags: ["React", "Supabase", "Tailwind CSS", "Redux"],
      image: "/Wild Oasis - Screenshot.png",
      links: {
        // github: "https://github.com/scitech-valley/miracle-car",
        live: "https://the-wilderness-oasis.netlify.app/",
      },
    },
    // {
    //   title: "Multiverse Africa Business Website",
    //   description: "Admin dashboard for managing cars for sale and buyers.",
    //   fullDescription:
    //     "Built with React and Express.js, this dashboard allows admin to manage cars for sale and buyers.",
    //   tags: ["React", "Express.js", "MySQL", "Tailwind CSS", "Zustand"],
    //   image: "/Miracle Cars Admin Dashboard - Screenshot.png",
    // },
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
            <Link href="/projects" className="text-foreground font-medium">
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

      {/* Header */}
      <section className="pt-32 pb-12 px-6 border-b border-border">
        <div className="max-w-4xl mx-auto flex items-center gap-4 mb-8">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft size={16} />
            </Button>
          </Link>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">My Projects</h1>
            <p className="text-foreground/70 mt-2">
              A collection of projects I've worked on, showcasing my skills and
              experience
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {projects.map((project, idx) => (
            <div key={idx} className="group">
              <div className="grid md:grid-cols-2 gap-8 items-stretch">
                {/* Image */}
                <div className="overflow-hidden rounded-lg border border-border bg-secondary/10 h-80 md:h-auto">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-foreground/70 mb-4">
                      {project.fullDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4 border-t border-border">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm">
                          <Github size={16} className="mr-2" />
                          Code
                        </Button>
                      </a>
                    )}
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm">
                        <ExternalLink size={16} className="mr-2" />
                        Live
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
