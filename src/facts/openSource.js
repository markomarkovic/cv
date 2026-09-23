export default [
  {
    title: 'This CV',
    link: 'https://github.com/markomarkovic/cv',
    technologies: [
      'vite',
      'html',
      'css',
      'github actions',
      'github pages',
      'puppeteer',
    ],
    description: `Latest iteration of this CV, rendered from plain data to a static HTML page with Vite, published to GitHub Pages, and generating a PDF version using Puppeteer.`,
    aside: `<a href="./Marko Markovic - CV - EN.pdf">Download PDF</a>`,
  },
  // {
  //   title: 'time-ago-lite',
  //   link: 'https://github.com/markomarkovic/time-ago-lite',
  //   technologies: ['typescript', 'library', 'tests'],
  //   description: `A liteweight library to generate time ago string from a date. Never got around to actually publish it on NPM.`,
  // },
  // {
  //   title: 'sao-js-skeleton',
  //   link: 'https://github.com/markomarkovic/sao-js-skeleton',
  //   technologies: ['javascript', 'sao', 'template', 'skeleton'],
  //   description:
  //     'A tiny JavaScript project skeleton that I use for personal projects.',
  // },
  // {
  //   title: 'simple-php-git-deploy',
  //   link: 'https://github.com/markomarkovic/simple-php-git-deploy',
  //   technologies: ['php', 'git'],
  //   description:
  //     'A hook to automatically deploy the code using php and git. Mostly scratching my own itch for servers where direct ssh access is not feasible.',
  // },
  {
    title: 'Serbian QWERTZ and QWERTY keyboard layouts for macOS',
    link: 'https://github.com/markomarkovic/serbian-qwertz-mac-keyboard-layout',
    technologies: [],
    description: `The keyboard layout for the Serbian language that's used in the Mac OS is different than the standard one which makes using macOS a PITA for the people like me that are used to the standard layout. Since Bosnian, Croatian and Slovene (according to Wikipedia article) are using the same layout, they too can benefit from this.`,
  },
  {
    title: 'nena ilo lili',
    link: 'https://github.com/markomarkovic/nena-ilo-lili',
    technologies: ['toy', 'claude', 'platformio.org'],
    description: `A one-button USB HID device on a Seeeduino XIAO SAMD21. It enumerates as a HID composite named nena ilo lili and turns a single momentary button into a keystroke, a key selector, and a mouse jiggler.`,
  },
  {
    title: 'insta display',
    link: 'https://github.com/markomarkovic/insta-display',
    technologies: ['toy', 'claude', 'platformio.org'],
    description: `A shuffled photo slideshow for the VIEWE UEDX48480040E-WB-A — a 4-inch 480×480 ESP32-S3 touch display. Reads images from a microSD card and rotates through them with a 1-second crossfade, while the on-board RGB LED glows in the average colour of the photo on screen.`,
  },
  {
    title: 'CYD Crypto Ticker',
    link: 'https://github.com/markomarkovic/cyd-crypto-ticker',
    technologies: ['toy', 'claude', 'platformio.org', 'lvgl'],
    description: `A real-time cryptocurrency price display application for ESP32-based "Cheap Yellow Display" (CYD) boards from Sunton. Features a modern touchscreen interface built with LVGL to monitor your favorite cryptocurrencies with live price updates, trend indicators, and customizable display options.`,
  },
  {
    title: '8x8x8x8',
    link: 'https://github.com/markomarkovic/8x8x8x8',
    technologies: ['toy', 'claude', 'vite', 'firebase', 'platformio.org'],
    description:
      'Pixel art animation editor for creating 8×8 pixel animations with 8 frames and an 8-color palette. Also a hardware LED-based display for those. A toy project.',
  },
]
