<template>
  <div id="app" :style="bg">
    <ahead></ahead>

    <navigation></navigation>

    <presentation></presentation>

    <template v-for="article in articles">
      <categories :item="article"></categories>
    </template>
  </div>
</template>

<script>
import ahead from '@/components/Ahead'
import presentation from '@/components/Presentation'
import categories from '@/components/Categorie'
import navigation from '@/components/Navigation'
import tilt from 'vanilla-tilt'

export default {
  name: 'app',
  components: { ahead, presentation, categories, navigation, tilt },
  data () {
    return {
      articles: require('@/articles.json'),
      colors: [
        ['f44336', 'e91e63', '4caf50', 'cddc39', 'ffeb3b', 'ffc107', 'ff9800', 'ff5722'],
        ['9c27b0', '673ab7', '3f51b5', '2196f3', '03a9f4', '00bcd4', '009688', '8bc34a']
      ],
      background: {
        first: '',
        seconde: ''
      }
    }
  },
  beforeMount () {
    let colorOne = Math.floor(Math.random() * this.colors[0].length)
    let colorTwo = Math.floor(Math.random() * this.colors[1].length)

    this.background.first = '#' + this.colors[0][colorOne]
    this.background.seconde = '#' + this.colors[1][colorTwo]

    window.height = () => window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

    window.visible = (element, percentageViewTop) => {
      const rect = element.getBoundingClientRect()
      const elTop = rect.top <= window.height() / 100 * percentageViewTop && rect.bottom >= window.height() / 100 * percentageViewTop
      const elBot = rect.bottom <= window.height() && rect.bottom >= window.height() / 100 * (100 - percentageViewTop)

      return {
        top: rect.top < -75,
        lol: {elTop, elBot},
        bloc: (elTop || elBot)
      }
    }

    window.tilt = element => {
      let height = element.clientHeight
      let max = 10 / (height / 250)

      tilt.init(element, {
        max,
        speed: 300
      })
    }
  },
  computed: {
    bg () {
      return `background: linear-gradient(45deg, ${this.background.first}, ${this.background.seconde}) fixed;background-size: 400% 400%`
    }
  }
}
</script>

<style>
@keyframes linearBackground {
	0%   { background-position: 0 100%; }
	25%  { background-position: 100% 100%; }
	50%  { background-position: 100% 0; }
	75%  { background-position: 0 0; }
	100% { background-position: 0 100%; }
}

body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  line-height: 1.414;
  font-size: 125%;
}

#app {
	animation: linearBackground 20s linear infinite;
  padding: 1em;
}

a {
  color: inherit !important;
}

@media screen and (min-width: 900px) {
  body {
    font-size: 150%;
  }

  #app {
    padding: 2em;
  }
}

@media screen and (min-width: 1200px) {
  #app {
    padding: 3.5em;
  }
}
</style>
