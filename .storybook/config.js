import { configure } from '@storybook/react';

const loadStories = () => {
  require('../src/components/stories');
};

configure(loadStories, module);
