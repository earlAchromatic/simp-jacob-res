function getPortfolio() {
  return {
    device: "desktop",
    width: 1281,
    height: 800,
    scale: 0.468384075,
    marginLeft: 0,
    breakpoint: 1280,
    src: "https://stout-law-temp.netlify.app",
    sites: [
      {
        id: "Powered Engineering",
        imgPath: "/images/Samples/poweredengineering.png",
        src: "https://poweredengineering.com",
        tags: ["Premium"],
      },
      {
        id: "Automaton",
        imgPath: "/images/Samples/Automaton.png",
        src: "https://automatereal.estate",
        tags: ["Premium"],
      },
      {
        id: "Stout Law",
        imgPath: "/images/Samples/StoutLaw.png",
        src: "https://stout-law-temp.netlify.app",
        tags: ["Premium"],
      },
      {
        id: "180 Thermal",
        imgPath: "/images/Samples/180Thermal.png",
        src: "https://180Thermal.com",
        tags: ["e-commerce", ""],
      },
      {
        id: "Hyperion Web",
        imgPath: "/images/Samples/Jaybird.png",
        src: "https://hyperionweb.dev",
        tags: ["e-commerce", "Premium"],
      },
      {
        id: "Local Web",
        imgPath: "/images/Samples/localweblogo.png",
        src: "https://ionia.localweb.co",
        tags: ["Single Page"],
      },
      {
        id: "Future You",
        imgPath: "/images/Samples/futureyou.png",
        src: "https://futureyou.netlify.app",
        tags: ["", "App"],
      },
      {
        id: "Hyperion Audits",
        imgPath: "/images/engineering_ball.png",
        src: "https://hyperion-audits.netlify.app",
        tags: [, "App"],
      },
      {
        id: "Quantum Thought Co.",
        imgPath: "/images/engineering_ball.png",
        src: "https://quantumthought.co",
        tags: [, "Premium"],
      },
      {
        id: "Cafe Hyperion",
        imgPath: "/images/Samples/coffee-cup.png",
        src: "https://cafe.hyperionweb.dev",
        tags: ["Premium"],
      },
      {
        id: "Purus Masonry",
        imgPath: "/images/Samples/coffee-cup.png",
        src: "https://purusmasonry.com",
        tags: ["Premium"],
      },
      {
        id: "Temper Inc.",
        imgPath: "/images/Samples/coffee-cup.png",
        src: "https://temperinc.netlify.app",
        tags: ["Premium"],
      },
    ],
    devices: [
      {
        name: "desktop",
        imgPath: "",
        iconPath: "/images/icons/pc.png",
        width: 1281,
        height: 800,
        scale: 0.468384075,
        marginLeft: 0,
        responsive: {
          phone: {
            scale: 0.234192037,
            marginLeft: 0,
          },
          tablet: {
            scale: 0.468384075,
            marginLeft: 0,
          },
        },
      },
      {
        name: "tablet",
        imgPath: "",
        iconPath: "/images/icons/tablet.png",
        width: 768,
        height: 1024,
        scale: 0.390625,
        marginLeft: 150,
        responsive: {
          phone: {
            scale: 0.1953125,
            marginLeft: 75,
          },
          tablet: {
            scale: 0.390625,
            marginLeft: 150,
          },
        },
      },
      {
        name: "mobile",
        imgPath: "",
        iconPath: "/images/icons/mobile.png",
        width: 360,
        height: 644,
        scale: 0.625,
        marginLeft: 187.3239437,
        responsive: {
          phone: {
            scale: 0.312989045,
            marginLeft: 93.66197183,
          },
          tablet: {
            scale: 0.625978091,
            marginLeft: 187.3239437,
          },
        },
      },
    ],
    updateDevice: function (dev) {
      // need to add checks for breakpoints
      this.device = dev;
      this.devices.forEach((e) => {
        if (e.name == dev) {
          this.width = e.width;
          this.height = e.height;
          if (this.breakpoint < 480) {
            this.scale = e.responsive.phone.scale;
            this.marginLeft = e.responsive.phone.marginLeft;
          } else if (this.breakpoint > 480 && this.breakpoint < 768) {
            this.scale = e.responsive.tablet.scale;
            this.marginLeft = e.responsive.tablet.marginLeft;
          } else {
            this.scale = e.scale;
            this.marginLeft = e.marginLeft;
          }
        }
      });
    },
    updateSrc: function (site) {
      this.sites.forEach((e) => {
        if (e.id == site) {
          this.src = e.src;
        }
      });
    },
    filterSpSites: function (tags) {
      var val = false;
      tags.forEach((e) => {
        if (e == "Single Page") {
          val = true;
        }
      });
      return val;
    },
    filterApps: function (tags) {
      var val = false;
      tags.forEach((e) => {
        if (e == "App") {
          val = true;
        }
      });
      return val;
    },
    filterPremiumSites: function (tags) {
      var val = false;
      tags.forEach((e) => {
        if (e == "Premium") {
          val = true;
        }
      });
      return val;
    },
    checkResize: function () {
      this.getSize();
      window.addEventListener("resize", () => {
        console.log("resize");
        //set breakpoint to window size
        this.getSize();
      });
    },
    getSize: function () {
      this.breakpoint = window.screen.width;

      console.log(this.breakpoint);

      if (this.breakpoint >= 480 && this.breakpoint <= 768) {
        console.log("responsive: tablet");
      } else if (this.breakpoint <= 480) {
        console.log("responsive: phone");
      } else {
        console.log("responsive: desktop");
      }

      this.updateDevice(this.device);
    },
  };
}
