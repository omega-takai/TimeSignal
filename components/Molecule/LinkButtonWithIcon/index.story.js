import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { FlexLayout, FlexItem } from '@/assets/styledComponent/component'

import LinkButtonWithIcon from './index.vue'

const colors = ['green', 'grey']

const stories = storiesOf('Design System|Molecule/LinkButtonWithIcon', module)

stories.addDecorator(withKnobs)

stories.add('normal', () => ({
  components: {
    LinkButtonWithIcon,
    FlexLayout,
    FlexItem,
  },
  data() {
    return {
      colors,
    }
  },
  template: `
    <FlexLayout>
      <FlexItem
        v-for="(color, i) in colors"
        :key="i"
      >
        <LinkButtonWithIcon
          url="https://ja.nuxtjs.org/"
          :text="upperCamelCase(color)"
          :colorType="color"
          @click.native.prevent="action"
        />
      </FlexItem>
    </FlexLayout>`,
  methods: {
    action: action('clicked'),
    upperCamelCase(colorType) {
      const lowcase = colorType.toLowerCase()
      return lowcase.charAt(0).toUpperCase() + lowcase.slice(1)
    },
  },
}))
