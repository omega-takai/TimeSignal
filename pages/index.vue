<template lang="pug">
  .pageIndex
    div
      main.main
        Typography(
          class="subColor"
          :level="4"
          :text="date"
        )
        Typography(
          :level="1"
          :text="time"
        )
      div
        AuthorInfo
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import AuthorInfo from '~/components/Molecule/AuthorInfo/index.vue'
import Typography from '~/components/Atom/Typography/index.vue'

export default {
  name: 'PageIndex',
  components: {
    AuthorInfo,
    Typography,
  },
  data() {
    return {
      timer: null,
    }
  },
  computed: {
    ...mapGetters(['YYYY', 'MM', 'DD', 'hh', 'mm', 'ss']),
    time() {
      return `${this.hh}:${this.mm}:${this.ss}`
    },
    date() {
      return `${this.YYYY}/${this.MM}/${this.DD}`
    },
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
