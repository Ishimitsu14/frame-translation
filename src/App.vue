<template>
  <div class="frame-translation">
    <spinner-loader v-if="isLoading" />
    <youtube-embed v-else :url="targetTranslation.url" />
  </div>
</template>

<script>

import { getLocation } from '@/utils/locations';
import { getTranslations } from '@/mock/translations';

import YoutubeEmbed from '@/components/YoutubeEmbed.vue';
import SpinnerLoader from '@/components/SpinnerLoader.vue';

export default {
  name: 'App',
  components: { SpinnerLoader, YoutubeEmbed },

  data: () => ({
    location: {
      language: 'ru',
      country: 'RU',
    },
    translations: [],
    isMainTranslation: false,
    isLoading: true,
  }),

  computed: {
    targetTranslation() {
      if (this.isMainTranslation) {
        return this.translations.find(({ isMain }) => isMain);
      }

      if (this.translations.length > 0) {
        const translation = this.translations.find((item) => item.lang === this.location.language);

        return translation || this.translations[0];
      }

      return '';
    },
  },

  async created() {
    await this.fetchData();
    await this.timerToMainTranslation();
  },

  methods: {
    async fetchData() {
      this.isLoading = true;
      this.location = getLocation();
      this.translations = await getTranslations();
      this.isLoading = false;
    },

    async timerToMainTranslation() {
      await this.$nextTick();
      setTimeout(() => {
        this.isMainTranslation = true;
      }, 10000);
    },
  },
};
</script>

<style lang="scss">
.frame-translation {
  display: flex;
  align-items: center;
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;

  &__loader {
    position: fixed;
    left: 50%;
    top: 50%;
  }
}
</style>
