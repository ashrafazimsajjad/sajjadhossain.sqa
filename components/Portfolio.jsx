 "use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUp, BookOpen, CheckCircle2, Code2, ExternalLink, Github,
  Linkedin, Mail, Menu, Phone, ShieldCheck, Smartphone, Gauge, GitBranch, X
} from "lucide-react";

const skills = [
  ["QA Strategy & Planning", "Requirements analysis • Risk identification • Test planning • Test case design"],
  ["Test Execution", "SIT • UAT • Functional • Regression • Smoke • Production validation"],
  ["Test Automation", "Selenium WebDriver • Appium • Playwright with Python (learning)"],
  ["API & Service Testing", "Postman • API validation • Service integration testing"],
  ["Performance Testing", "Apache JMeter • Load testing • Transaction performance testing"],
  ["Mobile Testing", "Android • iOS • Huawei platform testing"],
  ["QA Tools & Quality", "Jira • Git • Telescope • Defect management • Root cause analysis"],
  ["Delivery & Support", "Agile/Scrum • SDLC/STLC • Release validation • Production support"]
];

const projects = [
  {
    title: "FastPay Digital Wallet Ecosystem",
    tag: "FinTech / Payments",
    icon: <ShieldCheck className="h-6 w-6" />,
    description: "Large-scale digital wallet ecosystem serving millions of customers and thousands of merchants across mobile apps, web platforms, APIs and financial services.",
    points: ["Payments, wallet and QR transactions", "Reconciliation, settlement and commission calculations", "SIT, UAT, API, automation, performance and production validation"]
  },
  {
    title: "Service SDK Platform",
    tag: "Travel / Mobile SDK",
    icon: <Smartphone className="h-6 w-6" />,
    description: "Digital travel and services platform integrated with First Iraqi Bank and FastPay, with mobile SDK-based services.",
    points: ["Flight booking, hotels, eSIM and airline ticketing", "Travel workflow and payment integration testing", "SDK functionality and release validation"]
  },
  {
    title: "Iraq Charity Lottery Management System",
    tag: "Payments / Lottery",
    icon: <Code2 className="h-6 w-6" />,
    description: "Charity lottery management platform integrated with multiple payment gateways for lottery operations and digital transactions.",
    points: ["Lottery workflow and transaction lifecycle validation", "Payment gateway integration testing", "Functional, integration, regression and production testing"]
  },
  {
    title: "Shotmob Football Live Score Application",
    tag: "Sports / Mobile App",
    icon: <Gauge className="h-6 w-6" />,
    description: "Live-score application focused on Iraqi football clubs, delivering match updates and football information to users.",
    points: ["Live-score workflows and app functionality", "Functional, regression and release testing", "Defect investigation and fix verification"]
  },
  {
    title: "Kartat Card Management System",
    tag: "Card Management / Non-production",
    icon: <GitBranch className="h-6 w-6" />,
    description: "Card management platform for card lifecycle operations, configurations and related financial card services.",
    points: ["Card lifecycle and configuration validation", "Financial card service testing"]
  },
  {
    title: "GlobPay Cross-Border Payment Platform",
    tag: "FinTech / Non-production",
    icon: <ShieldCheck className="h-6 w-6" />,
    description: "Cross-border payment platform supporting international transaction workflows.",
    points: ["Beneficiary management workflows", "Country-level banking configuration validation"]
  }
];

