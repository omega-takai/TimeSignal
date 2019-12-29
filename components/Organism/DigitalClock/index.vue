<template lang="pug">
  .digitalClock
    Typography(
      class="subColor"
      :level="4"
      :text="date"
    )
    Typography(
      class="time"
      :level="1"
      :text="time"
    )
</template>

<script>
import { mapGetters } from 'vuex'

import Typography from '~/components/Atom/Typography/index.vue'

export default {
  name: 'DigitalClock',
  components: {
    Typography,
  },
  computed: {
    ...mapGetters(['YYYY', 'MM', 'DD', 'hh', 'mm', 'ss']),
    time() {
      return `${this.hh}:${this.mm}`
    },
    date() {
      return `${this.YYYY}/${this.MM}/${this.DD}`
    },
  },
}
</script>

<style lang="sass" scoped>
.digitalClock
  .time
    font:
      family: TypeFamily('number')
      weight: TypeWeight('number')

  .subColor
    color: colors('fontSub')
</style>
