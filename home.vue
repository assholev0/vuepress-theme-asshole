<template>
  <PostList :posts="posts" :excerpt="true" />
</template>

<script>
import PostList from '@theme/components/post/list';

export default {
  components: {
    PostList
  },
  computed: {
    posts() {
      return this.$posts.slice(0, 10);
    }
  }
};
</script>
