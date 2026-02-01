"use strict";

Notification.requestPermission()
  .then((permission) => {
    if (permission === "granted") {
      new Notification("Hello world");
    } else {
      console.log("Toestemming geweigerd");
    }
  })
  .catch((error) => {
    console.log("Er is een fout opgetreden:", error);
  });
