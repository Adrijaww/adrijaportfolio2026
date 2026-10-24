import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Icons } from "@/components/icons";
import { DATA } from "@/data/resume";

export default function GitHubActivitySection() {
  const github = DATA.contact.social.GitHub;
  const username = new URL(github.url).pathname.slice(1);

  return (
    <section id="github-activity" className="flex flex-col gap-6">
      <h2 className="text-xl font-bold">GitHub Activity</h2>
      <a
        href={github.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col gap-6 rounded-xl border bg-card p-6 transition-colors hover:border-foreground/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 font-semibold text-sm">
            <Icons.github className="size-5" />{username}
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            View GitHub<ArrowUpRight className="size-4" aria-hidden="true" />
          </span>
        </div>
        <div className="overflow-x-auto">
          <Image
            src={`https://ghchart.rshah.org/40c463/${username}`}
            alt={`${username}'s GitHub contribution graph over the past year`}
            width={720}
            height={112}
            unoptimized
            className="min-w-[680px] rounded bg-white p-3"
          />
        </div>
      </a>
    </section>
  );
}
