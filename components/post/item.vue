<template>
  <article class="post">
    <h1>
      <router-link :to="post.path">
        {{ post.title }}
      </router-link>
    </h1>

    <div class="meta">
      <span>
        发表于：
        {{ post.createdAt }}
        （{{ timeago(post.createdAt) }}）
      </span>
    </div>

    <div class="content" v-html="post.excerpt || post.frontmatter.description || ''" />
  </article>
</template>

<script>
import dayjs from '@theme/lib/dayjs';

export default {
  props: {
    post: {
      type: Object,
      required: true
    },
    excerpt: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    timeago(time) {
      return dayjs(time).fromNow();
    }
  }
};
</script>
