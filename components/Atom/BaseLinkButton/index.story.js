import { storiesOf } from '@storybook/vue'
import { withKnobs } from "@storybook/addon-knobs"
import { action } from '@storybook/addon-actions'

import BaseLinkButton from './index.vue'

export default {
  title: 'Atom|BaseLinkButton',
}

const colors = ['green', 'grey']

storiesOf('Atom|BaseLinkButton', module)
  .addDecorator(withKnobs)
  .add('normal', () => ({
    components: { BaseLinkButton },
    data() {
      return {
        colors: colors
      }
    },
    template: `
      <div style="margin: 8px;">
        <BaseLinkButton
          v-for="(color, i) in colors"
          url="https://ja.nuxtjs.org/"
          :key="i"
          :text="upperCamelCase(color)"
          :colorType="color"
          @click.native.prevent="action"
          style="margin: 8px;"
        />
      </div>`,
    methods: {
      action: action('clicked'),
      upperCamelCase(colorType) {
        const lowcase = colorType.toLowerCase()
        return lowcase.charAt(0).toUpperCase() + lowcase.slice(1)
      },
    },
  }))
