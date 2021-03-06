function getTechList() {
  return {
    colorNum: 9,
    prop: 0,
    rand: function (start, finish) {
      return Math.floor(Math.random() * finish + start);
    },
    techlist: [
      {
        foundations: [
          {
            imgUrl: './images/tech/html5.png',
            title: 'HTML5',
            blurb:
              'Every rock solid dev foundation starts with understanding hypertext. I particularly love pushing the boundaries of intersting aspects of the spec, like Canvas and SVG',
          },
          {
            imgUrl: './images/tech/css3.png',
            title: 'CSS3',
            blurb: 'Hypertext is boring until you style it!',
          },
          {
            imgUrl: './images/tech/js.png',
            title: 'Javascript',
            blurb: 'Nothing moves without some good ole fashioned JS.',
          },
          {
            imgUrl: './images/tech/ts-logo-512.png',
            title: 'Typescript',
            blurb:
              'Javascript makes things move, but sometimes quite unreliably without a healthy dose of Typescript.',
          },
          {
            imgUrl: './images/tech/node.png',
            title: 'Node.js',
            blurb: 'Use Javascript anywhere! This gets people excited.',
          },
          {
            imgUrl: './images/tech/sass.png',
            title: 'Sass',
            blurb:
              'Pre-processing is nice, but I am interested in moving to a CSS custom property-based system. I think we may see these go by the wayside in the future.',
          },
          {
            imgUrl: './images/tech/nunjucks.png',
            title: 'Nunjucks',
            blurb:
              'My serverside templating language of choice, usually paired with a static site generator, like 11ty.',
          },
        ],
      },
      {
        frameworks: [
          {
            imgUrl: './images/tech/vue.png',
            title: 'Vue 2 & 3',
            blurb:
              'Community-driven, incrementally adoptable reactive framework for building user interfaces. Prefer Vue 3 as it lends great new functionality such as full Typescript compatibility and the Composition API.',
          },
          {
            imgUrl: './images/tech/11ty.png',
            title: '11ty',
            blurb:
              'This is my Static Site Generator of choice. It provides maximum flexibility and is a premier entry point into the JAMstack.',
          },
          {
            imgUrl: './images/tech/web-components.png',
            title: 'Web Component',
            blurb:
              'Custom Elements, ShadowDOM, and the Template element make up the web component spec that lets you craft your own totally encapsulated reusable components that work regardless of your ecosystem or framework.',
          },
          {
            imgUrl: './images/tech/lit.svg',
            title: 'Lit',
            blurb:
              'Minimalist framework for building reactive web components. Thanks ',
          },
          {
            imgUrl: './images/tech/alpine_long.svg',
            title: 'Alpine.js',
            blurb: 'The modern jquery since jquery is no longer cool.',
          },
          {
            imgUrl: './images/tech/bulma-logo.png',
            title: 'Bulma',
            blurb:
              'A flexbox based CSS framework that is nice for quickly making nice looking prototypes.',
          },
          {
            imgUrl: './images/tech/halfmoon.svg',
            title: 'Halfmoon',
            blurb:
              'A cool take on css frameworks that is targeted at building tools and dashboards. I specifically like the implementation of CSS custom properties that let you re-style by changing a few top-level variables.',
          },
        ],
      },
      {
        toolbox: [
          {
            imgUrl: './images/tech/lighthouse.svg',
            title: 'Google Lighthouse',
            blurb:
              'I use lighthouse extensively as my primary testing framework. I am a stickler for site optimization and have built an automation application for running batch tests using the lighthouse CLI.',
          },
          {
            imgUrl: './images/tech/git.png',
            title: 'Git',
            blurb: 'Gits gotta git.',
          },

          {
            imgUrl: './images/tech/webpack.png',
            title: 'Webpack',
            blurb:
              'I use webpack to bundle code for building libraries that rely on node modules. It is especially useful when using Vue as I prefer the SFC (single file component) syntax and file organization it allows.',
          },
          {
            imgUrl: './images/tech/vite.svg',
            title: 'Vite',
            blurb:
              'The ultimate dev tool? Some people think so. It is a pretty fast dev server with Hot Module Replacement and no/low config! Useful for rapid prototyping.',
          },
          {
            imgUrl: './images/tech/apexchart.png',
            title: 'Apex Chart',
            blurb:
              'One of the more versatile charting libraries that I have found.',
          },

          {
            imgUrl: './images/tech/vscode.png',
            title: 'VS Code',
            blurb:
              'Visual Studio Code is my go-to IDE. I love its extension marketplace, configurability and seamless Typescript integration.',
          },
          {
            imgUrl: './images/tech/netlify.png',
            title: 'Netlify',
            blurb:
              'If 11ty is the gateway to the JAMstack, then Netlify is its gatekeeper. It is a CDN services that powers nearly all of my front-end sites and applications.',
          },
          {
            imgUrl: './images/tech/ghost.png',
            title: 'Ghost',
            blurb:
              "A minimal content management system that I use as a 'headless' CMS. It has a great content API that makes decoupling easy and efficient. Also has a great interface for writing content in Markdown.",
          },
          {
            imgUrl: './images/tech/1200px-DigitalOcean_logo.png',
            title: 'Digital Ocean',
            blurb: 'This is where I manage my servers on droplets.',
          },

          // {
          //   imgUrl: "./images/tech/Mailchimp-Logo.png",
          //   title: "Mailchimp",
          //   blurb:
          //     "I use the mailchimp API to manage market segments automatically as people submit forms on a site.",
          // },
          {
            imgUrl: './images/tech/wordsapi.png',
            title: 'Words API',
            blurb:
              'This is a cool API that is based on WordNet, the Princeton University lexical database of English words.',
          },
          // {
          //   imgUrl: "./images/tech/snipcart.jpeg",
          //   title: "Snipcart",
          //   blurb: "Simple E-commerce for statically generated sites.",
          // },
        ],
      },
    ],
  };
}
