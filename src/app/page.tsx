/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import GitHubActivitySection from "@/components/section/github-activity-section";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: `${DATA.name} | ${DATA.role}` },
  description: DATA.description,
  alternates: { canonical: "/" },
  openGraph: { title: DATA.name, description: DATA.description, siteName: DATA.name, type: "website" },
  twitter: { card: "summary_large_image", title: DATA.name, description: DATA.description },
};

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <h1>
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                  yOffset={8}
                  text={DATA.name}
                />
              </h1>
              <BlurFadeText
                className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.role}
              />
              <BlurFadeText
                className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.introduction}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown
                components={{
                  em: ({ node, ...props }) => (
                    <span className="underline underline-offset-4 not-italic" {...props} />
                  ),
                }}
              >
                {DATA.summary}
              </Markdown>
            </div>
<BlurFade delay={BLUR_FADE_DELAY * 4.5} className="mt-4">
  <Button asChild>
    <Link href="/resume">View Resume</Link>
  </Button>
</BlurFade>
          </BlurFade>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.degree}
                delay={BLUR_FADE_DELAY * 8 + index * 0.05}
              >
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-3 justify-between group"
                >
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        {education.school}
                        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {education.degree}
                      </div>
                      {education.description && (
                        <div className="font-sans text-xs text-muted-foreground/80 mt-1 leading-relaxed max-w-[500px]">
                          {education.description}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                    <span>
                      {education.start === education.end ? education.end : `${education.start} - ${education.end}`}
                    </span>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-col gap-y-6">
            {Object.entries(DATA.skills).map(([category, skills], categoryIndex) => (
              <div key={category} className="flex flex-col gap-y-2">
                <BlurFade delay={BLUR_FADE_DELAY * 9.5}>
                  <h3 className="text-sm font-semibold text-muted-foreground">{category}</h3>
                </BlurFade>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, id) => (
                    <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                      <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2">
                        {typeof skill.icon === "string" ? (
                          <Image src={skill.icon} alt="" width={16} height={16} className="size-4 shrink-0 object-contain" />
                        ) : (
                          <skill.icon className="size-4 shrink-0" aria-hidden="true" />
                        )}
                        <span className="text-foreground text-sm font-medium">{skill.name}</span>
                      </div>
                    </BlurFade>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <BlurFade delay={BLUR_FADE_DELAY * 11}>
        <ProjectsSection />
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 12}>
        <GitHubActivitySection />
      </BlurFade>
      <section id="leadership" className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Leadership &amp; Extracurricular</h2>
        {DATA.leadership.map((item) => (
          <div key={item.organization} className="space-y-2">
            <div className="flex flex-wrap justify-between gap-2">
              <h3 className="font-semibold">{item.title}</h3>
              <span className="text-xs text-muted-foreground">{item.dates}</span>
            </div>
            <p className="text-sm text-muted-foreground">{item.organization}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
          </div>
        ))}
      </section>
      <section id="certifications" className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Certifications &amp; Arts</h2>
        {DATA.certifications.map((item) => (
          <div key={item.title} className="space-y-2">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
          </div>
        ))}
      </section>
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
      {/* Footer Credits */}
      <footer className="text-center text-xs text-muted-foreground/55 space-y-1 select-none mt-16 pb-8">
        <p>
          {DATA.name}
        </p>
        <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
      </footer>
    </main>
  );
}
