'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardTitle } from '@/components/ui/card';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  function updateField(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    setFeedback('Submitting your inquiry...');

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = (await response.json()) as { success?: boolean; message?: string; error?: string };

    if (!response.ok) {
      setStatus('error');
      setFeedback(data.error ?? 'Unable to submit your inquiry.');
      return;
    }

    setStatus('success');
    setFeedback(data.message ?? 'Inquiry submitted successfully.');
    setForm(initialState);
  }

  return (
    <Card>
      <CardTitle>Send us a message</CardTitle>
      <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-slate-700">Name</span>
          <input
            required
            value={form.name}
            onChange={(event) => updateField('name', event.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none ring-slate-200 focus:ring"
            placeholder="Your full name"
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-medium text-slate-700">Email</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => updateField('email', event.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none ring-slate-200 focus:ring"
            placeholder="you@company.com"
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-medium text-slate-700">Subject</span>
          <input
            required
            value={form.subject}
            onChange={(event) => updateField('subject', event.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none ring-slate-200 focus:ring"
            placeholder="How can we help?"
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-medium text-slate-700">Message</span>
          <textarea
            required
            minLength={20}
            value={form.message}
            onChange={(event) => updateField('message', event.target.value)}
            className="min-h-32 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none ring-slate-200 focus:ring"
            placeholder="Share your objectives, timeline, and context..."
          />
        </label>

        <div className="flex items-center justify-between gap-3">
          <p className={status === 'error' ? 'text-sm text-red-600' : 'text-sm text-slate-600'}>{feedback}</p>
          <Button type="submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Submitting...' : 'Submit inquiry'}
          </Button>
        </div>
      </form>
    </Card>
  );
}
