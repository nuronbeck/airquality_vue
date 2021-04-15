<template>
  <q-scroll-area class="fit bg-grey-10">
    <div class="row">
      <div class="col-12 flex items-center justify-end q-pt-md">
        <q-btn
          @click="closeHandle"
          class="q-mx-sm lt-md"
          unelevated
          color="red-10"
          round
          flat
          icon="close"
        />
      </div>
      <div class="col-12">
        <q-list>
          <q-item-label header>Language</q-item-label>
          <q-item class="q-mb-sm" :v-ripple="false">
            <q-item-section side>
              <locales-dropdown />
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
  </q-scroll-area>
</template>

<script>
import LocalesDropdown from 'components/locales/LocalesDropdown';

export default {
  name: 'MobileMenu',
  components: {
    LocalesDropdown,
  },
  methods: {
    closeHandle() {
      this.$emit('onClose');
    },
  },
};
</script>
