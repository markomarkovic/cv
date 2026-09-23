import tabler from '@iconify-json/tabler/icons.json' with { type: 'json' }

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const escape = (str) =>
  String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')

const dateFromShort = (str) => {
  if (!str || str === 'Present') {
    return new Date()
  }
  const [month, year] = str.split(' ')
  return new Date(year, MONTHS.indexOf(month))
}

const howLong = (from, to) => {
  const fromDate = dateFromShort(from)
  const toDate = dateFromShort(to)
  fromDate.setDate(1)
  toDate.setDate(
    new Date(toDate.getFullYear(), toDate.getMonth() + 1, 0).getDate()
  )
  const diff = (toDate - fromDate) / 1000 / 60 / 60 / 24 / 30
  const years = Math.floor(diff / 12)
  const months = Math.floor(diff % 12)
  const out = []
  if (years >= 1) {
    out.push(`${years} year${years > 1 ? 's' : ''}`)
  }
  if (months >= 1) {
    out.push(`${months} month${months > 1 ? 's' : ''}`)
  }
  return out.length > 0 ? `(${out.join(', ')})` : ''
}

const icon = (name) =>
  `<svg class="icon" viewBox="0 0 ${tabler.width} ${tabler.height}" aria-hidden="true">${tabler.icons[name].body}</svg>`

const list = (items, fn) => items.map(fn).join('\n')

const tags = (technologies) =>
  technologies.length > 0
    ? `<p class="tags">${list(technologies, (tag) => `<span>${escape(tag)}</span>`)}</p>`
    : ''

const dates = (startDate, endDate) =>
  `<p class="date"><span class="from">${escape(startDate)}</span>${
    endDate ? ` ⇨ <span class="to">${escape(endDate)}</span>` : ''
  }</p>`

const logo = (src, alt) =>
  src ? `<img src="${escape(src)}" alt="${escape(alt)}" />` : ''

export const render = (facts) => `
<header>
  <h1>
    <p class="title">${escape(facts.basicFacts.title)}</p>
    <div class="name">
      ${escape(facts.basicFacts.name)}
      <p class="profession">${escape(facts.basicFacts.profession)}</p>
    </div>
  </h1>
  <blockquote><p>${facts.basicFacts.quote}</p></blockquote>
</header>

<section class="quickfacts">
  <div class="block">
    <h2>Quick facts</h2>
    ${list(facts.quickFacts, (fact) => `<p>${icon(fact.icon)}<span>${fact.text}</span></p>`)}
  </div>
</section>

<section class="experience">
  <div class="block">
    <h2>Experience overview</h2>
    <ul>
      ${list(facts.experience.points, (item) => `<li>${escape(item)}</li>`)}
    </ul>
  </div>
</section>

<section class="experience">
  <h2>Experience in more detail</h2>
  ${list(
    facts.experience.details,
    (item) => `
  <div class="details">
    ${logo(item.logo, item.employer)}
    <h3>
      ${escape(item.title)} &mdash; ${escape(item.employer)}
      <small>${escape(item.location)}</small>
    </h3>
    <p class="date">
      <span class="from">${escape(item.startDate)}</span> ⇨
      <span class="to">${escape(item.endDate || 'Present')}</span>
      ${howLong(item.startDate, item.endDate)}
    </p>
    ${tags(item.technologies)}
    <p class="description">${escape(item.description)}</p>
  </div>`
  )}
</section>

<section class="education">
  <h2>Education</h2>
  ${list(
    facts.education,
    (item) => `
  <div class="details">
    <h3>${escape(item.title)}</h3>
    <p class="whereAt">${escape(item.institution)}, ${escape(item.location)}</p>
    ${dates(item.startDate, item.endDate)}
    <p class="description">${escape(item.description)}</p>
  </div>`
  )}
</section>

<section class="projects">
  <h2>Notable projects</h2>
  ${list(
    facts.projects,
    (item) => `
  <div class="details">
    ${logo(item.logo, item.title)}
    <h3><a href="${escape(item.link)}">${escape(item.title)}</a></h3>
    ${dates(item.startDate, item.endDate)}
    ${tags(item.technologies)}
    <p class="description">${escape(item.description)}</p>
  </div>`
  )}
</section>

<section class="openSource">
  <h2>Open Source</h2>
  ${list(
    facts.openSource,
    (item) => `
  <div class="details">
    <h3><a href="${escape(item.link)}">${escape(item.title)}</a></h3>
    ${tags(item.technologies)}
    <p class="description">${escape(item.description)}</p>
    ${item.aside ? `<p class="aside">${item.aside}</p>` : ''}
  </div>`
  )}
</section>
`
