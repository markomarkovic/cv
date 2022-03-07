<script setup>
import { onMounted } from 'vue'
import facts from '~/facts'

onMounted(() => {
  document.title = facts.basicFacts.pageTitle
})

const dateFromShort = (str) => {
  if (str === 'Present') {
    return new Date()
  }
  const [month, year] = str.split(' ')

  return new Date(
    year,
    [
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
    ].indexOf(month)
  )
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
  return out.join(', ')
}
</script>

<template>
  <div class="container">
    <header>
      <h1>
        <p class="title">{{ facts.basicFacts.title }}</p>
        <div class="name">
          {{ facts.basicFacts.name }}
          <p class="profession">{{ facts.basicFacts.profession }}</p>
        </div>
      </h1>

      <blockquote>
        <p v-html="facts.basicFacts.quote"></p>
      </blockquote>
    </header>

    <section class="quickfacts">
      <div class="block">
        <h2>Quick facts</h2>
        <p v-for="(fact, i) in facts.quickFacts" :key="i">
          <span class="icon" :class="fact.icon"></span>
          <span v-html="fact.text"></span>
        </p>
      </div>
    </section>

    <section class="experience">
      <div class="block">
        <h2>Experience summary</h2>
        <ul>
          <li v-for="(item, i) in facts.experience.points" :key="i">
            {{ item }}
          </li>
        </ul>
      </div>
    </section>

    <section class="experience">
      <h2>Experience in more details</h2>

      <div
        v-for="(item, i) in facts.experience.details"
        :key="i"
        class="details"
      >
        <img :src="item.logo" />
        <h3>
          {{ item.title }} &mdash; {{ item.employer }}
          <small>{{ item.location }}</small>
        </h3>
        <p class="date">
          <span class="from">{{ item.startDate }}</span> ⇨
          <span class="to">{{ item.endDate }}</span>
          ({{ howLong(item.startDate, item.endDate) }})
        </p>
        <p class="tags">
          <span v-for="(tag, j) in item.technologies" :key="j">{{ tag }}</span>
        </p>
        <p class="description">
          {{ item.description }}
        </p>
      </div>
    </section>

    <section class="education">
      <h2>Education</h2>

      <div v-for="(item, i) in facts.education" :key="i" class="details">
        <h3>
          {{ item.title }}
        </h3>
        <p class="where">{{ item.institution }}, {{ item.location }}</p>
        <p class="date">
          <span class="from">{{ item.startDate }}</span> ⇨
          <span class="to">{{ item.endDate }}</span>
        </p>
        <p class="description">
          {{ item.description }}
        </p>
      </div>
    </section>

    <section class="projects">
      <h2>Notable Projects</h2>

      <div v-for="(item, i) in facts.projects" :key="i" class="details">
        <img :src="item.logo" />
        <h3>
          <a :href="item.link">{{ item.title }}</a>
        </h3>
        <p class="date">
          <span class="from">{{ item.startDate }}</span>
          <span v-if="item.endDate">
            ⇨
            <span class="to">{{ item.endDate }}</span>
          </span>
        </p>
        <p class="tags">
          <span v-for="(tag, j) in item.technologies" :key="j">{{ tag }}</span>
        </p>
        <p class="description">
          {{ item.description }}
        </p>
      </div>
    </section>

    <section class="openSource">
      <h2>Open Source</h2>

      <div v-for="(item, i) in facts.openSource" :key="i" class="details">
        <h3>
          <a :href="item.link">{{ item.title }}</a>
        </h3>
        <p v-if="item.technologies.length > 0" class="tags">
          <span v-for="(tag, j) in item.technologies" :key="j">{{ tag }}</span>
        </p>
        <p class="description">
          {{ item.description }}
        </p>
        <p v-if="item.aside" class="aside" v-html="item.aside"></p>
      </div>
    </section>

    <footer>
      <div class="pt-5 text-gray-300 text-right text-sm">
        Last update: __LAST_UPDATE__
      </div>
    </footer>
  </div>
</template>

<style>
html,
body {
  color: rgba(0, 0, 0, 0.9);
  font-size: 16px;
  font-family: Lato, sans-serif;
  font-variant-ligatures: common-ligatures;
  line-height: 1.67;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  text-decoration: underline;
  color: #0c93e4;
}

.block,
.details {
  page-break-inside: avoid;
}
</style>
