import {setProperties, getProperties} from '../utils';

/**
 * Keyboard layout class
 * @class
 */
export default class Keyboard {

  /**
   * @constructor
   * @param {Object} options
   */
  constructor(options = {keyboard: [], resize_keyboard: false, one_time_keyboard: false, selective: false}) {
    this.properties = options;
  }

  /**
   * Get or set keyboard layout
   * @param {Array} value
   * @returns {Keyboard|Array}
   */
  keyboard(value) {
    if (value) {
      setProperties({keyboard: value});
      return this;
    }
    return getProperties('keyboard');
  }

  /**
   * Get or set resize keyboard
   * @param {boolean} value
   * @returns {Keyboard|Object}
   */
  resize(value) {
    if (value) {
      setProperties({resize_keyboard: value});
      return this;
    }
    return getProperties('resize_keyboard');
  }

  /**
   * Get or set one time keyboard
   * @param {boolean} value
   * @return {Keyboard|Object}
   */
  oneTime(value) {
    if (value) {
      setProperties({one_time_keyboard: value});
      return this;
    }
    return getProperties('one_time_keyboard');
  }

  selective(value) {
    if (value) {
      setProperties({selective: value});
      return this;
    }
    return getProperties('selective');
  }

/*  setProperties(object) {
    this.properties = Object.assign(this.properties, object);
    return this;
  }

  getProperties(object) {
    return object ? this.properties[object] : this.properties;
  }*/
}
