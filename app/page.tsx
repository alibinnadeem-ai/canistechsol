import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Section, SectionHeader } from '@/components/ui/section';
import { SiteShell } from '@/components/site/site-shell';

const capabilities = [
  {
    title: 'Defense Solutions',
    description: 'Border control, surveillance, and unmanned systems initiatives designed for mission-critical environments.',
  },
  {
    title: 'Industrial Technology',
    description: 'Monitoring and automation systems that help teams optimize operations and improve reliability.',
  },
  {
    title: 'Cyber Security',
    description: 'Security programs and advisory services focused on resilience, awareness, and risk reduction.',
  },
  {
    title: 'Training & Certification',
    description: 'Technical and management training tracks for teams building modern capability at scale.',
  },
];

const workflow = [
  {
    step: '01',
    title: 'Discover',
    detail: 'We align with your mission, constraints, and technology goals.',
  },
  {
    step: '02',
    title: 'Design',
    detail: 'We structure practical solution architecture and delivery plans.',
  },
  {
    step: '03',
    title: 'Deploy',
    detail: 'We implement, validate, and transition with measurable outcomes.',
  },
];

export default function HomePage() {
  return (
    <SiteShell>
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <Badge>Welcome</Badge>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Building resilient technology for defense, industry, and digital growth.</h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          Canis Technology Solutions combines security expertise, systems engineering, and product delivery to help organizations modernize with confidence.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/contact-us">Start a conversation</Button>
          <Button href="/about-us" variant="secondary">
            Meet the team
          </Button>
        </div>
      </section>

      <Section>
        <SectionHeader eyebrow="Capabilities" title="What we deliver" description="Core service areas that anchor our delivery model across sectors." />
        <div className="grid gap-5 md:grid-cols-2">
          {capabilities.map((item) => (
            <Card key={item.title}>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Approach" title="How we execute" description="A lean and transparent process we apply to project delivery." />
        <div className="grid gap-5 md:grid-cols-3">
          {workflow.map((item) => (
            <Card key={item.step} className="p-5">
              <p className="text-sm font-semibold text-slate-500">Step {item.step}</p>
              <CardTitle className="mt-2 text-lg">{item.title}</CardTitle>
              <CardDescription>{item.detail}</CardDescription>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <Card className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Explore</p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">Discover our products and services</h2>
            <p className="mt-2 text-slate-600">Browse our capabilities, product catalog, and service offerings.</p>
          </div>
          <div className="flex gap-3">
            <Button href="/products" variant="secondary">
              Products
            </Button>
            <Button href="/contact-us">Contact</Button>
          </div>
        </Card>
      </Section>
    </SiteShell>
  );
}
