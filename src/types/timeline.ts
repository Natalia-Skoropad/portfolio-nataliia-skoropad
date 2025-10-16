export type TimelineIcon = {
  id: string;
  label: string;
};

export type TimelineItem = {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  icons: TimelineIcon[];
  side?: 'left' | 'right';
};
