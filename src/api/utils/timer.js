export const promiseTimer = (func, timeoutMilliseconds, initialValue, handler, errorHandler) => {
  const start = new Date().getTime();
  func(initialValue)
    .then(({newValue, result}) => {
      handler(newValue, result);
      setTimeout(promiseTimer, timeoutMilliseconds - (new Date().getTime() - start), func, timeoutMilliseconds, newValue, handler, errorHandler);
    })
    .catch(err => {
      errorHandler(err);
      setTimeout(promiseTimer, timeoutMilliseconds - (new Date().getTime() - start), func, timeoutMilliseconds, initialValue, handler, errorHandler);
    });
}