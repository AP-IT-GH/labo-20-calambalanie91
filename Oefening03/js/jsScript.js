"use strict";

const multiply = (number1, number2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(number1 * number2);
    }, 5000);
  });
};

multiply(4, 7)
  .then((result) => {
    console.log(`stap 1:`, result);
    return multiply(result, 2);
  })
  .then((result) => {
    console.log(`stap 2:`, result);
    return multiply(result, 2);
  })
  .then((result) => {
    console.log(`stap 3:`, result);
    return multiply(result, 2);
  })
  .then((result) => {
    console.log(`stap 4:`, result);
    return multiply(result, 2);
  })
  .then((result) => {
    console.log(`stap 5:`, result);
    return multiply(result, 2);
  })
  .catch((error) => {
    console.error("Er is een fout opgetreden:", error);
  });
