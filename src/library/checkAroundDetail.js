// Support
export const inc = n => n + 1;
export const dec = n => n - 1;
export const echo = n => n;

/**
 * Check blocks around detail.
 *
 * @func
 * @param {Immutable.Map} worldMap Map comprises blocks.
 * @param {number} x Axis x.
 * @param {number} y Axis y.
 * @param {Function} fx Use to param x.
 * @param {Function} fy Use to param y.
 * @return {boolean} Free place lowwer blocks.
 */
export const checkAroundDetail = (worldMap, x, y, fx, fy) => {
  if (!worldMap.has(y)) return false;

  switch (worldMap
    .get(y)
    .get('blocks')
    .get(x)
    .get('value')) {
  case 0:
    return true;
  case 1:
    return false;
  case 2:
    return checkAroundDetail(worldMap, fx(x), fy(y), fx, fy);
  default:
    return false;
  }
};
