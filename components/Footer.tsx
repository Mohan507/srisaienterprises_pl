import Link from "next/link";
import { Building2, Phone, Mail, MapPin } from "lucide-react";

function IconLinkedIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.1 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.24h4.56V23H.22V8.24zM8.34 8.24h4.37v2.02h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V23h-4.56v-6.86c0-1.64-.03-3.74-2.28-3.74-2.29 0-2.64 1.79-2.64 3.63V23H8.34V8.24z" />
    </svg>
  );
}
function IconFacebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z" />
    </svg>
  );
}
function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconYoutube(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.6 15.6V8.4l6.4 3.6-6.4 3.6z" />
    </svg>
  );
}

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy pt-14">
      <div className="mx-auto max-w-7xl px-6 pb-10 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-amber text-navy">
                <Building2 size={20} strokeWidth={2.5} />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-bold text-white">Sri Sai Enterprises</span>
                <span className="text-[11px] tracking-wide text-steel-light">Construction &amp; Engineering</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Building stronger communities since 2008 — quality, safety and reliability on every project.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white">Quick links</h3>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-white/60 transition-colors hover:text-amber">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white">Contact us</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2.5 text-sm text-white/60">
                <Phone size={15} className="text-amber" /> +91 9908926009
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/60">
                <Mail size={15} className="text-amber" /> chitukulamohan507@gmail.com
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/60">
                <MapPin size={15} className="mt-0.5 shrink-0 text-amber" />
                123 Construction Ave, New York, NY 10001
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white">Follow us</h3>
            <div className="mt-4 flex gap-3">
              {[IconLinkedIn, IconFacebook, IconInstagram, IconYoutube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-white/70 transition-colors hover:border-amber hover:text-amber"
                >
                  <Icon width={16} height={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-xs text-white/50 sm:flex-row lg:px-10">
          <p>© {new Date().getFullYear()} Sri Sai Enterprises. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-amber">Privacy Policy</Link>
            <Link href="#" className="hover:text-amber">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
