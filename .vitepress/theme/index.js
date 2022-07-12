import DefaultTheme from 'vitepress/theme'
import './style.css';
import AolButton from '@/components/AolButton.vue';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('AolButton', AolButton);
  }
};