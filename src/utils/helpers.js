export const formatPrice = (number, format = 'en-US', currency = 'USD') =>
  new Intl.NumberFormat(format, {
    style: 'currency',
    currency,
  }).format(number / 100);

export const getUniqueValues = (data, prop) => {
  let unique = data.map((item) => item[prop]);
  if (unique instanceof Array) unique = unique.flat();
  return ['all', ...new Set(unique)];
};
