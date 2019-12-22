<template lang="pug">
  a(
    target="_blank"
    v-text="text"
    :href="url"
    :class="className"
  )
</template>

<script>
export default {
  name: 'BaseLinkButton',
  props: {
    colorType: {
      type: String,
      default: 'green',
    },
    text: {
      type: String,
      require: true,
    },
    url: {
      type: String,
      require: true,
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
  }
}
</script>

<style lang="sass" scoped>
@mixin _structure()
  height: 48px
  width: 160px
  padding: 0 16px
  display: inline-flex
  align-items: center
  justify-content: center
  line-height: 1

@mixin _button($_color)
  @include _structure()
  border-radius: 4px
  border: 1px solid $_color
  color: $_color
  text-decoration: none
  text-align: center
  &:hover
    color: white
    background-color: $_color

.buttonGreen
  @include _button(#3b8070)

.buttonGrey
  @include _button(#35495e)
</style>
