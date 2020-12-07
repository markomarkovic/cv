export default [
  {
    title: 'This CV',
    link: 'https://github.com/markomarkovic/cv',
    technologies: ['vue', 'vite', 'tailwind css', 'github pages', 'puppeteer'],
    description: `Latest iteration of this CV, now built with Vue and Tailwind CSS, published to GitHub Pages, and generating a PDF version using Puppeteer.`,
    aside: `<a href="${
      import.meta.env.BASE_URL
    }/Marko Markovic - CV - EN.pdf">Download PDF</a>`,
  },
  {
    title: 'simple-php-git-deploy',
    link: 'https://github.com/markomarkovic/simple-php-git-deploy',
    technologies: ['php', 'git'],
    description:
      'A hook to automatically deploy the code using php and git. Mostly scratching my own itch for servers where direct ssh access is not feasible.',
  },
  {
    title: 'serbian-qwertz-mac-keyboard-layout',
    link: 'https://github.com/markomarkovic/serbian-qwertz-mac-keyboard-layout',
    technologies: [],
    description: `Serbian QWERTZ keyboard layout for Mac OS. Probably obsolete by now as it hasn't been updated for a decade now.`,
  },
]
