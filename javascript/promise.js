const promise = new Promise((resolve, reject) => {
  try {
    resolve("ok");
  } catch (e) {
    reject(e);
  }
});

promise.then(
  (resolvedValue) => {
    console.log("resolved value is ", resolvedValue);
  },
  (rejectedReson) => {
    console.log("rejected reson is ", rejectedReson);
  }
);
