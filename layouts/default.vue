<template lang="pug">
  div(:class="classNameObject")
    nuxt
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'LayoutDefault',
  computed: {
    ...mapState(['isDesktop', 'isTablet', 'isMobile']),
    classNameObject() {
      return {
        'is-desktop': this.isDesktop,
        'is-tablet': this.isTablet,
        'is-mobile': this.isMobile,
      }
    },
  },
  // created() {
  //   this.setDeviceFlag(window.innerWidth)
  // },
  beforeMount() {
    this.hadleResize()
  },
  mounted() {
    window.addEventListener('resize', this.hadleResize())
  },
  destroyed() {
    window.removeEventListener('resize', this.hadleResize())
  },
  methods: {
    ...mapActions(['setDeviceFlag']),
    hadleResize() {
      this.setDeviceFlag(window.innerWidth)
      console.log('Fire hadleResize')
    },
  },
}
</script>
