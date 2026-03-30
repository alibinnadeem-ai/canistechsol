import { SiteShell } from '@/components/site/site-shell';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Section, SectionHeader } from '@/components/ui/section';

const boardOfDirectors = [
  'Ali Bin Nadeem (Managing Director)',
  'Dr. Shauqat Chandna (Chief Advisor Consultants)',
  'Muhammad Ousama Nadeem (General Manager Business Development)',
  'Ysa Chandna (International Relations Analyst, Qatar)',
  'Salman Mehmood (Director Technical, Arcistech)',
  'Talha Habib (Director Technical Information Security)',
  'Dr. Lozina Shoaib (Director ICT)',
  'Zunnurain Khalid (Director Strategic Development)',
  'Zulqarnain Khalid (Director Technical Project Management)',
];

const regionalHeads = [
  'Taimur Wahla (United Kingdom)',
  'Salman Bin Shabbir (Australia)',
  'Balal Javed (USA)',
  'Muhammad Nadeem Khan (Singapore)',
];

const highlights = [
  'Multinational footprint across USA, Australia, Qatar, and Pakistan.',
  'Cross-functional leadership in cyber security, software, and engineering.',
  'Delivery model focused on practical outcomes and long-term partnerships.',
];

export default function AboutUsPage() {
  return (
    <SiteShell>
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <Badge>Leadership</Badge>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">About Canis Technology Solutions</h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          We are a multidisciplinary technology organization with expertise in automation, cyber security, software engineering, and strategic program execution.
        </p>
      </section>

      <Section>
        <SectionHeader eyebrow="Snapshot" title="Who we are" />
        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <Card key={item} className="p-5">
              <CardDescription className="mt-0">{item}</CardDescription>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Team" title="Board of Directors" />
        <div className="grid gap-4 md:grid-cols-2">
          {boardOfDirectors.map((person) => (
            <Card key={person} className="p-5">
              <CardTitle className="text-lg">{person}</CardTitle>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Regional" title="Regional Heads" />
        <div className="grid gap-4 md:grid-cols-2">
          {regionalHeads.map((person) => (
            <Card key={person} className="p-5">
              <CardTitle className="text-lg">{person}</CardTitle>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <Card className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Next</p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">Explore career opportunities</h2>
          </div>
          <Button href="/careers">View Careers</Button>
        </Card>
      </Section>
    </SiteShell>
  );
}
