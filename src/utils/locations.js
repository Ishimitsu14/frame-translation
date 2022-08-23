export const getLocation = () => {
  const config = {
    language: 'ru',
    country: 'RU',
  };

  const client = window.navigator ? (window.navigator.language
    || window.navigator.systemLanguage
    || window.navigator.userLanguage) : (`${config.language}-${config.country}`);

  const language = (client.search('-') > 0)
    ? client.substring(0, client.search('-')).toLowerCase()
    : client.toLowerCase();

  const country = (client.search('-') > 0)
    ? client.substring(client.search('-') + 1, client.length).toLowerCase()
    : config.country;

  return { language, country };
};
