<template>
  <header>
      <h1>{{ fullname }}</h1>
      <div class="subtitle">{{ job }}</div>
  </header>
</template>

<script>
export default {
  name: 'ahead',
  data () {
    return {
      firstname: 'Steeve',
      lastname: 'Clément',
      job: 'Intégrateur / Développeur Front-End'
    }
  },
  computed: {
    fullname () {
      return `${this.firstname} ${this.lastname}`
    }
  }
}
</script>
