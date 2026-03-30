import { ContactForm } from '@/components/contact/contact-form';
import { SiteShell } from '@/components/site/site-shell';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Section, SectionHeader } from '@/components/ui/section';

const contactChannels = [
  { title: 'Consultancy Inquiries', detail: 'Architecture, implementation, and strategic planning support.' },
  { title: 'Product & Solutions', detail: 'Questions about defense, industry, and cyber offerings.' },
  { title: 'Training Programs', detail: 'Capability development, awareness, and certification pathways.' },
  { title: 'Partnerships', detail: 'Regional alliances, collaboration, and integration opportunities.' },
];

const nextSteps = ['Share your objective and timeline.', 'We recommend a discovery call and project scope.', 'A focused implementation plan is drafted by our team.'];

export default function ContactUsPage() {
  return (
    <SiteShell>
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <Badge>Contact</Badge>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Let’s plan your next project</h1>
        <p className="mt-4 max-w-3xl text-slate-600">Connect with Canis for consultancy, product inquiries, training, and partnerships.</p>
      </section>

      <Section>
        <SectionHeader eyebrow="Channels" title="How we can help" />
        <div className="grid gap-4 md:grid-cols-2">
          {contactChannels.map((item) => (
            <Card key={item.title}>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.detail}</CardDescription>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Message" title="Start the conversation" description="Use the form below and our team will follow up with next steps." />
        <ContactForm />
      </Section>

      <Section>
        <SectionHeader eyebrow="Process" title="What happens next" />
        <div className="grid gap-4 md:grid-cols-3">
          {nextSteps.map((step, index) => (
            <Card key={step} className="p-5">
              <p className="text-sm font-semibold text-slate-500">Step 0{index + 1}</p>
              <CardDescription>{step}</CardDescription>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <Card className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Need a direct engagement path?</h2>
            <p className="mt-2 text-slate-600">Use the contact form or reach us through our regional offices listed below.</p>
          </div>
          <Button href="/services" variant="secondary">
            View Services
          </Button>
        </Card>
      </Section>
    </SiteShell>
  );
}
