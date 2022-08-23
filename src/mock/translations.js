const urls = [
  { url: 'https://www.youtube.com/embed/4DwxVMU7S0w?autoplay=1&mute=1', lang: 'ru', isMain: false },
  { url: 'https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&mute=1', lang: 'gb', isMain: false },
  { url: 'https://www.youtube.com/embed/AFuhmFC0Tmw?autoplay=1&mute=1', lang: 'de', isMain: false },
  { url: 'https://www.youtube.com/embed/lTRiuFIWV54?autoplay=1&mute=1', lang: 'us', isMain: false },
  { url: 'https://www.youtube.com/embed/grBFMP3HDZA?autoplay=1&mute=1', isMain: true },
];

export const getTranslations = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(urls);
  }, 500);
});
