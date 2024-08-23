import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "StarryFun",
  description: "星趣文档",
  themeConfig: {
    logo: '/LOGO.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/'},
      { text: '项目', items:[
        { text: '项目', link: '/projects/index.md'},
        { text: 'FinallShell', link: '/projects/FinallShell.md'},
      ]}
    ],

    sidebar: {"/projects/":
      [
        {
          text: '项目',
          link: '/projects/index.md',
          items: [
            { text: 'FinallShell密钥生成', link: '/projects/FinallShell.md' }
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Starry-Sky-World' }
    ]
  }
})