const experience = [
  {
    company: "Newroz Technologies Limited",
    period: "Mar 2021 — Present",
    roles: [
      {
        period: "Jan 2026 — Present",
        role: "Senior Software Quality Assurance Engineer",
        bullets: [
          "Lead QA activities for large-scale FinTech products, ensuring quality, reliability and stability across critical business workflows.",
          "Own requirement analysis, test planning, execution, release validation and production verification.",
          "Lead testing for payment systems, transaction workflows, API integrations and customer-facing applications.",
          "Improve test strategies for stronger coverage and earlier risk identification; mentor team members and strengthen QA practices.",
          "Collaborate with product managers, developers and business teams to improve product quality and delivery."
        ]
      },
      {
        period: "Jul 2023 — Dec 2025",
        role: "Software Quality Assurance Engineer",
        bullets: [
          "Independently managed QA across FinTech and digital products, focusing on functional testing, API validation and complex business workflows.",
          "Created and executed test scenarios, test cases and regression suites from business requirements.",
          "Tested payment flows, transaction lifecycles, backend APIs, third-party integrations and mobile applications.",
          "Validated API requests, responses, business logic and error handling using Postman.",
          "Managed defects in Jira and supported UAT, release testing and production verification."
        ]
      },
      {
        period: "Mar 2021 — Jun 2023",
        role: "Junior Software Quality Assurance Engineer",
        bullets: [
          "Executed functional, regression and exploratory testing based on requirements.",
          "Prepared test cases, reported defects and worked with developers to verify fixes.",
          "Applied QA processes, Agile methodologies and defect management practices while supporting end-to-end digital product testing."
        ]
      }
    ]
  },
  {
    company: "Tomattos Technologies Limited",
    period: "Dec 2018 — Jul 2019",
    roles: [
      {
        period: "Dec 2018 — Jul 2019",
        role: "Intern",
        bullets: [
          "Provided technical support and customer assistance for website-related issues.",
          "Supported website management and e-commerce activities using WordPress, WooCommerce and Elementor.",
          "Managed website content and created blog and medical article content."
        ]
      }
    ]
  }
];

