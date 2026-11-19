import { Project, SearchFilters, SpaceFilter } from '../types/property';
import { hasKind } from './projectSpaces';

export const defaultFilters: SearchFilters = {
  city: 'All Cities',
  status: 'All',
  locality: 'All Localities',
  space: 'All',
};

export const spaceFilterOptions: { label: string; value: SpaceFilter }[] = [
  { label: 'Flats, Plots & Shops', value: 'All' },
  { label: 'Flats', value: 'residential' },
  { label: 'Plots', value: 'plot' },
  { label: 'Shops & Offices', value: 'commercial' },
];

export function matchesFilters(project: Project, filters: SearchFilters): boolean {
  if (filters.city !== 'All Cities' && project.city !== filters.city) return false;
  if (filters.status !== 'All' && project.status !== filters.status) return false;
  if (filters.locality !== 'All Localities' && project.locality !== filters.locality) return false;
  if (filters.space !== 'All' && !hasKind(project, filters.space)) return false;
  return true;
}

export function localitiesFor(projects: Project[], city: string): string[] {
  const list = projects.filter((p) => city === 'All Cities' || p.city === city).map((p) => p.locality);
  return ['All Localities', ...Array.from(new Set(list))];
}
