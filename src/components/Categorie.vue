<template>
  <article :id="item.id" class="content" :class="[item.type, {visible}]">
    <h2><md-icon>{{ item.icon }}</md-icon><span>{{ item.title }}</span></h2>
    <div>
      <section v-for="content in item.content">
        <h3>{{ content.title }}</h3>
        <template v-if="content.date_end">
          <em v-if="content.date_end">{{ content.stint }} {{ content.date_start }} - {{ content.date_end }}</em>
          <p>{{ content.description }}</p>
        </template>
        <ul v-if="content.techno">
          <li v-for="techno in content.techno"> {{ techno[0] }}<em v-if="techno[1]"> ({{ techno[1] }})</em></li>
        </ul>
      </section>
    </div>
  </article>
</template>


<script>
export default {
  name: 'categorie',
  props: ['item'],
  data () {
    return {
      percentageViewTop: 80,
      visibleTop: false,
      visible: false
    }
  },
  mounted () {
    const self = this;

    ['load', 'scroll'].forEach(event => {
      window.addEventListener(event, () => {
        self.visible = window.visible(self.$el, self.percentageViewTop).bloc
      })
    })

    window.tilt(self.$el)
  }
}
</script>

<style lang="scss">
.content {
  margin: 1.5em auto;
  padding: 1em;
  position: relative;
  z-index: 1;

  &::after, &::before {
    content: '';
    top: 0;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }

  &::before {
    background: #fff;
    opacity: 0;
    transition: .3s ease-in-out;
  }

  &::after {
    border: 1px solid #fff;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &.visible::before {
    opacity: .35;
  }

  &.section {
    section:not(:last-child) {
      border-bottom: 1px solid #fff;
    }
  }

  section {
    text-align: left;

    &:last-child {
      p {
        margin-bottom: 0;
      }
    }
  }

  h3 {
    margin-bottom: 0;

    + em {
      margin-top: -.25em;
      display: block;
    }
  }

  h2 {
    margin-top: 0;

    span {
      vertical-align: middle;
      margin-left: .25em;
    }
  }

  ul {
    margin-top: 0;
  }

  em {
    font-size: .6em;
  }

  .md-icon {
    transform: scale(1.25);
  }
}

@media screen and (min-width: 900px) {
  .content {
    margin: 3em auto;
    padding: 2em;

    &.list {
      div {
        display: flex;
        flex-wrap: wrap;
      }

      section {
        width: 50%;
      }
    }
  }
}

@media screen and (min-width: 1200px) {
  .content {
    padding: 1.75em;
    padding-top: 3em;

    &::before, &::after {
      top: 1.25em;
    }

    &::after {
      border-width: 2px;
    }

    h3 + em {
      margin-top: 0;
    }

    h2 span {
      margin-left: .5em;
    }

    &.list {
      section {
        width: percentage(1/3);
      }
    }

    .md-icon {
      transform: scale(1.5);
    }
  }
}
</style>
