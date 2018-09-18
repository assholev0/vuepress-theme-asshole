<template>
  <Transition
    tag="div"
    class="posts-list"
    direction="x"
    group
  >
    <PostListItem
      v-for="post in posts"
      :key="post.path"
      :post="post"
      :excerpt="excerpt"
    />
  </Transition>
</template>

<script>
import Transition from '@theme/components/transition';
import PostListItem from '@theme/components/post/item';

export default {
  components: {
    Transition,
    PostListItem
  },
  props: {
    posts: {
      type: Array,
      required: true
    },
    excerpt: {
      type: Boolean,
      default: false
    }
  }
};
</script>
