<template>
  <nav class="site-state">
    <div class="site-state-item site-state-posts">
      <router-link to="/archives/">
        <span class="site-state-item-count">
          {{ $posts.length }}
        </span>
        <span class="site-state-item-name">日志</span>
      </router-link>
    </div>
    <div class="site-state-item site-state-categories">
      <router-link to="/categories/">
        <span class="site-state-item-count">
          {{ $categories.length }}
        </span>
        <span class="site-state-item-name">分类</span>
      </router-link>
    </div>
    <div class="site-state-item site-state-tags">
      <router-link to="/tags/">
        <span class="site-state-item-count">
          {{ $tags.length }}
        </span>
        <span class="site-state-item-name">标签</span>
      </router-link>
    </div>
  </nav>
</template>

<style lang="stylus">
#sidebar
  .site-state
    margin: 1rem 0

  .site-state-item
    display: inline-block
    padding: 0 15px
    border-left: 1px solid #eee

  .site-state-item:first-child
    border-left: none

  .site-state-item a
    border-bottom: none

  .site-state-item-count
    display: block
    text-align: center
    color: inherit
    font-weight: 600

  .site-state-item-name
    font-size: 0.8rem
    color: #999
</style>
