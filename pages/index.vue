<template lang="pug">
  .pageIndex.container
    div.inner
      VueToNuxtLogo
      h1.title(v-text="'TimeSignal'")
      h2.subtitle(v-text="'Notify time at regular intervals'")
      AuthorInfo
</template>

<script>
import VueToNuxtLogo from '~/components/Atom/VueToNuxtLogo/index.vue'
import AuthorInfo from '~/components/Molecule/AuthorInfo/index.vue'

export default {
  name: 'PageIndex',
  components: {
    VueToNuxtLogo,
    AuthorInfo,
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
      font-size: TypeScale('h1')
      font-weight: TypeWeight('h1')
      color: colors('font')

    .subtitle
      display: block
      font-size: TypeScale('h2')
      font-weight: TypeWeight('h2')
      color: colors('fontSub')
      padding-bottom: 16px
</style>
