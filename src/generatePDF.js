import fs from 'fs'
import path from 'path'
import puppeteer from 'puppeteer'
import { preview } from 'vite'

async function generatePDF() {
  const server = await preview({ preview: { port: 4173, strictPort: true } })
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' })
  const pdf = await page.pdf({
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: false,
  })
  await browser.close()
  await server.close()

  const saveFile = path.resolve('dist', 'Marko Markovic - CV - EN.pdf')
  fs.writeFileSync(saveFile, pdf)
}

generatePDF()
