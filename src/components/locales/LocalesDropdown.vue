<template>
  <q-select
    v-model="currentLang"
    :options="$i18n.availableLocales"
    dark
    color="white"
    popup-content-class="bg-grey-10 text-white"
    borderless
    emit-value
    map-options
    @input="changeLocale"
  />
</template>

<script>
export default {
  name: 'LocalesDropdown',
  data() {
    return {
      currentLang: this.$i18n.locale,
    };
  },
  methods: {
    changeLocale(lang) {
      if (this.$i18n.locale !== lang) {
        this.$i18n.locale = lang;
        this.$router.replace(`/${lang}`);
      }
    },
  },
};
</script>
