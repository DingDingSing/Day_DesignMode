async function asyncPool(
  limit: number,
  delayTask: number[],
  promiseSimulator: (delay: number) => Promise<any>
) {
  const waiting: Promise<any>[] = [];
  const pending: Promise<any>[] = [];

  for (let item of delayTask) {
    const promisifyTask = promiseSimulator(item);
    waiting.push(promisifyTask);

    if (limit < delayTask.length) {
      const executor: Promise<any> = promisifyTask.then(() =>
        pending.splice(pending.indexOf(executor), 1)
      );
      pending.push(executor);

      if(pending.length >=limit){
        await Promise.race(pending)
      }
    }
  }

  return Promise.all(waiting);
}

const promiseSimulator = (delay: number) => {
  console.log("开始", delay);
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(delay);
      console.log("结束", delay);
    }, delay)
  );
};

(async () => {
  const res = await asyncPool(
    2,
    [1000, 7000, 6000, 3000, 2000],
    promiseSimulator
  );
  console.log(res);
})();

// async function asyncPool(
//     limit: number,
//     delayTask: number[],
//     promiseSimulator: (delay: number) => Promise<any>
//   ) {
//     const pending: Promise<any>[] = [];
//     const waiting: Promise<any>[] = [];

//     for (let item of delayTask) {
//       const promisifyTask = Promise.resolve(promiseSimulator(item));
//       waiting.push(promisifyTask);

//       if (limit < delayTask.length) {
//         const executor: Promise<any> = promisifyTask.then(() =>
//           pending.splice(pending.indexOf(executor), 1)
//         );
//         pending.push(executor);

//         if (pending.length >= limit) {
//           await Promise.race(pending);
//         }
//       }
//     }
//     console.log("waiting", waiting);
//     console.log("pending", pending);
//     return Promise.all(waiting);
//   }
