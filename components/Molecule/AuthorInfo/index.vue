<template lang="pug">
  .AuthorInfo
    h3.title {{ title }}
    LinkButtonWithIcon(
      class="linkItem"
      v-for="(val, i) in authorData"
      :key="i"
      :iconName="val.iconName"
      :text="val.text"
      :url="val.url"
    )
</template>

<script>
import LinkButtonWithIcon from '~/components/Molecule/LinkButtonWithIcon/index.vue'

export default {
  name: 'AuthorInfo',
  components: {
    LinkButtonWithIcon,
  },
  props: {
    title: {
      type: String,
      default: 'Author Info',
    },
    authorData: {
      type: Array,
      default: () => [
        {
          iconName: 'TwitterIcon',
          text: 'Twitter',
          url: 'https://twitter.com/TomonariTakai',
        },
        {
          iconName: 'GithubIcon',
          text: 'GitHub',
          url: 'https://github.com/t--takai',
        },
      ],
    },
  },
}
</script>

<style lang="sass" scoped>
.AuthorInfo
  display: flex
  align-items: center
  justify-content: center
  flex-wrap: wrap

.linkItem
  margin: pix2rem(8)

.title
  flex: 1 0 100%
  font-weight: TypeWeight('h4')
  font-size: TypeScale('h4')
  color: #526488
  text-align: center
</style>
