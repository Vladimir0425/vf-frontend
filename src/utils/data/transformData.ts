export const formatNumber = (
  num: number,
  locale: string = 'en-US',
  options: Intl.NumberFormatOptions = {},
) => {
  return num.toLocaleString(locale, options);
};

export const formatDate = (date: Date) => {
  return date.toLocaleDateString('en-CA');
};
