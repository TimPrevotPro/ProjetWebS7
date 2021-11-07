<template>
  <div class="tile is-child has-text-centered">
    <figure class="image is-128x128 is-inline-block">
      <div class="content" id="article-img" :style="{ backgroundImage: 'url(' + article.image + ')'}"></div>
    </figure>
    <div class="content has-text-centered">
      <section class="section">
        <div class="articleName">
          <h2 class="is-2 is-bold">{{ article.name }}</h2>
        </div>
      </section>
      <section class="section">
        <p class="content">{{ article.description }}</p>
      </section>
      <section class="section">
        <div class="articlePrice">
          <h2 class="is-2 is-bold">{{ article.price }}€</h2>
        </div>
      </section>
     <section class="section">
       <div class="buttons">
         <button class="button is-success is-outlined" @click="addToCart(article)">Ajouter au panier</button>
       </div>
     </section>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {useStore} from "vuex";

export class Article {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;

  constructor() {
    this.id = 0;
    this.name = "";
    this.description = "";
    this.image = "";
    this.price = 0;
  }
}

export default defineComponent({
  name: "Article",
  props: {
    article: {type: Article},
  },
  setup(props: any) {
    const store = useStore();
    const OArticle = ref(0);

    function addToCart(article: Article): void {
      store.commit("addToCart", article);
      console.log('cartItems: ', store.state.cartItems);
    }

    return {
      props,
      OArticle,
      addToCart,
    };
  },
});
</script>

<style scoped>
.tile {
  color: black;
}
#article-img{
  position: relative;
  object-fit: cover;
  height: 300px;
  background-position: center;
  background-size: cover;
}
</style>
