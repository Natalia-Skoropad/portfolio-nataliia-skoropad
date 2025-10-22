export const WORK_CATEGORIES = ['frontend', 'graphic', 'uxui'] as const;
export type WorkCategory = (typeof WORK_CATEGORIES)[number];

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
  imageBlur?: string;

  // tablet
  imageTab?: string;
  imageTab2x?: string;

  // desktop
  imageDesk?: string;
  imageDesk2x?: string;

  alt: string;
  href?: string;
  categories: WorkCategory[];
  stack?: StackItem[];
  group?: boolean;
};

