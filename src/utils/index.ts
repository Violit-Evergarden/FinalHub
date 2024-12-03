
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const isValidImageUrl = (url: string) => {
  const urlPattern = /^(https?:\/\/)[\da-z.-]+\.([a-z.]{2,6})([/\w .-]*\.(jpg|jpeg|png|gif|svg))$/i
  return urlPattern.test(url)
}

export function deepClone(obj: any, map = new WeakMap()) {
  if (typeof obj !== 'object' && typeof obj !== 'function' || obj === null) return obj;
  if (map.has(obj)) return map.get(obj);
  const clone : any = Array.isArray(obj) ? [] : {};
  map.set(obj, clone);
  for (const key in obj) {
    clone[key] = deepClone(obj[key], map);
  }
  return clone;
}

// export function throttle(func: Function, ms: number, ...args: any[]) {
//   let startTime = 0;
//   return function(...newArgs: unknown[]){
//     if(Date.now() - startTime < ms) return;
//     startTime = Date.now();
//     const result = func.apply(this, [...args, ...newArgs]);
//     return result;
//   }
// }
