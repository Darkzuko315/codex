"use client";

import { motion } from "framer-motion";
import { BorderTrailCard } from "@/components/border-trail-card";
import Image from "next/image";
import { Button } from "./core/moving-border";

export function About() {
  return (
    <section id="about" className="py-24 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Codex</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square relative rounded-2xl overflow-hidden border border-border">
              <Image
                src="/me/cd.jpg?height=600&width=600"
                alt="Profile"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
          </div>

          <div>
            <BorderTrailCard className="bg-linear-to-l from-blue-200 via-blue-500 to-blue-200 dark:from-blue-400 dark:via-blue-500 dark:to-blue-700">
              <div className="mb-4">
                <Button
                  borderRadius="1.75rem"
                  className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 "
                >
                  <h3 className="text-2xl font-semibold">Who we are</h3>
                </Button>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">
                We're passionate Full Stack Developers with expertise in both
                frontend and backend technologies. I love creating elegant,
                efficient, and user-friendly web applications that solve
                real-world problems.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With a strong foundation in modern frameworks like React,
                Next.js, and TypeScript, along with backend technologies, I
                bring a comprehensive skill set to every project I work on.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm constantly learning and staying up-to-date with the latest
                technologies and best practices in web development to deliver
                high-quality solutions.
              </p>
            </BorderTrailCard>
          </div>
        </div>
      </div>
    </section>
  );
}
