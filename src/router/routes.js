import { i18n } from 'boot/i18n';

const routes = [
  {
    path: '/:locale?',
    component: () => import('layouts/i18n/LocalesWrapper.vue'),
    children: [
      {
        path: '',
        component: () => import('layouts/MainLayout.vue'),
        children: [
          {
            path: '',
            component: () => import('pages/Index.vue'),
          },
        ],
      },
    ],
    beforeEnter: (to, from, next) => {
      const { locale } = to.params;
      const supportedLocales = i18n.availableLocales;

      if (!supportedLocales.includes(locale)) return next('en');
      if (i18n.locale !== locale) {
        i18n.locale = locale;
      }
      return next();
    },
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
