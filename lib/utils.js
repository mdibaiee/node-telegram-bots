export function setProperties(sourceObject, object) {
  sourceObject.properties = Object.assign(sourceObject.properties, object);
  return sourceObject;
}


export function getProperties(sourceObject, object) {
  return object ? sourceObject.properties[object] : sourceObject.properties;
}