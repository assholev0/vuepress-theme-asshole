<template>
  <div>
    <main id="main">
      <component :is="layout" />
    </main>
    <Sidebar />
  </div>
</template>

<script>
import Sidebar from './components/sidebar/index';
import Home from './home';
import Post from './post';

export default {
  /* eslint-disable vue/no-unused-components */
  components: {
    Sidebar,
    Home,
    Post
  },
  computed: {
    layout() {
      if (this.$route.path === this.$site.base) {
        return 'home';
      }
      return this.$page.frontmatter.layout || 'post';
    }
  }
};
</script>


<style src="minireset.css"></style>
<style src="./style/theme.styl" lang="stylus"></style>
<style src="./style/mobile.styl" lang="stylus"></style>
