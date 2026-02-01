("use strict");
// async function permissionRequest() {
//   try {
//     const permission = await Notification.requestPermission();
//     if (permission === "granted") {
//       new Notification("Hello world");
//     } else {
//       console.log("Toestemming geweigerd");
//     }
//   } catch (error) {
//     console.log("Er is een fout opgetreden:", error);
//   }
// }
// permissionRequest();

// // Oefening 1 - Notificatie-toestemming vragen
// async function requestNotificationPermission() {
//     try {
//         const permission = await Notification.requestPermission()
//         if (permission === 'granted') {
//             new Notification('Hello world')
//         } else {
//             console.log('Toestemming geweigerd')
//         }
//     } catch (error) {
//         console.error('Fout bij het aanvragen van toestemming:', error)
//     }
// }

const multiply = (number1, number2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(number1 * number2);
    }, 1000);
  });
};

async function multiplication() {
  try {
    const result = await multiply(4, 7);
    console.log(`resultaat:`, result);
  } catch (error) {
    console.error("Er is een fout opgetreden:", error);
  }
}
multiplication();
async function multiplicationChaining() {
  try {
    let result = await multiply(4, 7);
    console.log(`resultaat:`, result);
    result = await multiply(result, 2);
    console.log(`resultaat:`, result);
    result = await multiply(result, 2);
    console.log(`resultaat:`, result);
    result = await multiply(result, 2);
    console.log(`resultaat:`, result);
    result = await multiply(result, 2);
    console.log(`resultaat:`, result);
  } catch (error) {
    console.error("Er is een fout opgetreden:", error);
  }
}
multiplicationChaining();

async function multiplicationWithFault() {
  try {
    let result = await multiply(4, 7);
    console.log(`resultaat:`, result);
    result = await multiply(result, 2);
    console.log(`resultaat:`, result);
    result = await multiply(result, 2);
    console.log(`resultaat:`, result);
    result = await multiply(result, 2);
    throw new Error("Iets fout gedaan tijdens stap 4");
    result = await multiply(result, 2);
    console.log(`resultaat:`, result);
  } catch (error) {
    console.error("Er is een fout opgetreden:", error);
  }
}
multiplicationWithFault();
