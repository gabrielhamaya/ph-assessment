/* eslint-disable no-param-reassign */
/* eslint-disable prefer-object-spread */
/* eslint-disable no-restricted-syntax */

/* Borrowed code from https://gist.github.com/ahtcx/0cd94e62691f539160b32ecda18af3d6 */

export const mergeDeep = (target, source) => {
  const isObject = (obj) => obj && typeof obj === 'object';

  if (!isObject(target) || !isObject(source)) {
    return source;
  }

  Object.keys(source).forEach((key) => {
    const targetValue = target[key];
    const sourceValue = source[key];

    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      target[key] = targetValue.concat(sourceValue);
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      target[key] = mergeDeep(Object.assign({}, targetValue), sourceValue);
    } else {
      target[key] = sourceValue;
    }
  });

  return target;
};
