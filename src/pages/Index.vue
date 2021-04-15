<template>
  <q-page class="bg-grey-9 q-py-md">
    <div class="app_content_wrapper">
      <div class="row q-col-gutter-x-sm">
        <div class="col-12">
          <div class="row">
            <div class="col-12 q-px-sm">
              <q-breadcrumbs class="text-grey" active-color="white">
                <q-breadcrumbs-el icon="home" />
                <q-breadcrumbs-el
                  :label="$t('article-info_1_category')"
                  :to="$t('article-info_1_category_url')"
                />
                <q-breadcrumbs-el :label="$t('hero_1_title')" />
              </q-breadcrumbs>
            </div>
          </div>

          <div class="row q-py-md">
            <div class="col-12">
              <q-chip size="11px" icon="far fa-clock">
                {{ $t("article-info_1_date") }}
              </q-chip>
              <q-chip size="11px" icon="fas fa-pencil-alt">
                {{ $t("article-info_1_byline") }}
              </q-chip>
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <q-img
                class="app-article__image"
                :ratio="16 / 9"
                :src="$t('hero_1_image')"
              />
            </div>
          </div>

          <div class="text-h4 q-py-lg text-white">
            {{ $t("hero_1_title") }}
          </div>
        </div>
      </div>

      <template v-for="paragraphNumber in 10">
        <div
          :key="`paragraph__${paragraphNumber}`"
          class="row text-white q-pb-md"
        >
          {{ $t(`p_${paragraphNumber}_value`) }}
        </div>
      </template>

      <div class="text-h5 q-pt-lg q-pb-sm text-white">
        {{ $t("compare-tabs_1_title") }} ({{ $t("total_cities_1_value") }})
      </div>

      <div class="row">
        <div
          class="col-12 col-md-12 q-my-xs bg-red-10"
          style="max-height: 300px; border-radius: 12px;"
        >
          <q-tabs v-model="tab" align="justify" class="text-white">
            <template v-for="selCityItemNumb in 32">
              <q-tab
                :key="`selCityItem__${selCityItemNumb}`"
                :name="$t(`compare-tabs_1_city_${selCityItemNumb}_name`)"
                :label="$t(`compare-tabs_1_city_${selCityItemNumb}_name`)"
              />
            </template>
          </q-tabs>
        </div>

        <div
          class="col-12 col-md-12 q-my-xs bg-white"
          style="max-height: 300px; border-radius: 12px;"
        >
          <q-tab-panels
            v-model="tab"
            style="border-radius: 12px;"
            animated
            swipeable
            transition-prev="jump-left"
            transition-next="jump-left"
          >
            <template v-for="selItemInfoTab in 32">
              <q-tab-panel
                :key="`selItemInfoTab__${selItemInfoTab}`"
                :name="$t(`compare-tabs_1_city_${selItemInfoTab}_name`)"
                class="text-center"
              >
                <div class="text-h4 q-mb-md">
                  {{ $t(`compare-tabs_1_city_${selItemInfoTab}_name`) }}
                </div>

                <div class="q-py-md rounded-borders">
                  <div class="text-h5 text-red-10">
                    aqi: {{ $t(`compare-tabs_1_city_${selItemInfoTab}_aqi`) }}
                  </div>

                  <div class="text-h6 text-red-10">
                    cigg: {{ $t(`compare-tabs_1_city_${selItemInfoTab}_cigg`) }}
                  </div>
                </div>
              </q-tab-panel>
            </template>
          </q-tab-panels>
        </div>
      </div>
    </div>

    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn
        fab
        padding="10px"
        size="sm"
        icon="keyboard_arrow_up"
        color="red-10"
      />
    </q-page-scroller>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      tab: this.$t('compare-tabs_1_city_1_name'),
      cigg: this.$t('compare-tabs_1_city_1_cigg'),
    };
  },
  watch: {
    $route() {
      this.tab = this.$t('compare-tabs_1_city_1_name');
      this.cigg = this.$t('compare-tabs_1_city_1_cigg');
    },
  },
};
</script>

<style lang="scss">
.app-article {
  &__image {
    max-height: 400px;
    border-radius: 1rem;
  }
}
</style>
