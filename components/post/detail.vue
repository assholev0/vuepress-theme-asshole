<template>
  <article class="post">
    <h1>
      {{ post.title }}
    </h1>
    <div class="meta">
      <span>
        发表于：
        {{ post.createdAt }}
        （{{ timeago(post.createdAt) }}）
      </span>
      <span v-if="post.updatedAt">
        &nbsp; | updatedAt
        {{ post.createdAt }}
        （{{ timeago(post.updatedAt) }}）
      </span>
    </div>
    <Content :key="$page.path" />

    <div v-if="qr" class="qr">
      <p>扫码关注不迷路</p>
      <img :src="qr">
    </div>

    <div>
      <ul class="post-copyright">
        <li>
          <strong>本文作者： </strong>Willin Wang
        </li>
        <li>
          <strong>本文链接：</strong>
          <a :href="`https://v0.chat${page.path}`" :title="page.title">https://v0.chat{{ page.path }}</a>
        </li>
        <li>
          <strong>版权声明： </strong>本博客所有文章除特别声明外，均采用
          <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh" rel="external nofollow" target="_blank">CC BY-NC-SA 4.0</a>
          许可协议。转载请注明出处！
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
import dayjs from '@theme/lib/dayjs';

export default {
  computed: {
    qr() {
      return this.$site.themeConfig.qr || '';
    },
    post() {
      return this.$post;
    },
    page() {
      return this.$page;
    }
  },
  methods: {
    timeago(time) {
      return dayjs(time).fromNow();
    }
  }
};
</script>

<style lang="stylus">
.qr
  color: #f60
  text-shadow: 1px 1px 0 rgba(0,0,0,0.2)
  text-align: center
.post-copyright
    margin: 2em 0 0
    padding: 0.5em 1em
    border-left: 3px solid #ff1700
    background-color: #f9f9f9
    list-style: none
</style>
