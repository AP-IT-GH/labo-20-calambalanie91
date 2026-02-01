("use strict");
function checkDonutStock(donutInStock) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (donutInStock >= 5) {
        resolve("Enough donuts for Lanie!");
      } else {
        reject("Oh no! Not enough donuts!");
      }
    }, 5000);
  });
}

checkDonutStock(4)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Er is een fout opgetreden.", error);
  });
