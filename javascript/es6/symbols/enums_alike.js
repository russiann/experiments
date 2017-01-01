const types = {
  INFO: Symbol('info'),
  WARN: Symbol('warn'),
  ERROR: Symbol('error')
};

const log = (type, ...args) => {
  switch (type) {
    case types.INFO:
      console.info(...args);
      break;
    case types.WARN:
      console.warn(...args);
      break;
    case types.ERROR:
      console.error(...args);
      break;
  }
}

log(types.INFO, 'Lorem ipsum dolor sit amet consectetur.');
log(types.WARN, 'CAUTION!');
log(types.ERROR, 'WTF...');
