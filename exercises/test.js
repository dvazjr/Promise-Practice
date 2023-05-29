/**
 * TESTING IN NODE JS
 * You can test your functions/promises here. Make sure to remove the 'export' keyword
 * to be able to run the functions successfully with
 * ```node exercises/test.js```
 */
const promise = Promise.resolve(1)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(alwaysThrows)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .catch(onReject);
