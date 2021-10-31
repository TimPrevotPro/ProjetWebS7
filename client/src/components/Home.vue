<template>
  <div class="home">
    <section class="hero is-fullheight is-primary">
      <div class="hero-body is-justify-content-center">
        <div class="columns is-vcentered">
          <div class="column">
            <div class="container">
              <div class="block">
                <p class="title">Envie de fraîcheur ?</p>
                <q class="subtitle">Découvrez nos produits !</q>
              </div>
              <div class="block">
                <router-link class="button is-info" to="/vote"> Accéder à la boutique </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>

<style scoped>

</style>
