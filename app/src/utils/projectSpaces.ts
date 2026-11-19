import { Project, ProjectCategory, ProjectSpace, SpaceKind } from '../types/property';

export function spacesOf(project: Project, kind: SpaceKind): ProjectSpace[] {
  return project?.spaces?.filter((s) => s.kind === kind) || [];
}

export function hasKind(project: Project, kind: SpaceKind): boolean {
  return project?.spaces?.some((s) => s.kind === kind) ?? false;
}

export function categoryOf(project: Project): ProjectCategory {
  const res = hasKind(project, 'residential');
  const com = hasKind(project, 'commercial');
  const plot = hasKind(project, 'plot');
  if ((res || plot) && com) return 'Mixed-Use';
  if (plot && !res) return 'Plots';
  return com && !res ? 'Commercial' : 'Residential';
}

export function categoryLabel(category: ProjectCategory): string {
  return category === 'Mixed-Use' ? 'Residential + Commercial' : category;
}

export const kindLabels: Record<SpaceKind, string> = {
  residential: 'Flats',
  plot: 'Plots',
  commercial: 'Commercial',
};

/** "132 Flats" / "Shops & Offices" — short summary for a kind of space */
export function summarizeKind(project: Project, kind: SpaceKind): string | null {
  const list = spacesOf(project, kind);
  if (list.length === 0) return null;
  if (list.length === 1) {
    const s = list[0];
    return s.units ? `${s.units} ${s.type}` : s.type;
  }
  const total = list.reduce((sum, s) => sum + (s.units ?? 0), 0);
  const allCounted = list.every((s) => s.units);
  return allCounted ? `${total} Units` : list.map((s) => s.type).join(' & ');
}

export function spaceLabel(space: ProjectSpace): string {
  return space.units ? `${space.units} ${space.type}` : space.type;
}
