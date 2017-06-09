<template>
  <ul class="navigation" v-if="items.length">
    <li v-for="item in items">
      <a :href="'#'+item.id" @click.prevent v-scroll-to="'#'+item.id" :class="{visible : item.visible}">
        <md-icon>{{ item.icon }}</md-icon>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'navigation',
  data () {
    return {
      items: []
    }
  },
  mounted () {
    let content = document.querySelectorAll('.content')

    content.forEach(element => {
      let item = {}
      item.id = element.getAttribute('id')
      item.icon = element.querySelector('h2 i').textContent
      item.visible = false

      document.addEventListener('scroll', () => {
        item.visible = window.visible(element).top
      })

      this.items.push(item)
    })
  }
}
</script>

<style lang="scss">
.navigation {
  display: none;
}

@media screen and (min-width: 1200px) {
  .navigation {
    display: block;
    position: fixed;
    top: 3.5em;
    left: 0;
    list-style: none;
    padding: 0;
    margin: 0;
    z-index: 100;

    a {
      display: block;
      position: relative;
      transform: translateX(-100%);
      transition: transform .3s;
      text-decoration: none !important;

      &::after {
        content: '';
        top: 0;
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        background: #fff;
        opacity: .35;
        transition: .3s ease-in-out;
      }

      &:hover::after {
        opacity: .5;
      }

      &.visible {
        transform: translateX(0);
      }
    }

    .md-icon {
      margin: .5em;
    }
  }
}
</style>
