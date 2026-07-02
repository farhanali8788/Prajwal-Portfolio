import { useState } from "react";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import MagneticButton from "../ui/MagneticButton";
import { profile, socials, budgets } from "../../data/content";

// Replace with your real Formspree endpoint, e.g. https://formspree.io/f/abcdwxyz
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdarpade";

const inputBase =
  "w-full border-b border-line bg-transparent py-3 text-ink placeholder:text-muted/60 outline-none transition-colors duration-300 focus:border-gold";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [budget, setBudget] = useState(budgets[0]);
  // 'idle' | 'sending' | 'success' | 'error'
  const [status, setStatus] = useState("idle");

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", project: "", message: "" });
        setBudget(budgets[0]);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-line/60 py-24 md:py-36"
    >
      {/* cinematic backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/assets/bts-3.jpg')] bg-cover bg-center opacity-[0.07] mix-blend-luminosity" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,#15120a_0%,#0a0a0a_55%,#070707_100%)]" />
        <div className="absolute -left-24 bottom-0 h-[420px] w-[420px] rounded-full bg-gold/10 blur-[130px] animate-leak" />
      </div>

      <div className="shell">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* left — invitation */}
          <div className="lg:col-span-5">
            <SectionHeader
              roll="10"
              eyebrow="Start a Project"
              title="Let's Tell Your Story"
            />

            <Reveal dir="up" delay={0.1}>
              <p className="mt-8 max-w-md text-[15px] leading-relaxed text-muted">
                Have a film in mind — a brand, a space, a product, a
                conversation worth capturing? Tell me about it. I read every
                message.
              </p>
            </Reveal>

            <Reveal dir="up" delay={0.15}>
              <div className="mt-10 space-y-3">
                <a
                  href={`mailto:${profile.email}`}
                  data-cursor="link"
                  className="block font-display text-2xl uppercase tracking-wide text-ink transition-colors hover:text-gold md:text-3xl"
                >
                  {profile.email}
                </a>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  data-cursor="link"
                  className="block font-mono text-sm tracking-wide text-muted transition-colors hover:text-gold"
                >
                  {profile.phone}
                </a>
              </div>
            </Reveal>

            <Reveal dir="up" delay={0.2}>
              <div className="mt-10 flex flex-wrap gap-3">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={label}
                    data-cursor="link"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:text-gold"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* right — form */}
          <div className="lg:col-span-7">
            <Reveal dir="up" delay={0.1}>
              {status === "success" ? (
                <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-line bg-card/60 p-10 text-center backdrop-blur-md md:p-16">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold">
                    <FiCheck size={24} />
                  </span>
                  <p className="mt-6 font-display text-2xl text-ink md:text-3xl">
                    Message sent
                  </p>
                  <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-muted">
                    Thanks for reaching out — I'll get back to you within a day
                    or two.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    data-cursor="link"
                    className="mt-8 font-mono text-[12px] uppercase tracking-[0.25em] text-gold underline-offset-4 hover:underline"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-line bg-card/60 p-7 backdrop-blur-md md:p-10"
                >
                  <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                    <div>
                      <label className="eyebrow mb-2 block">Name</label>
                      <input
                        required
                        name="name"
                        value={form.name}
                        onChange={set("name")}
                        placeholder="Your name"
                        className={inputBase}
                      />
                    </div>
                    <div>
                      <label className="eyebrow mb-2 block">Email</label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={set("email")}
                        placeholder="you@email.com"
                        className={inputBase}
                      />
                    </div>
                  </div>

                  <div className="mt-7">
                    <label className="eyebrow mb-2 block">Project</label>
                    <input
                      name="project"
                      value={form.project}
                      onChange={set("project")}
                      placeholder="Brand film, real estate, podcast…"
                      className={inputBase}
                    />
                  </div>

                  {/* budget pills */}
                  <div className="mt-8">
                    <label className="eyebrow mb-3 block">Budget</label>
                    <input type="hidden" name="budget" value={budget} />
                    <div className="flex flex-wrap gap-2.5">
                      {budgets.map((b) => {
                        const on = budget === b;
                        return (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setBudget(b)}
                            data-cursor="link"
                            className={`rounded-full border px-4 py-2 text-[12px] tracking-wide transition-all duration-300 ${
                              on
                                ? "border-gold bg-gold/10 text-gold"
                                : "border-line text-muted hover:border-gold/40 hover:text-ink"
                            }`}
                          >
                            {b}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-8">
                    <label className="eyebrow mb-2 block">Message</label>
                    <textarea
                      required
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={set("message")}
                      placeholder="Tell me about the story you want to tell…"
                      className={`${inputBase} resize-none`}
                    />
                  </div>

                  {/* honeypot field — hidden from users, catches bots */}
                  <input
                    type="text"
                    name="_gotcha"
                    className="hidden"
                    tabIndex="-1"
                    autoComplete="off"
                  />

                  {status === "error" && (
                    <p className="mt-6 text-sm text-red-400">
                      Something went wrong sending your message. Please try
                      again, or email me directly.
                    </p>
                  )}

                  <div className="mt-10">
                    <MagneticButton
                      variant="gold"
                      type="submit"
                      disabled={status === "sending"}
                    >
                      {status === "sending" ? (
                        "Sending…"
                      ) : (
                        <>
                          Send Message <FiArrowUpRight size={16} />
                        </>
                      )}
                    </MagneticButton>
                  </div>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
