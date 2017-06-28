<template>
  <article id="intro" class="content" :class="{visible}">
    <h2><md-icon>{{ data.icon }}</md-icon><span>{{ data.title }}</span></h2>
    <section>
      <h3>{{ data.location.title}}</h3>
      <p>{{ data.location.department}}, {{ data.location.region }}</p>
    </section>
    <section>
      <h3>{{ data.description.title }}</h3>
      <div v-html="data.description.text"></div>
    </section>
    <div>
      <section>
        <h3>{{ data.social.title }}</h3>
        <ul>
          <li><a class="icon-github" href="https://github.com/TokaLazy" title="Regardez mes projets GitHub" target="_blank">Github</a></li>
          <li><a class="icon-skype" href="skype:tokalazy?add" title="Rejoingez-moi sur mon Skype" target="_blank">Skype</a></li>
          <li><a class="icon-linkedin" href="https://www.linkedin.com/in/steeve-clement-a8837b91/" title="Consultez mon profil LinkedIn" target="_blank">LinkedIn</a></li>
          <li><a class="icon-google-plus" href="https://plus.google.com/104424862838347383216" title="Suivez-moi sur mon compte Google Plus" target="_blank">Google +</a></li>
        </ul>
      </section>
      <section>
        <h3>Contactez-moi</h3>
        <ul>
          <li><a :href="'mailto:'+data.location.email">{{ data.location.email }}</a></li>
          <li><a :href="'tel:'+data.location.phone">{{ phone }}</a></li>
        </ul>
      </section>
    </div>
  </article>
</template>

<script>
export default {
  name: 'presentation',
  data () {
    return {
      data: require('@/presentation.json'),
      percentageViewTop: 80,
      visibleTop: false,
      visible: false
    }
  },
  computed: {
    phone () {
      return this.data.location.phone.match(/.{2}/g).join('.')
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
#intro {
  p {
    margin-top: 0;
  }

  > div {
    display: flex;
    flex-wrap: wrap;

    section {
      width: 100%;
    }
  }
}

@media screen and (min-width: 900px) {
  #intro {
    > div {
      section {
        width: 50%;
      }
    }
  }
}
</style>
