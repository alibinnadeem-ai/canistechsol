export function PageHero({ title, description }: { title: string; description: string }) {
  return (
    <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{title}</h1>
      <p className="mt-4 max-w-4xl text-slate-600">{description}</p>
    </section>
  );
}
