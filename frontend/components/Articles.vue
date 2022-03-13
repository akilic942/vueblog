<template>
  <div>
    <div class="uk-child-width-1-2" uk-grid>
      <div>
        <router-link v-for="article in leftArticles" :to="{ name: 'articles-id', params: { id: article.attributes.id } }" class="uk-link-reset" :key="article.attributes.id">
          <div class="uk-card uk-card-muted">
            <div v-if="article.attributes.image" class="uk-card-media-top">
              <img :src="api_url + article.attributes.image.data[0].attributes.url" alt="" height="100" />
            </div>
            <div class="uk-card-body">
              <span id="category" v-for="category in article.attributes.categories.data" :key="category.id" class="uk-text-uppercase">{{ category.attributes.name }} </span>
              <p id="title" class="uk-text-large">{{ article.attributes.title }}</p>
              <p id="short">{{ article.attributes.short }}</p>
            </div>
          </div>
        </router-link>
      </div>

      <div>
        <div class="uk-child-width-1-2@m uk-grid-match" uk-grid>
          <router-link v-for="article in rightArticles" :to="{ name: 'articles-id', params: { id: article.attributes.id } }" class="uk-link-reset" :key="article.attributes.id">
            <div class="uk-card uk-card-muted">
              <div v-if="article.attributes.image" class="uk-card-media-top">
                <img :src="api_url + article.attributes" alt="" height="100" />
              </div>
              <div class="uk-card-body">
                <span id="category" v-for="category in article.attributes.categories.data" :key="category.id" class="uk-text-uppercase">{{ category.attributes.name }}</span>
                <p id="title" class="uk-text-large">{{ article.attributes.title }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import articlesQuery from '~/apollo/queries/article/articles'

export default {
  data() {
    return {
      api_url: process.env.strapiBaseUri
    }
  },
  props: {
    articles: Array
  },
  computed: {
    leftArticlesCount() {
      return Math.ceil(this.articles.length / 5)
    },
    leftArticles() {
      return this.articles.slice(0, this.leftArticlesCount)
    },
    rightArticles() {
      console.log(typeof this.articles[1].attributes.image.data[0] !== 'undefined')
      return this.articles.slice(this.leftArticlesCount, this.articles.length)
    }
  }
}
</script>
