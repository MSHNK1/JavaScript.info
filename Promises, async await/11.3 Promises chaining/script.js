//N1 - Promise: then versus catch
promise.then(f1).catch(f2);
promise.then(f1, f2);

// those are not equal, as in the first example, f2 occurs after f1. Whilst in the second example it depends on the promise whether f1 handler function will be executed or f2