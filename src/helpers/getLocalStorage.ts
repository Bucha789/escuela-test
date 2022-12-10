export const getLocalStorage = <T> (key: string): T | null => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
}

export const setLocalStorage = <T>(key: string, value: T): void => {
  const item = JSON.stringify(value);
  localStorage.setItem(key, item);
};