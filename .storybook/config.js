import { configure } from '@storybook/react';

configure(require.context('../src/js/components', true, /\.stories\.js$/), module);
