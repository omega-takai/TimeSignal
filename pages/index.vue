<template lang="pug">
  .pageIndex.container
    div.inner
      VueToNuxtLogo
      h1.title(v-text="'TimeSignal'")
      h2.subtitle(v-text="'Notify time at regular intervals'")
      .links
        BaseLinkButton(
          class="linkItem"
          colorType="green"
          text="Documentation"
          url="https://ja.nuxtjs.org/"
        )
        BaseLinkButton(
          class="linkItem"
          colorType="grey"
          text="GitHub"
          url="https://github.com/nuxt/nuxt.js"
        )
</template>

<script>
import VueToNuxtLogo from '~/components/Atom/VueToNuxtLogo/index.vue'
import BaseLinkButton from '~/components/Atom/BaseLinkButton/index.vue'

export default {
  name: 'PageIndex',
  components: {
    VueToNuxtLogo,
    BaseLinkButton,
  },
}
</script>

<style lang="sass" scoped>
.pageIndex
  &.container
    margin: 0 auto
    min-height: 100vh
    display: flex
    justify-content: center
    align-items: center
    text-align: center

    .inner
      display: flex
      justify-content: center
      align-items: center
      flex-direction: column

    .title
      display: block
      font-size: 100px
      color: #35495e
      letter-spacing: 1px

    .subtitle
      font-weight: 300
      font-size: 42px
      color: #526488
      word-spacing: 5px
      padding-bottom: 15px

    .links
      display: flex
      padding-top: 8px
      align-items: center
      justify-content: center

      .linkItem
        margin: 8px
</style>
