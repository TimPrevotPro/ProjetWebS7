<template>
  <nav
      class="navbar is-dark is-fixed-top"
      role="navigation"
      aria-label="main navigation"
  >
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        Accueil
      </router-link>

      <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="basicNavBar"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="basicNavBar" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/shop" class="navbar-item">Consulter nos produits</router-link>
        <router-link to="/about" class="navbar-item">Qui sommes-nous ?</router-link>
        <router-link to="/cart" class="navbar-item">Mon panier</router-link>
      </div>

      <div class="navbar-end" v-if="!isConnected">
        <div class="navbar-item">
          <div class="buttons">
            <router-link class="button is-link" to="/Register">
              <span class="icon is-small is-small">
                <i class="fa-regular fa-pen-to-square"></i>
              </span>
              <span>S'enregistrer</span>
            </router-link>
            <router-link class="button is-secondary" to="/login">
              <span>
                <i class="fa-regular fa-globe"></i>
              </span>
              <span>Se connecter</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="navbar-end" v-if="isConnected">
      <div class="navbar-item">
        <div class="buttons">
          <router-link
              class="button is-secondary"
              to="/login"
              @click="disconnect"
          >Se déconnecter</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { useStore } from "vuex";
import {computed, defineComponent} from "vue";

document.addEventListener("DOMContentLoaded", () => {
  // Get all burger elements
  const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
  );

  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});
export default defineComponent({
  name: "BasicNavBar",
  setup() {
    const store = useStore();
    const isConnected = computed(() => store.state.isConnected);
    const isAdmin = true;

    function disconnect() {
      store.commit("setIsConnected", false);
    }

    return {
      isConnected,
      isAdmin,
      disconnect: disconnect,
    };
  },
});
</script>

<style scoped>
.navbar-dropdown,
.navbar-menu {
  background-color: #363636;
  border-top: 0px;
}
</style>
