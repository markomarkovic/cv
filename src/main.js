function getSystemTheme() {
  return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function getEffectiveTheme() {
  return localStorage.getItem('theme') || getSystemTheme()
}

function setSvgHidden(svg, isHidden) {
  if (isHidden) {
    svg.setAttribute('hidden', '')
  } else {
    svg.removeAttribute('hidden')
  }
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme
  setSvgHidden(document.getElementById('icon-sun'), theme !== 'dark')
  setSvgHidden(document.getElementById('icon-moon'), theme === 'dark')
}

applyTheme(getEffectiveTheme())

document.getElementById('theme-toggle').addEventListener('click', () => {
  const next = getEffectiveTheme() === 'dark' ? 'light' : 'dark'
  localStorage.setItem('theme', next)
  applyTheme(next)
})

matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (!localStorage.getItem('theme')) applyTheme(getSystemTheme())
})
