<template>
  <article id="intro" class="content" :class="{visible : visible}">
    <h2><md-icon>{{ data.icon }}</md-icon><span>{{ data.title }}</span></h2>
    <!--<img class="avatar" src="../assets/images/picture.jpg" alt="Steeve Clément">-->
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
          <li><a href="mailto:cl.steeve@gmail.com">cl.steeve@gmail.com</a></li>
          <li><a href="tel:0687693034">06.87.69.30.34</a></li>
        </ul>
      </section>
    </div>
  </article>
</template>

<script>
import Tilt from 'vanilla-tilt'

export default {
  component: { Tilt },
  name: 'presentation',
  data () {
    return {
      data: require('@/presentation.json'),
      visibleTop: false,
      visible: false
    }
  },
  mounted () {
    const self = this

    let height = self.$el.clientHeight
    let value = 10 / (height / 250)

    Tilt.init(self.$el, {
      max: value,
      speed: 300
    })

    window.visible = (element) => {
      const rect = element.getBoundingClientRect()
      const elTop = rect.top <= window.height() / 100 * self.percentageViewTop && rect.bottom >= window.height() / 100 * self.percentageViewTop
      const elBot = rect.bottom <= window.height() && rect.bottom >= window.height() / 100 * (100 - self.percentageViewTop)

      return {
        top: rect.top < -75,
        bloc: (elTop || elBot)
      }
    }

    ['load', 'scroll'].forEach(event => {
      window.addEventListener(event, () => {
        if (window.visible(self.$el).bloc) {
          self.visible = true
        } else {
          self.visible = false
        }
      })
    })
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

    section {
      width: 50%;
    }
  }
}
</style>
