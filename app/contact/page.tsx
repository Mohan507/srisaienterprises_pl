import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us — Sri Sai Enterprises",
  description:
    "Get a quote from Sri Sai Enterprises. Reach our construction and engineering team for commercial, residential and infrastructure projects.",
};

const CONTACT_DETAILS = [
  { icon: Phone, label: "Call us", value: "+1 9908926009" },
  { icon: Mail, label: "Email us", value: "chitukulamohan507@gmail.com" },
  { icon: MapPin, label: "Visit us", value: "Hyderbad Telangana ,500062" },
  { icon: Clock, label: "Working hours", value: "Mon – Fri, 8:00 AM – 6:00 PM" },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-concrete">
        <section className="relative overflow-hidden bg-navy pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="blueprint-grid pointer-events-none absolute inset-0" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-amber">
              Get in touch
            </p>
            <h1 className="font-display max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl">
              Let&apos;s talk about your next project
            </h1>
            <p className="mt-4 max-w-lg text-base text-white/70">
              Share a few details and our team will follow up with a tailored quote within one
              business day.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-10">
            <div>
              <h2 className="font-display text-2xl font-bold text-ink">Contact information</h2>
              <p className="mt-3 text-sm leading-relaxed text-steel">
                Prefer to talk directly? Reach our project team using the details below, or fill
                out the form and we&apos;ll come back to you.
              </p>

              <div className="mt-9 space-y-6">
                {CONTACT_DETAILS.map((d) => {
                  const Icon = d.icon;
                  return (
                    <div key={d.label} className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-navy text-amber">
                        <Icon size={19} />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-steel-light">
                          {d.label}
                        </p>
                        <p className="mt-1 text-sm font-medium text-ink">{d.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-lg border border-line bg-white p-6 shadow-sm sm:p-8">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
