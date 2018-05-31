const add = (a = 12, b = 13) => a + b;

const subtract = (a, b) => {
  if (a < b) return b - a;
  return a - b;
};

export { add, subtract };
