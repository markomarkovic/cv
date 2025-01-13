import fs from 'fs'
import path from 'path'
import puppeteer from 'puppeteer'

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

  const saveFile = path.resolve('dist', 'Marko Markovic - CV - EN.pdf')
  fs.writeFileSync(saveFile, pdf)
}

generatePDF()
