//N1 - Error in setTimeout
new Promise(function (resolve, reject) {
    throw new Error("Whoops!");
}).catch(alert);

// error will be alerted, because promise throws an error, which is caught and alerted



new Promise(function (resolve, reject) {
    setTimeout(() => {
        throw new Error("Whoops!");
    }, 1000);
}).catch(alert);

// this error won't be alerted, as it is not caught, because try...catch handles only synchronous errors, whilst we are using here an asynchronous one.
// what's inside setTimeout is thrown after settling the promise, thus it is not caught.