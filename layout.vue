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

export default {
  /* eslint-disable vue/no-unused-components */
  components: {
    Sidebar,
    Home
  },
  computed: {
    layout() {
      if (this.$route.path === this.$site.base) {
        return 'home';
      }
    }
  }
};
</script>


<style src="minireset.css"></style>
<style src="./style/theme.styl" lang="stylus"></style>
