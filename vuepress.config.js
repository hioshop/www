import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '原子笔记',
  description: '一个强大方便的个人笔记。',
  theme: defaultTheme({
    // Public 文件路径
    logo: '/logo.png',
    // URL
  }),
})