import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { DATA } from "@/data/resume";

export default function ResumePage() {
  return (
    <main className="min-h-dvh flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">{DATA.name} — Resume</h1>
        <a href="/resume.pdf" download className="inline-flex items-center gap-2 text-sm underline underline-offset-4">
          <ArrowDown className="size-4" />Download PDF
        </a>
      </div>
      <div className="flex flex-col gap-4" aria-label={`${DATA.name}'s complete CV`}>
        <a href="/resume.pdf" className="text-sm underline underline-offset-4">Open original PDF</a>
        {[1, 2].map((page) => (
          <a key={page} href={`/resume.pdf#page=${page}`} aria-label={`Open CV page ${page} in the original PDF`}>
            <Image
              src={`/resume/page-${page}.png`}
              alt={`${DATA.name}'s original CV, page ${page} of 2. Open the PDF for selectable text.`}
              width={1600}
              height={2070}
              sizes="(max-width: 672px) 100vw, 672px"
              priority={page === 1}
              className="h-auto w-full rounded-lg border bg-white"
            />
          </a>
        ))}
      </div>
    </main>
  );
}
