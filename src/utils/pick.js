/**
 * Create an object composed of the picked object properties
 * @param {Object} object
 * @param {string[]} keys
 * @returns {Object}
 */
const pick = (object, keys) => {
  return keys.reduce((obj, key) => {
    if (object && Object.prototype.hasOwnProperty.call(object, key)) {
      // eslint-disable-next-line no-param-reassign
      if(key === "page") {
        obj["offset"] = (object[key] <= 1 || !object[key]) ? 0 : object[key] * object["limit"]
      }
      obj[key] = object[key];
    }
    return obj;
  }, {});
};

module.exports = pick;
