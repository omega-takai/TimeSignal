<template lang="pug">
  a(
    target="_blank"
    :href="url"
    :class="className"
  )
    FeatherIcon(
      :iconName="iconName"
      :iconSize="iconSize"
      class="icon"
    )
    span(v-text="text")
</template>

<script>
import FeatherIcon from '~/components/Atom/FeatherIcon/index.vue'

export default {
  name: 'LinkButtonWithIcon',
  components: {
    FeatherIcon,
  },
  props: {
    iconName: {
      type: String,
      default: 'TwitterIcon',
    },
    iconSize: {
      type: String,
      default: '1.5x',
    },
    colorType: {
      type: String,
      default: 'green',
    },
    text: {
      type: String,
      require: true,
      default: 'Text',
    },
    url: {
      type: String,
      require: true,
      default: 'https://ja.nuxtjs.org/',
    },
  },
  computed: {
    upperCamelCase() {
      const rawName = this.colorType
      const lowcase = rawName.toLowerCase()
      return lowcase.charAt(0).toUpperCase() + lowcase.slice(1)
    },
    className() {
      return `button${this.upperCamelCase}`
    },
  },
}
</script>

<style lang="sass" scoped>
@mixin _structure()
  min-height: pix2rem(48)
  min-width: pix2rem(160)
  padding: pix2rem(8) pix2rem(16)
  display: inline-flex
  align-items: center
  justify-content: center
  line-height: 1

@mixin _button($_color)
  @include _structure()
  border-radius: pix2rem(4)
  border: 1px solid $_color
  color: $_color
  text-decoration: none
  text-align: center
  &:hover
    color: white
    background-color: $_color

  .icon
    margin-right: pix2rem(8)

.buttonGreen
  @include _button(#3b8070)

.buttonGrey
  @include _button(#35495e)
</style>
