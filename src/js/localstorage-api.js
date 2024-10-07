export const load = key => {
  try {
    const valueFromLS = localStorage.getItem(key);

    return valueFromLS === null ? undefined : JSON.parse(valueFromLS);
  } catch (error) {
    console.log(error);
  }
};

export const save = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};
