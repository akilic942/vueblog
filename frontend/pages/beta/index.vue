<template>
  <div>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <h1>Strapi blog</h1>

        <Articles :articles="articles.data"></Articles>
      </div>
    </div>
  </div>
</template>

<script>
import articlesQuery from "~/apollo/queries/article/articles";
import Articles from "~/components/ArticlesExample";
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      articles: [],
    };
  },
  components: {
    Articles,
  },
  validate() {
    return process.env.dev;
  },
  apollo: {
    articles: {
      prefetch: true,
      query: articlesQuery,
      variables() {
        return { id: parseInt(this.$route.params.id) };
      },
    },
  },
});
</script>
