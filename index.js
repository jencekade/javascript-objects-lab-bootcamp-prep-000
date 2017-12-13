var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  let newObject = ({}, object, {[key]:value});
  return newObject;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[value] = key;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object)
  delete object[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
