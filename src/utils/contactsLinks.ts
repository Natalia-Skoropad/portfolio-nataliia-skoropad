const RAW_PHONE = '+380968016905';
const PHONE_DIGITS = RAW_PHONE.replace(/\D/g, '');

export const CONTACTS = {
  phone: RAW_PHONE,
  mail: 'skoropad_natalia@ukr.net',
  viber: {
    app: `viber://chat?number=%2B${PHONE_DIGITS}`,
    web: `https://viber.click/${PHONE_DIGITS}`,
  },

  telegram: {
    app: `tg://resolve?phone=${PHONE_DIGITS}`,
    web: `https://t.me/+${PHONE_DIGITS}`,
  },

  whatsapp: {
    app: `https://wa.me/${PHONE_DIGITS}`,
  },
} as const;
