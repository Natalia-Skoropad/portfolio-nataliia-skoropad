export type AboutIcon = {
  id: string;
  label: string;
};

export type AboutItem = {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  icons: AboutIcon[];
  side?: 'left' | 'right';
};
