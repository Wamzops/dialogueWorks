import FadeIn from "@/components/FadeIn";
import { Footer } from "@/components/ui";
import CTASection from "@/components/layout/cta-section";
import Image from "next/image";
import Link from "next/link";

const expertise = [
  {
    title: "Conflict Prevention",
    body: "Drawing from community intelligence, early-warning systems, and stakeholder mapping, we identify tension before it escalates. Our prevention frameworks are grounded in local context and designed to be owned and sustained by the communities themselves.",
  },
  {
    title: "Dialogue Facilitation",
    body: "Informed by decades of practice and grounded in evidence, we design and lead structured dialogue processes that do more than surface grievances — they build the trust and shared understanding needed for durable agreements.",
    image: "/images/S2.jpeg",
    imageAlt: "Facilitator leading a community dialogue session",
  },
  {
    title: "Resilience Building",
    body: "Lasting peace requires communities that can absorb shocks and adapt. We work alongside local organisations to strengthen social cohesion, inclusive governance, and the relational infrastructure that holds communities together under pressure.",
  },
  {
    title: "Training & Capacity",
    body: "We equip peacebuilders, civil society leaders, and local authorities with the skills and frameworks they need to sustain peace long after our engagement ends — from mediation technique to trauma-informed facilitation.",
    image: "/images/S3.jpeg",
    imageAlt: "Training workshop participants",
  },
  {
    title: "Research & Learning",
    body: "Every engagement generates knowledge. We document, evaluate, and share what we learn so that communities, practitioners, and partners can continuously improve their peacebuilding practice.",
        image: "/images/S6.jpeg",
    imageAlt: "Training workshop participants",
  },
  {
    title: "Programme Design",
    body: "We partner with donors, governments, and NGOs to design contextually appropriate, theory-of-change-driven programmes — from scoping and co-design through to monitoring and adaptive management.",
    imageAlt: "Training workshop participants",
  },
];

const engagements = [
  {
    title: "Community Programmes",
    body: "Most of our work takes the form of sustained, place-based engagements — typically phased to allow for learning and adaptation. We define clear outcomes at the outset and build in regular reflection to ensure the work stays relevant and effective.",
  },
  {
    title: "Advisory & Strategy",
    body: "Sometimes organisations need a thought partner more than an implementer. We offer strategic advisory support to help you clarify your theory of change, sharpen your programming, or navigate a complex conflict context.",
  },
  {
    title: "Training & Workshops",
    body: "Focused, time-bound interventions — a single workshop, a facilitation retreat, or a multi-day training. These are scoped upfront with defined learning objectives and a fixed investment.",
  },
  {
    title: "Ongoing Partnership",
    body: "The relationships we build with communities and partners don't end when a project does. Many of our most impactful partnerships have grown over years, with ongoing learning, iteration, and deepening trust at their core.",
  },
];

