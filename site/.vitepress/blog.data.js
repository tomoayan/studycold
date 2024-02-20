// posts.data.js
import { createContentLoader } from 'vitepress'

export default createContentLoader('blog/*.md', {
  transform(rawData) {
    let data = rawData;
    data.forEach((e, i)=>{
        rawData[i].url = '/studycold' + e.url
    })
    return data.sort((a, b) => {
        return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
      });
  }
})