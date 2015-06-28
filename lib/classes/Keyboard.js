export default class Keyboard {
  constructor(options = {keyboard: [], resize_keyboard: false, one_time_keyboard: false, selective: false}) {
    this.properties = options;
  }

  set keyboard(value) {
    this.setProperties({keyboard: value});
  }

  set resizeKeyboard(value) {
    this.setProperties({resize_keyboard: value});
  }

  set oneTimeKeyboard(value) {
    this.setProperties({one_time_keyboard: value});
  }

  set selective(value) {
    this.setProperties({selective: value});
  }

  get keyboard() {
    return this.getProperties('keyboard');
  }

  get resizeKeyboard() {
    this.getProperties('resize_keyboard');
  }

  get oneTimeKeyboard() {
    this.getProperties('one_time_keyboard');
  }

  get selective() {
    this.getProperties('selective');
  }

  setProperties(object) {
    this.properties = Object.assign(this.properties, object);
  }

  getProperties(object) {
    return object ? this.properties[object] : this.properties;
  }
}
