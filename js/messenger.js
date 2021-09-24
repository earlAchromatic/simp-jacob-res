function getMessenger() {
  return {
    open: false,
    messages: [
      "Thanks for Visiting my Resume Site!",
      "Technically, I am just a robot. Not the real Jacob.",
      "If you click on me, I'll let you browse around in peace (and you can see the stuff behind me 🤷🏻)",
      "Be sure to check out the color scheme switches!",
      "Jacob programmed me to do his bidding.",
      "Someday, you won't be able to tell I'm a robot.",
      "Don't forget you can click on me to get me to disappear.",
    ],
    delayedStart: function () {
      setTimeout(() => {
        this.open = true;
        this.startMessageQueue();
      }, 2500);
    },
    startMessageQueue: function () {
      let entryP = document.getElementById("message");
      let hello = "Hey There 👋, I'm Jacob.";
      let d = document.createElement("p");
      d.innerText = hello;
      entryP.append(d);
      entryP.scrollTo(0, entryP.scrollHeight);
      this.messages.forEach((a, i) => {
        setTimeout(() => {
          let d = document.createElement("p");
          d.innerText = a;
          entryP.append(d);
          triggerContrast();
          entryP.scrollTo(0, entryP.scrollHeight);
        }, i * (Math.random() * 5000) + i * 3500);
      });
    },
  };
}
