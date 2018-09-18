<template>
  <aside id="sidebar">
    <div class="table">
      <div class="table-cell">
        <div class="logo">
          <router-link :to="$localePath">
            <img v-if="avatar" :src="avatar" class="avatar">
            <img v-else src="@theme/assets/avatar.png" class="avatar">
          </router-link>
          <h1 v-show="!avatar">
            <router-link :to="$localePath">
              {{ $siteTitle || '' }}
            </router-link>
          </h1>
          <h2>{{ $description || '' }}</h2>
        </div>
        <Statistics />
        <ClientOnly>
          <Aplayer />
        </ClientOnly>
      </div>
    </div>
  </aside>
</template>


<script>
import Aplayer from './player';
import Statistics from './statistics';

export default {
  name: 'Sidebar',
  components: {
    Aplayer,
    Statistics
  },
  computed: {
    avatar() {
      return this.$site.themeConfig.avatar || '';
    }
  }
};
</script>
