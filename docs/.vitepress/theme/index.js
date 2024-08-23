// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';

export default {
  ...DefaultTheme,
  async enhanceApp() {
    if (!import.meta.env.SSR) {
      const { loadOml2d } = await import('oh-my-live2d');
      loadOml2d({
        models: [
          {
            path: '/live2d/ariu/ariu.model3.json'
          },
          {
            path: '/live2d/wanko/runtime/wanko_touch.model3.json'
          }
        ]
      });
    }
  }
};