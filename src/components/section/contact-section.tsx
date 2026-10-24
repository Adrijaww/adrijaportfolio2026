import { Mail, Phone } from "lucide-react";
import { DATA } from "@/data/resume";

export default function ContactSection() {
  return (
    <div className="border border-dashed border-muted-foreground/30 rounded-xl p-8 text-center space-y-6">
      <h2 className="text-3xl font-bold tracking-tighter">Let&apos;s Connect</h2>
      <p className="text-muted-foreground">Open to software engineering, product development, and backend engineering opportunities.</p>
      <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center text-sm">
        <a href={`mailto:${DATA.contact.email}`} className="inline-flex items-center gap-2 underline underline-offset-4 break-all"><Mail className="size-4 shrink-0" />{DATA.contact.email}</a>
        <a href={`tel:${DATA.contact.tel}`} className="inline-flex items-center gap-2 underline underline-offset-4"><Phone className="size-4" />+91 62890 33318</a>
      </div>
      <p className="text-sm text-muted-foreground">{DATA.location}</p>
    </div>
  );
}
