---
layout: home

hero:
  text: StudyCold
  tagline: Personal Blog for Random Things
  actions:
    - theme: brand
      text: About Me
      link: https://tomoayan.github.io/
    - theme: alt
      text: View on GitHub
      link: https://github.com/tomoayan/studycold
---

<script setup>
import { data as posts } from '.vitepress/blog.data.js'
console.log(posts)
</script>

<div class="postList">
<h1>All Posts</h1>
  <ul>
    <li v-for="post of posts">
    <a :href="post.url">
    <img :src="post.frontmatter.poster">
    <div class="postBody">
      <h3>{{ post.frontmatter.title }}</h3>
    </div>
    </a>
    </li>
  </ul>
</div>
