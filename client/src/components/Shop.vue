<template>
  <section class="hero is-fullheight is-primary">
    <div class="hero-body">
      <div class="columns">
        <Article
          class="column notification is-secondary"
          v-for="article in articles"
          :key="article"
          :article="article"
          ></Article>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";
import Article from "@/components/Article.vue";
import {useStore} from "vuex";

export default defineComponent({
  name: "Shop",
  components: {Article},
  setup() {
    const store = useStore();
    const articles = computed(() => store.state.articles)
    return {
      articles,
    };
  },
});
</script>

<style scoped>
.tile.is-ancestor {
  justify-content: center;
  flex-wrap: wrap;
}
</style>
