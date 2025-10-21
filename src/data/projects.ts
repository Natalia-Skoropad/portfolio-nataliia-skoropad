import type { Project } from '../types/project';

export const PROJECTS: Project[] = [
  // ===== Frontend =====
  {
    id: 'artistshub',
    title: 'ArtistsHub',
    image: '/images/work/artistshub-mobile.jpg',
    image2x: '/images/work/artistshub-mobile@2x.jpg',
    imageTab: '/images/work/artistshub-tab.jpg',
    imageTab2x: '/images/work/artistshub-tab@2x.jpg',
    imageDesk: '/images/work/artistshub-desk.jpg',
    imageDesk2x: '/images/work/artistshub-desk@2x.jpg',
    alt: 'ArtistsHub landing',
    href: 'https://zviacheslavv.github.io/developers-orchestra-project/',
    categories: ['frontend'],
    group: true,
    stack: [
      { label: 'JS', iconId: 'icon-javascript-logo-gold' },
      { label: 'CSS', iconId: 'icon-css-logo-gold' },
      { label: 'HTML', iconId: 'icon-html-logo-gold' },
      { label: 'Vite', iconId: 'icon-vite-logo-gold' },
      { label: 'Axios', iconId: 'icon-axios-logo-gold' },
      { label: 'Figma', iconId: 'icon-figma-logo-gold' },
    ],
  },
  {
    id: 'yogabloom',
    title: 'YogaBloom',
    image: '/images/work/yogabloom-mobile.jpg',
    image2x: '/images/work/yogabloom-mobile@2x.jpg',
    imageTab: '/images/work/yogabloom-tab.jpg',
    imageTab2x: '/images/work/yogabloom-tab@2x.jpg',
    imageDesk: '/images/work/yogabloom-desk.jpg',
    imageDesk2x: '/images/work/yogabloom-desk@2x.jpg',
    alt: 'YogaBloom app',
    href: 'https://zviacheslavv.github.io/biological-core-project/',
    categories: ['frontend'],
    group: true,
    stack: [
      { label: 'JS', iconId: 'icon-javascript-logo-gold' },
      { label: 'CSS', iconId: 'icon-css-logo-gold' },
      { label: 'HTML', iconId: 'icon-html-logo-gold' },
      { label: 'Vite', iconId: 'icon-vite-logo-gold' },
    ],
  },
  {
    id: 'webstudio',
    title: 'WebStudio',
    image: '/images/work/webstudio-mobile.jpg',
    image2x: '/images/work/webstudio-mobile@2x.jpg',
    imageTab: '/images/work/webstudio-tab.jpg',
    imageTab2x: '/images/work/webstudio-tab@2x.jpg',
    imageDesk: '/images/work/webstudio-desk.jpg',
    imageDesk2x: '/images/work/webstudio-desk@2x.jpg',
    alt: 'WebStudio site',
    href: 'https://natalia-skoropad.github.io/goit-markup-hw-06/',
    categories: ['frontend'],
    stack: [
      { label: 'JS', iconId: 'icon-javascript-logo-gold' },
      { label: 'CSS', iconId: 'icon-css-logo-gold' },
      { label: 'HTML', iconId: 'icon-html-logo-gold' },
    ],
  },

  // === Graphic Design ===
  {
    id: 'product-catalog-design',
    title: 'Product Catalog Design',
    image: '/images/work/graphicDesign/product-catalog-design-mobile.jpg',
    image2x: '/images/work/graphicDesign/product-catalog-design-mobile@2x.jpg',
    imageTab:
      '/images/work/graphicDesign/product-catalog-design-mobile-tab.jpg',
    imageTab2x:
      '/images/work/graphicDesign/product-catalog-design-mobile-tab@2x.jpg',
    imageDesk:
      '/images/work/graphicDesign/product-catalog-design-mobile-desk.jpg',
    imageDesk2x:
      '/images/work/graphicDesign/product-catalog-design-mobile-desk@2x.jpg',
    href: 'https://www.behance.net/gallery/185283883/Product-catalog-design',
    alt: 'Product catalog graphic design',
    categories: ['graphic'],
    stack: [
      { label: 'Figma', iconId: 'icon-figma-logo-gold' },
      { label: 'Illustrator', iconId: 'icon-illustrator-logo-gold' },
      { label: 'Photoshop', iconId: 'icon-photoshop-logo-gold' },
      { label: 'InDesign', iconId: 'icon-indesign-logo-gold' },
    ],
  },

  // === UX/UI Design ===
  {
    id: 'phone-app-design',
    title: 'Phone App Design',
    image: '/images/work/uxui/phone-app-design-mobile.jpg',
    image2x: '/images/work/uxui/phone-app-design-mobile@2x.jpg',
    imageTab: '/images/work/uxui/phone-app-design-tab.jpg',
    imageTab2x: '/images/work/uxui/phone-app-design-tab@2x.jpg',
    imageDesk: '/images/work/uxui/phone-app-design-desk.jpg',
    imageDesk2x: '/images/work/uxui/phone-app-design-desk@2x.jpg',
    href: 'https://www.behance.net/gallery/114315473/Phone-app-design',
    alt: 'Mobile app UX/UI design',
    categories: ['uxui'],
    stack: [
      { label: 'Figma', iconId: 'icon-figma-logo-gold' },
      { label: 'Illustrator', iconId: 'icon-illustrator-logo-gold' },
      { label: 'Photoshop', iconId: 'icon-photoshop-logo-gold' },
    ],
  },
];
