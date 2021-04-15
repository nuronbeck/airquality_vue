<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-red-10" bordered>
      <div class="app_content_wrapper">
        <q-toolbar class="text-white q-my-sm q-px-none">
          <q-btn
            stretch
            flat
            label="Air Quality in India"
            :to="homeLocaleURL"
          />
          <q-space />
          <locales-dropdown class="gt-sm" />
          <q-separator class="lt-md" dark vertical inset />
          <q-btn
            class="q-ml-sm lt-md"
            @click="drawerRight = !drawerRight"
            flat
            round
            dense
            icon="menu"
          />
        </q-toolbar>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-drawer
      side="right"
      v-model="drawerRight"
      behavior="mobile"
      bordered
      content-class="bg-grey-3"
    >
      <mobile-menu @onClose="drawerRight = !drawerRight" />
    </q-drawer>
  </q-layout>
</template>

<script>
import LocalesDropdown from 'components/locales/LocalesDropdown';
import MobileMenu from 'components/global/MobileMenu';

export default {
  name: 'MainLayout',
  computed: {
    homeLocaleURL() {
      return this.$i18n.locale;
    },
  },
  components: {
    LocalesDropdown,
    MobileMenu,
  },
  data() {
    return {
      drawerRight: false,
    };
  },
  mounted() {
    // console.log(this.$i18n);
  },
};
</script>
