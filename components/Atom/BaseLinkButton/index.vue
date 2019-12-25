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
      default: 'Text',
    },
    url: {
      type: String,
      default: '###',
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
  min-height: 3rem
  min-width: 10rem
  max-width: 90vw
  padding: 0.5rem 1rem
  display: inline-flex
  align-items: center
  justify-content: center
  line-height: 1.2

@mixin _skin($_color)
  border-radius: 4px
  border: 1px solid $_color
  color: $_color
  text-decoration: none
  &:hover
    color: white
    background-color: $_color
  // Extra
  white-space: pre-line
  word-wrap: break-word
  overflow-wrap: break-word

@mixin _button($_color)
  @include _structure()
  @include _skin($_color)

// Style Instance ===============
.buttonGreen
  @include _button(#3b8070)

.buttonGrey
  @include _button(#35495e)
</style>
