<template>
  <div class="youtube-embed">
    <iframe
      class="youtube-embed__iframe"
      title=""
      frameborder="0"
      seamless="seamless"
      allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
      allowfullscreen
      :src="url"
    />
  </div>
</template>

<script>
export default {
  name: 'YoutubeEmbed',
  props: {
    url: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.youtube-embed {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;

  &__iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
