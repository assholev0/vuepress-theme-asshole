import dayjs from './dayjs';

const install = (Vue) => {
  const mixins = {
    computed: {
      $posts() {
        const { pages } = this.$site;
        const pageFilter = p => p.frontmatter.category !== undefined;
        const pageSort = (p1, p2) => (dayjs(p1.frontmatter.date) < dayjs(p2.frontmatter.date) ? 1 : -1);
        const pageMap = (p) => {
          const q = p;
          q.createdAt = dayjs(q.frontmatter.date).format('YYYY-MM-DD');
          q.updatedAt = q.lastUpdated ? dayjs(q.lastUpdated).format('YYYY-MM-DD') : null;
          q.tags = q.frontmatter.tags || [];
          q.category = q.frontmatter.category || null;
          return q;
        };
        const posts = pages.filter(pageFilter).sort(pageSort).map(pageMap);
        return posts;
      },
      $post() {
        return Object.assign({}, this.$page, {
          createdAt: dayjs(this.$page.frontmatter.date).format('YYYY-MM-DD'),
          updatedAt: this.$page.lastUpdated ? dayjs(this.$page.lastUpdated).format('YYYY-MM-DD') : null,
          tags: this.$page.frontmatter.tags || [],
          category: this.$page.frontmatter.category || null
        });
      },
      $categories() {
        let catsArr = [];
        this.$posts.forEach((post) => {
          catsArr = catsArr.concat(post.category);
        });
        return Array.from(new Set(catsArr));
      },
      $tags() {
        let tagsArr = [];
        this.$posts.forEach((post) => {
          tagsArr = tagsArr.concat(post.tags);
        });
        return Array.from(new Set(tagsArr));
      }
    }
  };
  Vue.mixin(mixins);
};

export default { install };
