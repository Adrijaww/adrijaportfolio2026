import { ArrowUpRight, Mail } from "lucide-react";
import { DATA } from "@/data/resume";
import Parallax from "@/components/parallax";

export default function ContactSection() {
  return (
    <div className="contact-panel">
      <Parallax className="contact-parallax" distance={32}>
        <div className="contact-skyline" aria-hidden="true" />
      </Parallax>
      <div className="contact-panel-top">
        <div>
          <p className="contact-label">Have something in mind?</p>
          <h2>Let&apos;s<br />connect.</h2>
        </div>
        <p className="contact-description">Open to software engineering, product development, and backend engineering opportunities.</p>
      </div>
      <div className="contact-panel-bottom">
        <div className="contact-links">
          <a href={`mailto:${DATA.contact.email}`}>
            <Mail aria-hidden="true" />
            <span>{DATA.contact.email}</span>
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <p className="contact-location">Based in<br /><span>{DATA.location}</span></p>
      </div>
    </div>
  );
}
