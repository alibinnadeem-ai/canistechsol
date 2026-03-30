import { cn } from '@/lib/utils';

export function Section({ children, className }: { children: React.ReactNode; className?: string }) {
  return <section className={cn('mt-8', className)}>{children}</section>;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="mb-6">
      {eyebrow ? <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{eyebrow}</p> : null}
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">{title}</h2>
      {description ? <p className="mt-3 max-w-3xl text-slate-600">{description}</p> : null}
    </header>
  );
}
