export type WorkCategory = 'frontend' | 'graphic' | 'uxui';

export type StackItem = {
  label: string;
  iconId?: string;
};

export type Project = {
  id: string;
  title: string;

  // mobile
  image: string;
  image2x?: string;

  // tablet
  imageTab?: string;
  imageTab2x?: string;

  // desktop
  imageDesk?: string;
  imageDesk2x?: string;

  alt: string;
  href?: string;
  categories: WorkCategory[];
  stack?: { label: string; iconId?: string }[];
  group?: boolean;
};
