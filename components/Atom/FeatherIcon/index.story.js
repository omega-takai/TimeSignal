import { storiesOf } from '@storybook/vue'
import { withKnobs, radios } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

// component
import FeatherIcon from './index.vue'

const iconSize = ['24', '1x', '1.5x', '2x', '3x', '4x']
const componentName = [
  'ArrowDownLeftIcon',
  'ArrowDownRightIcon',
  'ArrowDownIcon',
  'ArrowLeftIcon',
  'ArrowRightIcon',
  'ArrowUpLeftIcon',
  'ArrowUpRightIcon',
  'ArrowUpIcon',
  'FacebookIcon',
  'GithubIcon',
  'InstagramIcon',
  'TwitterIcon',
]

storiesOf('Design System|Atom/FeatherIcon', module)
  .addDecorator(withKnobs)
  .add('normal', () => ({
    components: { FeatherIcon },
    data() {
      return {
        componentName,
      }
    },
    props: {
      iconSize: {
        type: String,
        default: radios('iconSize', iconSize, iconSize[1]),
      },
    },
    template: `
      <div>
        <FeatherIcon
          v-for="(v, i) in componentName"
          :iconName="v"
          :key="i"
          :iconSize="iconSize"
          @click.native="action"
        />
      </div>`,
    methods: {
      action: action('clicked'),
    },
  }))
