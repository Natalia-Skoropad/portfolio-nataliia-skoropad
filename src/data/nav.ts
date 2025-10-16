export const SECTIONS = ['about', 'works', 'tools', 'contacts'] as const;
export type SectionId = (typeof SECTIONS)[number];

export const NAV: { id: SectionId; label: string }[] = [
  { id: 'about', label: 'About Me' },
  { id: 'works', label: 'Works' },
  { id: 'tools', label: 'Tools' },
  { id: 'contacts', label: 'Contacts' },
];
