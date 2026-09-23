import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'
import facts from './src/facts/index.js'
import { render } from './src/render.js'

const renderFacts = () => ({
  name: 'render-facts',
  transformIndexHtml: (html) =>
    html
      .replace('<!--title-->', facts.basicFacts.pageTitle)
      .replace('<!--cv-->', render(facts)),
})

// https://vitejs.dev/config/
export default defineConfig({
  base: './',

  plugins: [renderFacts(), viteSingleFile()],

  build: {
    emptyOutDir: true,
  },
})
