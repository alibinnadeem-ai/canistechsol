import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Section } from '@/components/ui/section';

const pageContent: Record<string, { intro: string; points: string[] }> = {
  Blog: {
    intro: 'Our blog shares updates, technology perspectives, and practical insights from ongoing projects and deployments.',
    points: ['Technology and security updates', 'Project stories and case highlights', 'Training and awareness articles'],
  },
  Collaboration: {
    intro: 'We collaborate with organizations, technology partners, and institutions to deliver scalable and practical solutions.',
    points: ['Joint solution development', 'Technical partnerships', 'Operational collaboration models'],
  },
  Services: {
    intro: 'Our services cover consultancy, implementation, security programs, and long-term technical support.',
    points: ['Technical consultancy and planning', 'Deployment and integration services', 'Security and training engagements'],
  },
  'Our Products': {
    intro: 'Our products portfolio includes UAV systems, counter-UAS capabilities, payloads, and mission-oriented technology.',
    points: ['Defense and surveillance products', 'Detection and jamming systems', 'Payloads and control systems'],
  },
  Portfolio: {
    intro: 'Our portfolio highlights selected projects delivered across defense, industry, and technology modernization domains.',
    points: ['Defense and security initiatives', 'Industrial technology deployments', 'Software and integrated systems'],
  },
  Trainings: {
    intro: 'We deliver technical and management training programs designed to build team capability and operational readiness.',
    points: ['Technical skill development', 'Security awareness tracks', 'Professional development workshops'],
  },
  'Training for International Certificates': {
    intro: 'This page outlines our international certification training pathways for technical and security-focused roles.',
    points: ['Certification-focused curriculum', 'Practical labs and preparation', 'Guidance for exam readiness'],
  },
  Indenting: {
    intro: 'Our indenting and procurement support helps organizations source and deploy specialized technology effectively.',
    points: ['Requirement-based sourcing', 'Procurement and coordination support', 'Deployment-aligned planning'],
  },
  'Research and Development': {
    intro: 'Our R&D work focuses on practical innovation, prototype development, and applied engineering for real-world use.',
    points: ['Applied technology research', 'Prototype development cycles', 'Validation and field-readiness'],
  },
  Simple: {
    intro: 'This page provides a compact overview format for quick navigation and concise information access.',
    points: ['Concise information structure', 'Direct page navigation', 'Lightweight presentation format'],
  },
};

export function PlaceholderPage({ title }: { title: string; sourceFile: string }) {
  const content =
    pageContent[title] ?? {
      intro: `${title} page content is available here and can be expanded with more sections as needed.`,
      points: ['Core information blocks', 'Additional detail sections', 'Calls to action and navigation'],
    };

  return (
    <>
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <Badge>{title}</Badge>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-slate-600">{content.intro}</p>
      </section>

      <Section>
        <Card>
          <CardTitle>{title} Overview</CardTitle>
          <CardDescription>This section captures the core information and direction for this page.</CardDescription>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
            {content.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button href="/contact-us">Contact Us</Button>
            <Button href="/products" variant="secondary">
              View Products
            </Button>
          </div>
        </Card>
      </Section>
    </>
  );
}
