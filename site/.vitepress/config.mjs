import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "StudyCold",
  description: "A Personal Blog",
  base: '/studycold/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/tomoayan' },
      { icon: 'instagram', link: 'https://github.com/tomoayan' },
      { icon: 'twitter', link: 'https://github.com/tomoayan' }
    ]
  }
})
