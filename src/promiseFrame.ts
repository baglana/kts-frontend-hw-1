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
  if (!Array.isArray(functions) || typeof limit !== 'number' || limit <= 0) {
    throw new Error('INVALID_ARGUMENT');
  }
  return [];
};

export default promiseFrame;
