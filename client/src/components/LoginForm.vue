<template>
  <section class="hero is-fullheight is-primary">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title">Connexion</h3>
            <form @submit.prevent="submitForm">
              <div class="field">
                <label class="label">Identifiant</label>
                <div class="control has-icons-left has-icons-right">
                  <input
                    class="input"
                    type="text"
                    placeholder="Votre ID unique"
                    v-model="user_id"
                    required
                  />
                </div>
              </div>

              <div class="field">
                <label class="label">Mot de passe</label>
                <div class="control has-icons-left has-icons-right">
                  <input
                    class="input"
                    type="password"
                    placeholder="Mot de passe"
                    v-model="password"
                    required
                    />
                </div>
              </div>

              <div class="field is-grouped is-justify-content-center">
                <div class="control">
                  <button
                    class="button is-link"
                    :disabled="disableButton"
                    type="submit"
                    >
                    Se connecter
                  </button>
                </div>
                <div class="control">
                  <router-link class="button is-link is-light" to="/">Annuler</router-link>
                </div>
              </div>
            </form>
          <router-link to="/reset-pwd">Mot de passe oublié ?</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {computed, defineComponent, reactive, ref} from "vue";
import {useStore} from "vuex";
import {server} from "../helper";
import axios from "axios";
import router from "../router";

interface user {
  user_id: string;
  password: string;
}

export default defineComponent({
  name: "LoginForm",
  setup() {
    const store = useStore();
    let user_id = ref("");
    let password = ref("");

    let disableButton = computed(() => {
      return (
          user_id.value == ""
          || password.value == ""
      );
    });

    const submitToServer = function (data: user) {
      axios.post(`${server.baseURL}/api/auth/login`, data);
    };

    const submitForm = function(): void {
      const customerData: user = reactive({
        user_id: user_id.value,
        password: password.value,
      });
      submitToServer(customerData);
      store.commit("setIsConnected", true);
      router.push({ name: "HomePage" })
    }

    return {
      submitToServer,
      submitForm,
      user_id,
      password,
      disableButton,
    };
  },
});
</script>

<style scoped>
::placeholder {
  color: black;
}
</style>
