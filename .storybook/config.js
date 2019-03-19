import { configure, addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

// Styles components theme
import theme from '../src/styles/theme.js';

const themes = [theme];
// Use addon so we can use styles-components theme
addDecorator(withThemesProvider(themes));

// Add global styles and fonts
require('../src/styles/fonts.css');
require('../src/styles/index.css');
require('./override.css');

const loadStories = () => {
  require('../src/components/stories');
  require('../src/components/stories/text');
};

configure(loadStories, module);
