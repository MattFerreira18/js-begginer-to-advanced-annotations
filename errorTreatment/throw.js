// used to create a user-define exception (shows the this error to user)
const date = new Date();

// instanceof => verify if property is from prototype
if (date && !(date instanceof Date)) {
  throw new TypeError('expected the date instance');
}
