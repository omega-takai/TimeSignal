import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import LinkButtonWithIcon from './index.vue'

const colors = ['green', 'grey']

const stories = storiesOf('Design System|Molecule/LinkButtonWithIcon', module)

stories.addDecorator(withKnobs)

stories.add('normal', () => ({
  components: { LinkButtonWithIcon },
  data() {
    return {
      colors,
    }
  },
  template: `
    <div style="margin: 8px;">
      <LinkButtonWithIcon
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
