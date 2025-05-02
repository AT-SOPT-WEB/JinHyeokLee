export const getStorage = (key) => {
  const data = localStorage.getItem(key);
  if (!data) {
    return null;
  }

  return JSON.parse(data);
};

export const setStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
