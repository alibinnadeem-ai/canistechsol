import { SiteShellClientHeader } from '@/components/site/site-shell-client';

const officeLocations = [
  {
    city: 'Naperville, USA',
    address: '724 Greenwood Circle #209, Naperville, IL 60563',
    phone: '(+1) 517-303-5886',
  },
  {
    city: 'Sydney, Australia',
    address: '3/28 Macquarie Road, Ingleburn',
    phone: '(+6) 142-219-2393',
  },
  {
    city: 'Melbourne, Australia',
    address: '24 Moore Park Drive, Craigieburn',
  },
  {
    city: 'Adelaide, Australia',
    address: '2 Derrilin Road, Ingle Farm SA 5098',
  },
  {
    city: 'Rawalpindi, Pakistan',
    address: '89 Street #19, Race Course Road, Westridge',
    phone: '+92-51-8433550',
  },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="border-b border-slate-200 bg-white px-6 py-2 text-center text-xs text-slate-600">Canis Technology Solutions</div>

      <SiteShellClientHeader />

      <main className="mx-auto w-full max-w-6xl px-4 py-10">{children}</main>

      <footer className="border-t border-slate-200 bg-white px-4 py-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-xl font-semibold">Our Offices</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {officeLocations.map((office) => (
              <article key={office.city} className="rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
                <h3 className="font-medium">{office.city}</h3>
                <p className="mt-2 text-sm text-slate-600">{office.address}</p>
                {office.phone ? <p className="mt-2 text-sm text-slate-500">{office.phone}</p> : null}
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-slate-500">© Canis Technology Solutions. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
