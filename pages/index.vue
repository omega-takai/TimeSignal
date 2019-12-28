<template lang="pug">
  .pageIndex
    div
      Typography(
        :level="1"
        text="15:10"
      )
      Typography.subtitle(
        :level="2"
        text="Notify time at regular intervals"
      )
      AuthorInfo
</template>

<script>
import { mapActions, mapState } from 'vuex'

import AuthorInfo from '~/components/Molecule/AuthorInfo/index.vue'
import Typography from '~/components/Atom/Typography/index.vue'

export default {
  name: 'PageIndex',
  components: {
    AuthorInfo,
    Typography,
  },
  computed: {
    ...mapState(['dateObj']),
  },
  mounted() {
    this.setTimeSet()
  },
  methods: {
    ...mapActions(['setTimeSet']),
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

  .subtitle
    color: colors('fontSub')
    padding-bottom: pix2rem(16)
</style>
