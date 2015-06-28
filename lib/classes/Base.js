import {EventEmitter} from 'events';
import * as utils from '../utils';

export default class Base extends EventEmitter {
  constructor() {
    super();
  }

  setProperties(object) {
    return utils.setProperties(this, object);
  }

  getProperties(object) {
    return utils.getProperties(this, object);
  }
}