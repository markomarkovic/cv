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

        <p v-for="(fact, i) in facts.quickFacts" v-bind:key="i">
          <img v-bind:src="fact.icon" />
          <span v-html="fact.text"></span>
        </p>
      </div>
    </section>

    <section class="experience">
      <div class="block">
        <h2>Experience</h2>
        <ul>
          <li v-for="(item, i) in facts.experience.points" v-bind:key="i">
            {{ item }}
          </li>
        </ul>
      </div>

      <div
        class="details"
        v-for="(item, i) in facts.experience.details"
        v-bind:key="i"
      >
        <img v-bind:src="item.logo" />
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
          <span v-for="(tag, i) in item.technologies" v-bind:key="i">{{
            tag
          }}</span>
        </p>
        <p class="description">
          {{ item.description }}
        </p>
      </div>
    </section>

    <section class="education">
      <h2>Education</h2>

      <div class="details" v-for="(item, i) in facts.education" v-bind:key="i">
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

      <div class="details" v-for="(item, i) in facts.projects" v-bind:key="i">
        <img v-bind:src="item.logo" />
        <h3>
          <a v-bind:href="item.link">{{ item.title }}</a>
        </h3>
        <p class="date">
          <span class="from">{{ item.startDate }}</span> ⇨
          <span class="to">{{ item.endDate }}</span>
        </p>
        <p class="tags">
          <span v-for="(tag, i) in item.technologies" v-bind:key="i">{{
            tag
          }}</span>
        </p>
        <p class="description">
          {{ item.description }}
        </p>
      </div>
    </section>

    <section class="openSource">
      <h2>Open Source</h2>

      <div class="details" v-for="(item, i) in facts.openSource" v-bind:key="i">
        <h3>
          <a v-bind:href="item.link">{{ item.title }}</a>
        </h3>
        <p class="tags" v-if="item.technologies.length > 0">
          <span v-for="(tag, i) in item.technologies" v-bind:key="i">{{
            tag
          }}</span>
        </p>
        <p class="description">
          {{ item.description }}
        </p>
        <p class="aside" v-if="item.aside" v-html="item.aside"></p>
      </div>
    </section>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import facts from './facts'

export default {
  name: 'App',
  setup() {
    const pageTitle = facts.basicFacts.pageTitle

    onMounted(() => {
      document.title = pageTitle
    })

    const howLong = (from, to) => {
      const fromDate = new Date(from)
      fromDate.setDate(1)
      let toDate = new Date()
      if (to !== 'Present') {
        toDate = new Date(to)
        toDate.setDate(30)
      }
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

    return {
      facts,
      howLong,
    }
  },
}
</script>
