/* eslint-disable no-console */
const landHash = require('../lib');

// eslint-disable-next-line array-callback-return
Array.from(Array(100), () => {
  console.log(landHash(Math.random()));
});
