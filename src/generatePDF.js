const fs = require('fs')
const path = require('path')
const puppeteer = require('puppeteer')

async function generatePDF() {
  const browser = await puppeteer.launch({ headless: 'new' })
  const page = await browser.newPage()
  await page.goto('http://localhost:8080/', { waitUntil: 'networkidle0' })
  const pdf = await page.pdf({
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: false,
  })
  await browser.close()

  const saveFile = path.resolve(
    __dirname,
    '..',
    'dist',
    'Marko Markovic - CV - EN.pdf'
  )
  fs.writeFileSync(saveFile, pdf)
}

generatePDF()
