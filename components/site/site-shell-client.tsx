'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { navigationItems } from '@/components/site/navigation';

export function SiteShellClientHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="Canis logo" width={44} height={44} priority className="h-11 w-11 rounded-md object-contain" />
          <div>
            <p className="text-sm font-semibold tracking-tight">Canis Technology Solutions</p>
            <p className="text-xs text-slate-500">Security • Technology • Innovation</p>
          </div>
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm hover:bg-slate-100 md:hidden"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      <nav className="mx-auto hidden w-full max-w-6xl flex-wrap gap-2 px-4 pb-4 text-sm md:flex">
        {navigationItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-slate-700 transition hover:border-slate-300 hover:bg-slate-100 hover:text-slate-950"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {open ? (
        <nav className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 pb-4 text-sm md:hidden">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-700 transition hover:border-slate-300 hover:bg-slate-100 hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
