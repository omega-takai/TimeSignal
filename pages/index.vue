<template lang="pug">
  .pageIndex
    div
      main.main
        DigitalClock
      div
        AuthorInfo
</template>

<script>
import { mapActions } from 'vuex'

import AuthorInfo from '~/components/Molecule/AuthorInfo/index.vue'
import DigitalClock from '~/components/Organism/DigitalClock/index.vue'

export default {
  name: 'PageIndex',
  components: {
    AuthorInfo,
    DigitalClock,
  },
  data() {
    return {
      timer: null,
    }
  },
  created() {
    this.getDate()
  },
  mounted() {
    this.timer = setInterval(this.getDate, 1000)
  },
  destroyed() {
    clearInterval(this.timer)
  },
  methods: {
    ...mapActions(['getDate']),
  },
}
</script>

<style lang="sass" scoped>
.pageIndex
  margin: 0 auto
  min-height: 100vh
  display: flex
  justify-content: center
  align-content: center
  align-items: center
  text-align: center

  .main
    margin: 8rem 0

  .subColor
    color: colors('fontSub')
</style>
