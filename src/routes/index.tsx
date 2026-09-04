import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { Compass, PenTool, Radio, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import logo from "@/assets/forty-logo.png";
import workIcode from "@/assets/work-icode.jpg";

// TODO: REPLACE_BOOKING_URL — swap this placeholder for the real Google Form link.
const BOOKING_URL = "https://forms.gle/PLACEHOLDER";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FORTY — Brands People Notice, Remember, and Choose" },
      {
        name: "description",
        content:
          "FORTY is a strategy-led creative marketing agency in Kenya. Brand strategy, creative direction, content and campaigns that move people.",
      },
      { property: "og:title", content: "FORTY — Brands People Notice, Remember, and Choose" },
      {
        property: "og:description",
        content:
          "Strategy → Creative → Distribution. A creative marketing agency founded in Kenya, built for wherever the brand wants to go.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FortyPage,
});

const NAV = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const CLIENTS = ["ICODE", "CLIENT 02", "CLIENT 03", "CLIENT 04", "CLIENT 05", "CLIENT 06"];

type Pillar = {
  n: string;
  title: string;
  body: string;
  cta: string;
  icon: LucideIcon;
  items: string[];
};

const PILLARS: Pillar[] = [
  {
    n: "01",
    title: "Strategy",
    body: "We figure out what your brand should say, who should hear it, and why they should care.",
    cta: "Explore Strategy",
    icon: Compass,
    items: [
      "Brand strategy",
      "Positioning",
      "Audience research",
      "Campaign strategy",
      "Content strategy",
    ],
  },
  {
    n: "02",
    title: "Creative",
    body: "We turn strategy into things people actually see.",
    cta: "Explore Creative",
    icon: PenTool,
    items: [
      "Brand identity",
      "Creative direction",
      "Photography",
      "Videography",
      "Graphic design",
    ],
  },
  {
    n: "03",
    title: "Distribution",
    body: "We make sure the work reaches people.",
    cta: "Explore Distribution",
    icon: Radio,
    items: [
      "Social media",
      "Content production",
      "Social campaigns",
      "Community",
      "Digital marketing",
    ],
  },
];

type CaseStudy = {
  n: string;
  client: string;
  hook: string;
  soon?: boolean;
  image?: string;
  detail?: { label: string; text: string }[];
};

const CASES: CaseStudy[] = [
  {
    n: "01",
    client: "iCode",
    hook: "Turning a school into a social-first brand.",
    image: workIcode,
    detail: [
      {
        label: "The Challenge",
        text: "Their content wasn't consistently communicating the school experience — strong programmes, quiet presence.",
      },
      {
        label: "The Insight",
        text: "Parents and students don't choose a school from a brochure. They choose from what the day-to-day feels like online.",
      },
      {
        label: "The Idea",
        text: "Make the school experience visible: a social-first content engine built around real moments, not announcements.",
      },
      {
        label: "The Execution",
        text: "Content strategy, short-form video, production, editing and full social media management.",
      },
      {
        label: "The Outcome",
        text: "A consistent, recognisable feed that shows the school as it actually is — and gives prospective families a reason to look twice.",
      },
    ],
  },
  { n: "02", client: "Client TBD", hook: "Building a brand from zero.", soon: true },
  { n: "03", client: "Client TBD", hook: "Repositioning an existing brand.", soon: true },
];

const METHOD = [
  { n: "01", title: "Reset", lead: "Understand the problem.", body: "We audit the brand, audience, positioning, content and marketing ecosystem." },
  { n: "02", title: "Define", lead: "Find the signal.", body: "We clarify what makes the brand different and what it should be known for." },
  { n: "03", title: "Build", lead: "Turn the strategy into creative.", body: "Identity, campaigns, content and experiences." },
  { n: "04", title: "Distribute", lead: "Put it in front of the right people.", body: "Social, digital, campaigns and community." },
  { n: "05", title: "Evolve", lead: "Learn. Adapt. Grow.", body: "We measure what's working and continually improve." },
];

function Logo({ className = "h-7" }: { className?: string }) {
  return <img src={logo} alt="FORTY" className={`${className} w-auto`} />;
}

function FortyPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePillar, setActivePillar] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActivePillar((current) => (current + 1) % PILLARS.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-navy text-cream">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-navy/85 backdrop-blur-md">
        <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 lg:grid-cols-[auto_1fr_auto]">
          <a href="#top" className="flex min-w-0 items-center">
            <Logo className="h-6 sm:h-7" />
          </a>
          <ul className="hidden justify-center gap-9 lg:flex">
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-[0.7rem] uppercase tracking-[0.22em] text-cream/70 transition-colors hover:text-gold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden border border-gold px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.22em] text-gold transition-colors hover:bg-gold hover:text-navy sm:inline-block"
            >
              Book a Reset
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-9 w-9 shrink-0 flex-col items-center justify-center gap-[5px] border border-border lg:hidden"
            >
              <span className="block h-px w-4 bg-cream" />
              <span className="block h-px w-4 bg-cream" />
            </button>
          </div>
        </nav>
        {menuOpen && (
          <div className="border-t border-border/60 px-5 py-5 lg:hidden">
            <ul className="flex flex-col gap-4">
              {NAV.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-xs uppercase tracking-[0.22em] text-cream/80"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-gold px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.22em] text-gold"
                >
                  Book a Reset
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="grain relative flex min-h-[92vh] items-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-1/4 h-[38rem] w-[38rem] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 65%)" }}
        />
        <div className="mx-auto w-full max-w-7xl px-5 pb-40 pt-24 sm:px-8 sm:pb-64 lg:pb-80">
          <Reveal>
            <p className="eyebrow flex flex-wrap items-center gap-x-2 gap-y-1" aria-label="Strategy, Creative, Distribution">
              {PILLARS.map((pillar, index) => (
                <span
                  key={pillar.title}
                  className={`transition-all duration-500 ${
                    activePillar === index ? "text-gold opacity-100" : "text-cream/35 opacity-70"
                  }`}
                >
                  {pillar.title}{index < PILLARS.length - 1 ? "." : ""}
                </span>
              ))}
            </p>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="display-xl mt-8 max-w-5xl text-[2.6rem] sm:text-6xl lg:text-[5.2rem]">
              We build brands people <span className="text-gold">notice</span>, remember, and choose.
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-9 max-w-xl text-base leading-relaxed text-cream/65 sm:text-lg">
              FORTY is a creative marketing agency helping ambitious businesses turn their ideas into
              brands, content and campaigns that move people.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <a
                href="#work"
                className="bg-gold px-8 py-4 text-center text-[0.7rem] uppercase tracking-[0.24em] text-navy transition-opacity hover:opacity-90"
              >
                Explore Our Work
              </a>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-cream/35 px-8 py-4 text-center text-[0.7rem] uppercase tracking-[0.24em] text-cream transition-colors hover:border-gold hover:text-gold"
              >
                Book a Consultation
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES — cards straddle hero / light section boundary */}
      <section id="services" className="section-light relative overflow-visible px-5 pb-24 sm:px-8 sm:pb-32">
        {/* Floating breakout card composition */}
        <div className="relative z-10 -mt-24 w-full overflow-visible sm:-mt-64 lg:-mt-72">
          <div className="relative mx-auto grid w-full max-w-[95rem] grid-cols-3 items-stretch gap-3 overflow-x-auto px-5 pb-6 sm:gap-5 lg:max-w-[90rem] lg:gap-10 lg:overflow-visible lg:px-8">
            {PILLARS.map((p, i) => {
              const layer = i === 1 ? "z-20" : "z-10";
              return (
                <Reveal
                  key={p.title}
                  delay={i * 100}
                  className={`relative ${layer} h-full min-w-[15rem]`}
                >
                  <article className="group flex h-full flex-col rounded-xl border border-navy/10 bg-cream p-4 shadow-[0_1px_2px_rgba(11,21,38,0.06),0_8px_24px_-12px_rgba(11,21,38,0.12)] transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-[0_2px_4px_rgba(11,21,38,0.06),0_20px_40px_-16px_rgba(11,21,38,0.22)] sm:p-8 lg:p-10">
                    <div className="flex items-start justify-between">
                      <span className="grid h-10 w-10 place-items-center rounded-lg border border-gold/30 bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy sm:h-14 sm:w-14">
                        <p.icon className="h-4 w-4 sm:h-6 sm:w-6" strokeWidth={1.5} />
                      </span>
                      <span className="font-display text-[0.55rem] tracking-[0.2em] text-navy/30 sm:text-xs sm:tracking-[0.3em]">
                        {p.n}
                      </span>
                    </div>
                    <h3 className="display-xl mt-3 text-sm text-navy sm:mt-8 sm:text-2xl">{p.title}</h3>
                    <p className="mt-1 hidden text-xs leading-relaxed text-navy/65 sm:mt-4 sm:block sm:text-sm">{p.body}</p>
                    <ul className="mt-3 hidden space-y-2 border-t border-navy/10 pt-3 sm:mt-8 sm:block sm:space-y-3 sm:pt-6">
                      {p.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-navy/75 sm:gap-3 sm:text-sm">
                          <span className="mt-1.5 h-px w-3 shrink-0 bg-gold sm:mt-2 sm:w-4" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-1 pt-4 text-[0.55rem] uppercase tracking-[0.16em] text-gold transition-all duration-300 group-hover:gap-2 sm:pt-8 sm:text-[0.7rem] sm:tracking-[0.22em]"
                    >
                      {p.cta} <span aria-hidden>→</span>
                    </a>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>


        <div className="mx-auto mt-16 max-w-7xl">
          <Reveal delay={120}>
            <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-navy/70 sm:text-lg">
              Strategy → Creative → Distribution. That's how we build brands that don't just look good
              — they move.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="px-5 py-24 sm:px-8 sm:py-36">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="eyebrow">Proof, Not Promises</p>
            <h2 className="display-xl mt-6 text-3xl sm:text-5xl">Selected work</h2>
          </Reveal>
          <div className="mt-16 space-y-6">
            {CASES.map((c, i) => (
              <Reveal key={c.n} delay={i * 80}>
                <CaseCard study={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section id="method" className="section-light px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="eyebrow">How We Work</p>
            <h2 className="display-xl mt-6 text-3xl text-navy sm:text-5xl">The FORTY method</h2>
          </Reveal>
          <ol className="relative mt-16 grid gap-10 md:grid-cols-5 md:gap-6">
            <span
              aria-hidden
              className="absolute left-[13px] top-3 bottom-3 w-px bg-navy/15 md:left-0 md:right-0 md:top-[13px] md:bottom-auto md:h-px md:w-full"
            />
            {METHOD.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 90} className="relative pl-10 md:pl-0">
                <span className="absolute left-0 top-1 h-[26px] w-[26px] rounded-full border border-gold bg-cream md:relative md:block" />
                <span className="mt-0 block font-display text-xs tracking-[0.3em] text-gold md:mt-6">
                  {s.n}
                </span>
                <h3 className="display-xl mt-3 text-lg text-navy">{s.title}</h3>
                <p className="mt-2 text-sm font-medium text-navy/80">{s.lead}</p>
                <p className="mt-2 text-sm leading-relaxed text-navy/55">{s.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* THE RESET */}
      <section id="reset" className="grain relative overflow-hidden px-5 py-24 sm:px-8 sm:py-36">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-3xl border border-gold/30 px-6 py-16 text-center sm:px-14">
          <Reveal>
            <p className="eyebrow">The Reset</p>
            <h2 className="display-xl mt-6 text-3xl sm:text-5xl">Your brand needs a reset.</h2>
            <p className="mt-6 text-lg text-gold">Don't know what's wrong with your marketing? We do.</p>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-cream/65 sm:text-base">
              45–60 minutes. We'll identify what's working, what's broken, and what's missing — and
              leave you with 3 priority moves for your brand.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block bg-gold px-10 py-4 text-[0.7rem] uppercase tracking-[0.24em] text-navy transition-opacity hover:opacity-90"
            >
              Book Your Reset
            </a>
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-light px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="eyebrow">About FORTY</p>
            <h2 className="display-xl mt-6 text-2xl leading-tight text-navy sm:text-4xl">
              Most brands don't have an attention problem. They have a signal problem.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-base leading-relaxed text-navy/70">
              They're saying too much. Looking like everyone else. Creating without a clear reason.
              FORTY exists to change that. We help businesses find what makes them different — and turn
              that difference into something people can see, feel and remember.
            </p>
            <blockquote className="mt-10 border-l border-gold pl-6 font-display text-lg uppercase leading-snug tracking-[0.04em] text-navy sm:text-2xl">
              Good marketing gets attention. Great brands earn attention.
            </blockquote>
            <p className="mt-10 text-xs uppercase tracking-[0.24em] text-navy/45">
              Founded in Kenya. Built for wherever the brand wants to go.
            </p>
          </Reveal>
        </div>

        {/* LOGO MARQUEE — under About */}
        <Reveal delay={140}>
          <div className="mx-auto mt-20 max-w-7xl overflow-hidden border-t border-navy/10 pt-10">
            <p className="mb-6 text-center text-[0.6rem] uppercase tracking-[0.3em] text-navy/45">
              Brands we've worked with
            </p>
            <div className="relative flex overflow-hidden">
              <div className="marquee-track flex w-max shrink-0 items-center gap-16 pr-16">
                {[...CLIENTS, ...CLIENTS].map((c, i) => (
                  <span
                    key={`${c}-${i}`}
                    className="whitespace-nowrap font-display text-sm uppercase tracking-[0.34em] text-navy/40"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* BOOK WITH US */}
      <section id="contact" className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="grid gap-10 border border-border bg-navy-soft p-7 sm:p-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="eyebrow">Book with us</p>
                <h2 className="display-xl mt-6 text-2xl sm:text-4xl">Got something worth building?</h2>
                <p className="mt-6 text-sm leading-relaxed text-cream/65">
                  Tell us what you're working on. Whether you're launching something new, rebuilding
                  something old, or simply know your brand could be doing more — we'd like to hear
                  about it.
                </p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-block border-b border-gold pb-1 text-[0.7rem] uppercase tracking-[0.24em] text-gold"
                >
                  Schedule a Consultation
                </a>
              </div>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Logo className="h-7" />
            <p className="mt-5 text-[0.65rem] uppercase tracking-[0.3em] text-cream/50">
              Strategy. Creative. Distribution.
            </p>
          </div>
          <div className="grid gap-10 sm:grid-cols-3">
            <FooterCol
              title="Explore"
              links={[
                { label: "Work", href: "#work" },
                { label: "Services", href: "#services" },
                { label: "Our Method", href: "#method" },
                { label: "About", href: "#about" },
                { label: "The Reset", href: "#reset" },
              ]}
            />
            <FooterCol
              title="Work With Us"
              links={[
                { label: "Book a Consultation", href: BOOKING_URL, external: true },
                { label: "Contact", href: "#contact" },
                { label: "The Reset", href: "#reset" },
              ]}
            />
            <FooterCol
              title="Social"
              links={[
                { label: "Instagram", href: "https://instagram.com", external: true },
                { label: "TikTok", href: "https://tiktok.com", external: true },
                { label: "LinkedIn", href: "https://linkedin.com", external: true },
                { label: "YouTube", href: "https://youtube.com", external: true },
              ]}
            />
          </div>
        </div>
        <p className="mx-auto mt-14 max-w-7xl border-t border-border pt-8 text-[0.65rem] uppercase tracking-[0.22em] text-cream/35">
          © 2026 FORTY. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div>
      <p className="text-[0.6rem] uppercase tracking-[0.3em] text-gold">{title}</p>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-sm text-cream/60 transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CaseCard({ study }: { study: CaseStudy }) {
  const [open, setOpen] = useState(false);
  const expandable = !study.soon;

  return (
    <article className="border border-border bg-navy-soft/40">
      <button
        type="button"
        onClick={() => expandable && setOpen((v) => !v)}
        aria-expanded={expandable ? open : undefined}
        disabled={!expandable}
        className="grid w-full grid-cols-1 items-stretch text-left md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]"
      >
        {study.image ? (
          <img
            src={study.image}
            alt={`${study.client} case study`}
            loading="lazy"
            width={1280}
            height={960}
            className="h-56 w-full object-cover md:h-full"
          />
        ) : (
          <div className="grid h-56 place-items-center bg-navy md:h-full">
            <span className="text-[0.6rem] uppercase tracking-[0.3em] text-cream/25">
              Coming Soon
            </span>
          </div>
        )}
        <div className="flex flex-col justify-center gap-4 p-7 sm:p-10">
          <span className="font-display text-xs tracking-[0.3em] text-gold">{study.n}</span>
          <h3 className="display-xl text-xl sm:text-3xl">{study.client}</h3>
          <p className="text-sm leading-relaxed text-cream/60 sm:text-base">{study.hook}</p>
          <span className="mt-2 text-[0.65rem] uppercase tracking-[0.24em] text-gold">
            {expandable ? (open ? "Close case study —" : "Read the case study +") : "Coming Soon"}
          </span>
        </div>
      </button>
      {expandable && open && (
        <div className="grid gap-8 border-t border-border p-7 sm:grid-cols-2 sm:p-10">
          {study.detail?.map((d) => (
            <div key={d.label}>
              <p className="text-[0.6rem] uppercase tracking-[0.3em] text-gold">{d.label}</p>
              <p className="mt-3 text-sm leading-relaxed text-cream/65">{d.text}</p>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  const field =
    "w-full border border-border bg-navy px-4 py-3 text-sm text-cream placeholder:text-cream/35 focus:border-gold focus:outline-none";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input required name="name" placeholder="Name" className={field} />
      <input required type="email" name="email" placeholder="Email" className={field} />
      <input name="phone" placeholder="Phone" className={field} />
      <textarea required name="message" rows={4} placeholder="Message" className={field} />
      <button
        type="submit"
        className="w-full bg-gold px-6 py-4 text-[0.7rem] uppercase tracking-[0.24em] text-navy transition-opacity hover:opacity-90"
      >
        Tell Us About Your Project
      </button>
      {sent && (
        <p className="text-xs uppercase tracking-[0.2em] text-gold">
          Thank you — we'll be in touch.
        </p>
      )}
    </form>
  );
}