const adventures = [
  {
    place: "Cox's Bazar",
    title: "Beach sunrise",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85"
  },
  {
    place: "Sajek Valley",
    title: "Mountain clouds",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85"
  },
  {
    place: "Sylhet & Jaflong",
    title: "Green escape",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85"
  }
];

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const nav = ["About", "Skills", "Projects", "Experience", "Contact"];

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  async function handleContactSubmit(event) {
    event.preventDefault();
    setFormStatus("Saving...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error("Unable to save your message.");
      }

      setForm({ name: "", email: "", message: "" });
      setFormStatus("Thanks! Your message has been saved.");
    } catch {
      setFormStatus("Something went wrong. Please try again.");
    }
  }

  return (
    <main className="min-h-screen overflow-hidden">
      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-ink/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#home" className="font-bold tracking-tight">
            <span className="text-cyan-300">&lt;</span>SH<span className="text-cyan-300">/&gt;</span>
          </a>
          <nav className="hidden gap-7 text-sm text-gray-300 md:flex">
            {nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white">{item}</a>)}
          </nav>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="border-t border-white/5 bg-ink px-5 py-4 md:hidden">
            {nav.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)} className="block py-3 text-gray-300">
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      <section id="home" className="grid-bg relative flex min-h-screen items-center pt-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.25fr_.75fr]">
          <motion.div initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/5 px-4 py-2 text-sm text-cyan-200">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
              Available for QA / Automation opportunities
            </div>
            <p className="mb-3 text-lg text-gray-400">Hi, I&apos;m</p>
            <h1 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              Sajjad <span className="gradient-text">Hossain</span>
            </h1>
            <h2 className="mt-5 text-2xl font-semibold text-gray-200 md:text-3xl">Senior Software QA Engineer</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              I help teams ship reliable software through thoughtful test strategy, automation,
              API validation and performance testing — with a strong focus on FinTech and payment systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:ashrafazimsajjad@gmail.com?subject=Resume%20Request" className="inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-200">
                <Mail className="h-4 w-4" /> Request Resume
              </a>
              <a href="https://github.com/ashrafazimsajjad" target="_blank" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 font-semibold hover:bg-white/5">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/ashrafazimsajjad/" target="_blank" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 font-semibold hover:bg-white/5">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div initial={{opacity:0,scale:.92}} animate={{opacity:1,scale:1}} transition={{duration:.8,delay:.15}} className="relative">
            <div className="absolute -inset-10 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="card relative p-7">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm text-gray-500">QA_ENGINEER.exe</span>
                <span className="text-xs text-emerald-300">ONLINE</span>
              </div>
              <div className="space-y-4 font-mono text-sm">
                <div><span className="text-violet-300">Currently</span> at = <span className="text-cyan-300">&quot;Newroz Technologies Ltd.&quot;</span>;</div>
                <div><span className="text-violet-300">const</span> focus = [</div>
                <div className="pl-5 text-gray-400">&quot;Automation&quot;, &quot;API&quot;,</div>
                <div className="pl-5 text-gray-400">&quot;FinTech&quot;, &quot;Performance&quot;</div>
                <div>];</div>
                <div className="pt-3 text-emerald-300">// Quality is built, not inspected in.</div>
              </div>
              <div className="mt-7 grid grid-cols-3 gap-3">
                {[
                  ["5+", "Years"],
                  ["API", "Testing"],
                  ["E2E", "QA"]
                ].map(([a,b]) => (
                  <div key={b} className="rounded-xl border border-white/5 bg-white/[.03] p-4 text-center">
                    <div className="text-xl font-bold text-white">{a}</div>
                    <div className="mt-1 text-xs text-gray-500">{b}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-5 py-24">
        <p className="section-kicker">About me</p>
        <h2 className="section-title">Quality engineering with a product mindset.</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <p className="leading-8 text-gray-400">
            I&apos;m a Senior Software QA Engineer with 5+ years of experience in FinTech,
            digital wallets, payment systems and enterprise applications. My work spans mobile,
            web, APIs and backend services, from requirement analysis through release and production validation.
          </p>
          <p className="leading-8 text-gray-400">
            I focus on finding risks early, building maintainable automation, validating critical
            financial workflows and collaborating closely with engineering and product teams to improve software quality.
          </p>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-5 py-24">
        <p className="section-kicker">Toolkit</p>
        <h2 className="section-title">Skills & technologies</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(([title, sub], i) => (
            <motion.div key={title} initial={{opacity:0,y:15}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.05}} className="card p-5">
              <div className="mb-3 flex items-center gap-3 text-white">
                <CheckCircle2 className="h-5 w-5 text-cyan-300" /> <span className="font-semibold">{title}</span>
              </div>
              <p className="text-sm leading-6 text-gray-500">{sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-5 py-24">
        <p className="section-kicker">Selected work</p>
        <h2 className="section-title">Projects & QA expertise</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article key={p.title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}} className="card p-7">
              <div className="flex items-start justify-between gap-4">
                <div className="rounded-xl bg-cyan-300/10 p-3 text-cyan-300">{p.icon}</div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">{p.tag}</span>
              </div>
              <h3 className="mt-6 text-xl font-bold">{p.title}</h3>
              <p className="mt-3 leading-7 text-gray-400">{p.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-gray-400">
                {p.points.map(x => <li key={x} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />{x}</li>)}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="publications" className="mx-auto max-w-6xl px-5 py-24">
        <p className="section-kicker">Research & writing</p>
        <h2 className="section-title">Featured publication</h2>
        <div className="mt-10">
          <motion.article initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="card relative overflow-hidden p-7 md:p-9">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-violet-400/10 blur-3xl" />
            <div className="relative grid gap-8 md:grid-cols-[auto_1fr_auto] md:items-center">
              <div className="w-fit rounded-2xl bg-violet-400/10 p-4 text-violet-300">
                <BookOpen className="h-7 w-7" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[.18em] text-violet-300">
                  <span>Springer Book Chapter</span>
                  <span className="text-gray-600">•</span>
                  <span>2026</span>
                </div>
                <h3 className="mt-4 max-w-3xl text-2xl font-bold leading-tight text-white">Customer Behavior, Adoption and Retention in Software Markets: An AI-Based Analysis for Strategic Growth of Software Business</h3>
              </div>
              <a href="https://link.springer.com/chapter/10.1007/978-3-032-13003-7_4" target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-violet-200 md:w-auto md:justify-self-end">
                Read on Springer <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </motion.article>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-5 py-24">
        <p className="section-kicker">Career</p>
        <h2 className="section-title">Experience</h2>
        <div className="mt-10 space-y-2">
          {experience.map((company) => (
            <div key={company.company} className="relative mb-10 last:mb-0">
              <div className="card p-6 md:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-white md:text-2xl">{company.company}</h3>
                    <p className="mt-1 text-sm text-gray-400">
                      {company.company === "Newroz Technologies Limited"
                        ? "5+ years"
                        : company.company === "Tomattos Technologies Limited"
                          ? "8 months"
                          : company.period}
                    </p>
                  </div>
                </div>
                <div className="mt-7 space-y-8 border-l border-white/10 pl-5">
                  {company.roles.map((role) => (
                    <div key={role.role} className="relative">
                      <span className="absolute -left-[25px] top-1.5 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                      <p className="text-sm text-cyan-300">{role.period}</p>
                      <h4 className="mt-1 text-lg font-semibold text-white">{role.role}</h4>
                      <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-400">
                        {role.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3">
                            <span className="text-cyan-300">•</span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="travel" className="mx-auto max-w-6xl px-5 py-24">
        <p className="section-kicker">Travel</p>
        <h2 className="section-title">Adventure stories & memorable escapes</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {adventures.map((trip, i) => (
            <motion.article key={trip.place} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}} className="card group overflow-hidden">
              <img src={trip.image} alt={`${trip.title} in ${trip.place}`} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="p-6">
                <p className="text-xs uppercase tracking-[.2em] text-cyan-300">{trip.place}</p>
                <h3 className="mt-2 text-xl font-bold text-white">{trip.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-300/10 bg-gradient-to-br from-cyan-300/10 to-violet-500/10 p-6 md:p-10">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-300/10 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="section-kicker">Contact</p>
              <h2 className="section-title">Let&apos;s build reliable software together.</h2>
              <p className="mt-5 leading-7 text-gray-400">
                Have a QA challenge, automation idea or opportunity to discuss?
                Send a message and I&apos;ll get back to you soon.
              </p>
              <div className="mt-8 space-y-3">
                <a href="mailto:ashrafazimsajjad@gmail.com" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/10 p-4 transition hover:border-cyan-300/30 hover:bg-white/5">
                  <span className="rounded-xl bg-cyan-300/10 p-3 text-cyan-300"><Mail className="h-5 w-5" /></span>
                  <span><span className="block text-xs uppercase tracking-[.18em] text-gray-500">Email</span><span className="text-sm text-gray-200">ashrafazimsajjad@gmail.com</span></span>
                </a>
                <a href="tel:+8801675972634" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/10 p-4 transition hover:border-cyan-300/30 hover:bg-white/5">
                  <span className="rounded-xl bg-cyan-300/10 p-3 text-cyan-300"><Phone className="h-5 w-5" /></span>
                  <span><span className="block text-xs uppercase tracking-[.18em] text-gray-500">Phone</span><span className="text-sm text-gray-200">+880 1675-972634</span></span>
                </a>
              </div>
              <div className="mt-6 flex items-center gap-3 text-sm text-gray-400">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-300" />
                Usually replies within 24 hours
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="https://www.linkedin.com/in/ashrafazimsajjad/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-semibold hover:bg-white/5">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a href="mailto:ashrafazimsajjad@gmail.com" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-semibold hover:bg-white/5">
                  <Mail className="h-4 w-4" /> Email directly
                </a>
              </div>
            </div>
            <form onSubmit={handleContactSubmit} className="rounded-2xl border border-white/10 bg-black/20 p-5 md:p-7">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">Send a message</h3>
                <p className="mt-1 text-sm text-gray-500">Your message will be saved securely for follow-up.</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-gray-300">
                  Name
                  <input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-cyan-300/50" placeholder="Your name" />
                </label>
                <label className="grid gap-2 text-sm font-medium text-gray-300">
                  Email
                  <input required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className="rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-cyan-300/50" placeholder="you@example.com" />
                </label>
                <label className="grid gap-2 text-sm font-medium text-gray-300 md:col-span-2">
                  Message
                  <textarea required rows={5} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} className="resize-y rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-cyan-300/50" placeholder="How can I help?" />
                </label>
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-200">
                  <Mail className="h-4 w-4" /> Save message
                </button>
                {formStatus && <p role="status" className="text-sm text-cyan-200">{formStatus}</p>}
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-8 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Sajjad Hossain. All rights reserved.
      </footer>

      {showScrollTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/30 bg-slate-950/90 text-cyan-300 shadow-lg shadow-cyan-950/40 backdrop-blur transition hover:-translate-y-1 hover:bg-cyan-300 hover:text-slate-950"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </main>
  );
}