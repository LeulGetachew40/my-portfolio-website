"use client";

import type React from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Mail, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

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
              className="text-foreground/70 hover:text-foreground transition"
            >
              Skills & Education
            </Link>
            <Link href="/contact" className="text-foreground font-medium">
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
            <h1 className="text-4xl md:text-5xl font-bold">Get In Touch</h1>
            <p className="text-foreground/70 mt-2">
              I'd love to hear from you. Reach out for collaborations or just a
              friendly hello!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                  Leul Getachew
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full min-h-32"
                />
              </div>

              {submitStatus === "success" && (
                <div className="p-4 rounded-lg bg-green-500/10 text-green-700 dark:text-green-400 text-sm">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 rounded-lg bg-red-500/10 text-red-700 dark:text-red-400 text-sm">
                  ✗ Failed to send message. Please try again.
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Contact</h3>
              <div className="space-y-4">
                <a
                  href="mailto:leulgetachew40@gmail.com"
                  className="flex items-center gap-3 text-foreground/70 hover:text-foreground transition"
                >
                  <Mail size={20} className="text-primary" />
                  <div>
                    <p className="text-sm text-foreground/50">Email</p>
                    <p className="font-medium">leulgetachew40@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/leul-getachew-78355a235/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground/70 hover:text-foreground transition"
                >
                  <Linkedin size={20} className="text-primary" />
                  <div>
                    <p className="text-sm text-foreground/50">LinkedIn</p>
                    <p className="font-medium">
                      linkedin.com/in/leul-getachew-78355a235/
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/LeulGetachew40"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground/70 hover:text-foreground transition"
                >
                  <Github size={20} className="text-primary" />
                  <div>
                    <p className="text-sm text-foreground/50">GitHub</p>
                    <p className="font-medium">github.com/LeulGetachew40</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <h3 className="font-semibold text-lg mb-3">Availability</h3>
              <p className="text-foreground/70 text-sm">
                I'm currently available for freelance projects and full-time
                opportunities. Let's talk!
              </p>
            </div>
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
