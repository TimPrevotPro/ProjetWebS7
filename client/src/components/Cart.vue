<template>
  <section class="hero is-fullheight is-primary">
    <div class="hero-body">
      <div class="columns">
        <Article
          class="column notification is-secondary"
          v-for="article in cartArticles"
          v-show="article.id !== 0"
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
  name: "Cart",
  components: { Article },
  setup() {
    const store = useStore();
    const cartArticles = computed(() => store.state.cartItems);

    return {
      cartArticles,
    }
  },
});
</script>

<style scoped>

</style>
