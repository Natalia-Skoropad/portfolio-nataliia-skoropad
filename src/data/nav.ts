export const SECTIONS = ['hero', 'about', 'work', 'tools', 'contacts'] as const;

export type SectionId = (typeof SECTIONS)[number];

export const NAV: { id: SectionId; label: string }[] = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'work', label: 'Work' },
  { id: 'tools', label: 'Tools' },
  { id: 'contacts', label: 'Contacts' },
];

export const NAV_MENU = NAV.filter(item => item.id !== 'hero');
