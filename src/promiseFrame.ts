type FunctionType<T> = () => Promise<T> | T;

// Получить из массива функций перечисление результатов их вызовов
// (в случае возврата промиса учитывается именно результат промиса)
type FunctionResultsUnion<
  T extends FunctionType<any>[] | Readonly<FunctionType<any>[]>
> = {
  [K in keyof T]: Awaited<ReturnType<T[K]>>;
}[number];

const promiseFrame = async <
  T extends FunctionType<any>[] | Readonly<FunctionType<any>[]>,
  ResultsT = FunctionResultsUnion<T>
>(
  functions: T,
  limit?: number
): Promise<ResultsT[]> => {
  if (!Array.isArray(functions) || (limit !== undefined && limit <= 0)) {
    throw new Error('INVALID_ARGUMENT');
  }
  return new Promise((resolve, reject) => {
    const funcQueue: { index: number; func: FunctionType<any> }[] =
      functions.map((func, index) => ({
        index,
        func,
      }));

    const results: ResultsT[] = [];
    let executedCount: number = 0;

    const executor = async ({
      func,
      index,
    }: {
      index: number;
      func: FunctionType<any>;
    }) => {
      try {
        results[index] = await func();
        executedCount++;

        if (executedCount === functions.length) {
          resolve(results);
        }

        const curFuncObj = funcQueue.shift();
        if (curFuncObj) {
          executor(curFuncObj);
        }
      } catch (e) {
        reject(e);
      }
    };

    for (let i = 0; i < (limit || functions.length); i++) {
      const funcObj = funcQueue.shift();

      if (funcObj) {
        executor(funcObj);
      }
    }
  });
};

export default promiseFrame;
