import { SiteShell } from '@/components/site/site-shell';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Section, SectionHeader } from '@/components/ui/section';

const recruitingTraits = [
  'Strong teamwork and collaborative mindset',
  'Action-oriented problem solving',
  'Creativity and technical curiosity',
  'Reliability, trustworthiness, and integrity',
  'Adaptability in changing environments',
  'Diverse backgrounds and perspectives',
];

const developmentAreas = [
  'Global network of learning centers',
  'Fixed-step training for new trainees',
  'Internships and practical development',
  'Annual capability development paths',
  'Long-term growth partnership model',
];

const tracks = ['Engineering & Development', 'Security & Compliance', 'Operations & Delivery', 'Training & Advisory'];

export default function CareersPage() {
  return (
    <SiteShell>
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <Badge>Careers</Badge>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Build your career with Canis</h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          We recruit globally and grow teams through practical training, mentorship, and clear career progression.
        </p>
      </section>

      <Section>
        <SectionHeader eyebrow="Opportunities" title="Career tracks" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tracks.map((track) => (
            <Card key={track} className="p-5">
              <CardTitle className="text-base">{track}</CardTitle>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Hiring criteria" title="What we look for" />
        <div className="grid gap-4 md:grid-cols-2">
          {recruitingTraits.map((item) => (
            <Card key={item} className="p-5">
              <CardDescription className="mt-0">{item}</CardDescription>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Growth" title="Training and internships" />
        <div className="grid gap-4 md:grid-cols-2">
          {developmentAreas.map((item) => (
            <Card key={item} className="p-5">
              <CardDescription className="mt-0">{item}</CardDescription>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <Card className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Ready to collaborate?</h2>
            <p className="mt-2 text-slate-600">Reach out and we can map opportunities based on your skills and interests.</p>
          </div>
          <Button href="/contact-us">Contact HR Team</Button>
        </Card>
      </Section>
    </SiteShell>
  );
}
