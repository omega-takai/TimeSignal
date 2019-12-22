import { configure } from '@storybook/vue';

import '!style-loader!css-loader!sass-loader!../assets/style/main.sass';

// automatically import all files ending in *.stories.js
configure(require.context('../components', true, /\.story\.js$/), module);
