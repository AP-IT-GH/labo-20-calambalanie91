("use strict");

const multiply = (number1, number2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(number1 * number2);
    }, 5000);
  });
};

multiply(4, 7)
  .then((result) => {
    console.log(`resultaat:`, result);
  })
  .catch((error) => {
    console.error("Er is een fout opgetreden:", error);
  });