export default function ServicesPage() {
  return (
    <div className="antialiased bg-white text-primary font-body">

      {/* ── Hero ── */}
      <section className="pt-32 md:pt-48 pb-16 md:pb-24 px-6 sm:px-12 md:px-20 lg:px-32 bg-violet-100">
        <div className="max-w-5xl mx-auto">
          <FadeIn direction="up">
            <p className="text-[11px] font-black uppercase tracking-[0.45em] text-primary/40 mb-8">
              Services
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <h1 className="font-heading fs-xxl font-semibold leading-[1.05] tracking-tight text-primary mb-10">
              We design and deliver frameworks that turn dialogue into lasting peace.
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <p className="text-lg md:text-xl font-light text-primary/65 leading-relaxed max-w-3xl">
              We are a solution-oriented team of peacebuilders and practitioner-researchers. Our work is grounded in community evidence and guided by a clear theory of change. We focus on your context and your people, making sure we fully understand the conflict landscape before co-designing a response. Once we know why peace is possible and what we want to achieve, we figure out how.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Banner image ── */}
      <FadeIn direction="up">
        <div className="px-6 sm:px-12 md:px-20 lg:px-32 mb-20 md:mb-32">
          <div className="max-w-5xl mx-auto relative aspect-[16/7]  overflow-hidden">
            <Image
              src="/images/S5.jpeg"
              alt="Dialogue Works team facilitating a community session"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </FadeIn>

      {/* ── How We Work ── */}
      <section className="px-6 sm:px-12 md:px-20 lg:px-32 mb-20 md:mb-32">
        <div className="max-w-5xl mx-auto">
          <FadeIn direction="up">
            <h2 className="font-heading fs-lg font-semibold tracking-tight mb-8">
              How We Work
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <div className="prose prose-lg prose-primary max-w-3xl font-light text-primary/70 leading-relaxed space-y-6">
              <p>
                In any complex peacebuilding initiative there are things that feel unclear at the outset — tensions that are hard to name, stakeholders who are hard to reach, and histories that complicate the present. We help partners illuminate those dynamics and see the way forward more clearly.
              </p>
              <p>
                Whether it is a focused scoping mission or a multi-year programme, we always start with deep listening. That means asking questions, mapping relationships, surfacing hidden interests, and making recommendations. Sometimes that is all a partner needs — and that is great. We will set you up for success and walk alongside you as far as makes sense.
              </p>
              <p>
                Usually, however, listening is just the first step. We move into design, facilitation, training, and sustained community accompaniment — and we stay engaged after key milestones to help communities maintain and build on the gains they have made.
              </p>
              <p>
                If you have in-house programme staff or community-based partners who will lead implementation, we can provide strategic design, facilitation leadership, and documentation support — handing over tools and frameworks so your team can carry the work forward independently.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Who We Work With ── */}
      <section className="px-6 sm:px-12 md:px-20 lg:px-32 mb-20 md:mb-32 border-t border-primary/10 pt-16">
        <div className="max-w-5xl mx-auto">
          <FadeIn direction="up">
            <h2 className="font-heading fs-lg font-semibold tracking-tight mb-8">
              Who We Work With
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <div className="prose prose-lg max-w-3xl font-light text-primary/70 leading-relaxed space-y-6">
              <p>
                We excel across a range of conflict contexts, but some of our most transformative work has been in{" "}
                <Link href="/work/community" className="underline underline-offset-4 hover:text-primary transition-colors">pastoral communities</Link>,{" "}
                <Link href="/work/urban" className="underline underline-offset-4 hover:text-primary transition-colors">urban neighbourhoods</Link>,{" "}
                <Link href="/work/institutional" className="underline underline-offset-4 hover:text-primary transition-colors">institutional settings</Link>, and{" "}
                <Link href="/work/regional" className="underline underline-offset-4 hover:text-primary transition-colors">cross-border regions</Link>.
              </p>
              <p>
                We work best with partners who are genuinely invested in community voice and willing to let evidence shape the intervention. Our favourite partners treat us as an extension of their team — and we do the same. We love working with organisations who are willing to invest energy and trust in co-creating solutions, so we are usually not the right fit for those who simply want an activity delivered on a predetermined plan.
              </p>
            </div>
          </FadeIn>

          {/* Pull quote */}
          <FadeIn direction="up" delay={0.2}>
            <blockquote className="mt-16 border-l-4 border-secondary pl-8 max-w-2xl">
              <p className="text-xl md:text-2xl font-light text-violet-500 leading-relaxed italic mb-4">
                "Dialogue Works challenges us. They ask questions and we talk about our goals. They learn the 'why' before recommending the 'what' and deciding on the 'how.' If you want a genuine partner in peace, start a conversation with them."
              </p>
              <cite className="text-[12px] font-black uppercase tracking-[0.3em] text-primary/40 not-italic">
                — Programme Director, Partner Organisation
              </cite>
            </blockquote>
          </FadeIn>
        </div>
      </section>

      {/* ── Our Expertise ── */}
      <section className="px-6 sm:px-12 md:px-20 lg:px-32 mb-20 md:mb-32 border-t border-primary/10 pt-16">
        <div className="max-w-5xl mx-auto">
          <FadeIn direction="up">
            <h2 className="font-heading fs-lg font-semibold tracking-tight mb-6">
              Our Expertise
            </h2>
            <p className="text-lg font-light text-primary/65 max-w-2xl leading-relaxed mb-16">
              We work beside you as a strategic partner to find and execute the best possible approach. Each of us are deep practitioners in our fields — and because we are a collaborative, multidisciplinary team, our shared knowledge shapes everything we do.
            </p>
          </FadeIn>

          <div className="space-y-0">
            {expertise.map(({ title, body, image, imageAlt }, i) => (
              <FadeIn key={title} direction="up" delay={i * 0.05}>
                <div className="border-t border-primary/10 py-10">
                  <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                    <h3 className="text-xl font-semibold tracking-tight md:w-1/3 shrink-0 pt-1">
                      {title}
                    </h3>
                    <div className="md:w-2/3">
                      <p className="text-lg font-light text-primary/65 leading-relaxed">
                        {body}
                      </p>
                      {image && (
                        <div className="relative mt-8 aspect-[16/7] rounded-2xl overflow-hidden">
                          <Image src={image} alt={imageAlt ?? title} fill className="object-cover" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Second pull quote ── */}
      <section className="px-6 sm:px-12 md:px-20 lg:px-32 mb-20 md:mb-32">
        <div className="max-w-5xl mx-auto">
          <FadeIn direction="up">
            <blockquote className="border-l-4 border-secondary pl-8 max-w-2xl">
              <p className="text-xl md:text-2xl font-light text-violet-500 leading-relaxed italic mb-4">
                "We've been working with Dialogue Works since 2016 and they are truly an extension of our community team. Their ability and willingness to discuss ideas and solve hard problems as strategic partners has continued to shape our peacebuilding strategy."
              </p>
              <cite className="text-[12px] font-black uppercase tracking-[0.3em] text-primary/40 not-italic">
                — Head of Programmes, Regional Partner
              </cite>
            </blockquote>
          </FadeIn>
        </div>
      </section>

      {/* ── Types of Engagements ── */}
      <section className="px-6 sm:px-12 md:px-20 lg:px-32 mb-20 md:mb-32 border-t border-primary/10 pt-16">
        <div className="max-w-5xl mx-auto">
          <FadeIn direction="up">
            <h2 className="font-heading fs-lg font-semibold tracking-tight mb-6">
              Types of Engagements
            </h2>
            <p className="text-lg font-light text-primary/65 max-w-2xl leading-relaxed mb-16">
              We will work with you to shape a partnership that fits your context, your resources, and your goals.
            </p>
          </FadeIn>

          <div className="space-y-0">
            {engagements.map(({ title, body }, i) => (
              <FadeIn key={title} direction="up" delay={i * 0.05}>
                <div className="border-t border-primary/10 py-10">
                  <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                    <h3 className="text-xl font-semibold tracking-tight md:w-1/3 shrink-0 pt-1">
                      {title}
                    </h3>
                    <p className="text-lg font-light text-primary/65 leading-relaxed md:w-2/3">
                      {body}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section className="px-6 sm:px-12 md:px-20 lg:px-32 py-24 md:py-40 bg-violet-600 text-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
          <FadeIn direction="up">
            <h2 className="font-heading fs-xl font-semibold leading-[1.05] tracking-tight max-w-2xl">
              We can't wait to hear what you have in mind.
            </h2>
            <p className="text-lg font-light text-white/60 max-w-xl mt-6 leading-relaxed">
              You have ideas, goals, and maybe a little uncertainty about where to start. That is okay — you do not have to have everything figured out. We are really good at that part.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.2} className="shrink-0">
            <Link
              href="/contact"
              className="inline-block text-[13px] font-bold uppercase tracking-[0.3em] border-b-2 border-secondary text-secondary pb-2 hover:text-white hover:border-white transition-all whitespace-nowrap"
            >
              Let's Talk →
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer companyName="Dialogue Works" />
    </div>
  );
}