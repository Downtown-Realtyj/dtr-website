"use client";

import { useState } from 'react';
import type { SubmitEvent, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDown, Search } from 'lucide-react';
import { projects } from '../../data/projectData';
import type { SearchFilters, SpaceFilter } from '../../types/property';
import { defaultFilters, localitiesFor, spaceFilterOptions } from '../../utils/filters';

// Change this if the results page lives elsewhere.
const RESULTS_PATH = '/projects';

const statusOptions: { label: string; value: SearchFilters['status'] }[] = [
  { label: 'Any status', value: 'All' },
  { label: 'Under Construction', value: 'ongoing' },
  { label: 'Ready to Move', value: 'ready-to-move' },
];

// Static input, so compute once at module level instead of useMemo.
const localities = localitiesFor(projects, 'All Cities');

const selectCls = 'w-full appearance-none bg-transparent pr-6 text-[15px] font-medium text-white focus:outline-none [&>option]:text-navy';

export function SearchBar() {
  const router = useRouter();
  const [filters, setFilters] = useState<SearchFilters>(defaultFilters);

  const submit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Only put non-default filters in the URL to keep it clean.
    const params = new URLSearchParams();
    (Object.keys(filters) as (keyof SearchFilters)[]).forEach((key) => {
      if (filters[key] !== defaultFilters[key]) params.set(key, String(filters[key]));
    });

    const query = params.toString();
    router.push(query ? `${RESULTS_PATH}?${query}` : RESULTS_PATH);
  };

  return (
    <form
      onSubmit={submit}
      className="grid gap-2 rounded-lg bg-navy p-3 md:grid-cols-[1fr_1fr_1fr_auto] md:gap-0 md:divide-x md:divide-white/10"
      aria-label="Search projects"
    >
      <Field label="Looking for">
        <select
          value={filters.space}
          onChange={(e) => setFilters((f) => ({ ...f, space: e.target.value as SpaceFilter }))}
          className={selectCls}
        >
          {spaceFilterOptions.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </Field>

      <Field label="Locality in Patna">
        <select
          value={filters.locality}
          onChange={(e) => setFilters((f) => ({ ...f, locality: e.target.value }))}
          className={selectCls}
        >
          {localities.map((l) => (
            <option key={l} value={l}>{l}</option>
          ))}
        </select>
      </Field>

      <Field label="Possession">
        <select
          value={filters.status}
          onChange={(e) => setFilters((f) => ({ ...f, status: e.target.value as SearchFilters['status'] }))}
          className={selectCls}
        >
          {statusOptions.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </Field>

      <div className="md:pl-3">
        <button
          type="submit"
          className="flex h-full min-h-14 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-gold px-8 text-sm font-semibold text-navy transition-colors duration-150 hover:bg-gold-light"
        >
          <Search className="h-4 w-4" aria-hidden="true" />
          Search Projects
        </button>
      </div>
    </form>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="relative block rounded px-5 py-3 hover:bg-white/5 md:rounded-none">
      <span className="mb-0.5 block text-[11px] font-medium text-gold">{label}</span>
      {children}
      <ChevronDown className="pointer-events-none absolute bottom-3.5 right-5 h-4 w-4 text-white/50" aria-hidden="true" />
    </label>
  );
}