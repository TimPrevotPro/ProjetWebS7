<template>
  <section class="hero is-fullheight is-primary">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title">S'enregistrer</h3>
            <form @submit.prevent="submitForm">
              <div class="field">
                <label class="label">Nom</label>

                <div class="control has-icons-left has-icons-right">
                  <input
                      class="input"
                      type="text"
                      placeholder="Nom"
                      v-model="nom"
                      required
                  />
                </div>
              </div>

              <div class="field">
                <label class="label">Prénom</label>
                <div class="control has-icons-left has-icons-right">
                  <input
                      class="input"
                      type="text"
                      placeholder="Prénom"
                      v-model="prenom"
                      required
                  />
                </div>
              </div>

              <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left has-icons-right">
                  <input
                      class="input"
                      type="email"
                      placeholder="Adresse email"
                      v-model="email"
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
                      placeholder="Password"
                      v-model="password"
                      required
                  />
                </div>
              </div>

              <div class="field">
                <label class="label">Confirmer le mot de passe</label>
                <div class="control has-icons-left has-icons-right">
                  <input
                      class="input"
                      type="password"
                      placeholder="Confirm Password"
                      v-model="confirmPassword"
                      required
                  />
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <label class="checkbox">
                    <input type="checkbox" required>
                    J'accepte les <a href="#">conditions d'utilisation</a>
                  </label>
                </div>
              </div>

              <div class="field is-grouped is-justify-content-center">
                <div class="control">
                  <button type="submit" class="button is-link" :disabled="disableButton || confirmPassword !== password">
                    S'enregistrer
                  </button>
                </div>
                <div class="control">
                  <router-link class="button is-link is-light" to="/">Annuler</router-link>
                </div>
              </div>
              <br>
              <br>
              <p class="is-2 has-text-centered">Vous avez déjà un compte ? <router-link to="/login">Connectez-vous ici</router-link></p>
            </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent, reactive, computed, ref} from "vue";
import axios, {AxiosResponse} from "axios";
import { server } from "@/helper";
import router from "@/router";

interface newUser {
  nom: string;
  prenom: string;
  email: string;
  password: string;
}

export default defineComponent({

  name: "RegisterForm",
  setup() {

    let nom = ref("");
    let prenom = ref("");
    let email = ref("");
    let password = ref("");
    let confirmPassword = ref("");
    // eslint-disable-next-line no-useless-escape
    let emailRegexp = new RegExp("^[^@\s]+@[^@\s]+\.[^@\s]+$");
    let id_popup: AxiosResponse<any> | null = null;

    let disableButton = computed(() => {
      return (
          nom.value == ""
          || prenom.value == ""
          || email.value.match(emailRegexp)
          || password.value == ""
          || password.value != confirmPassword.value
      );
    });

    const submitToServer = function (data: newUser) {
      return axios.put(`${server.baseURL}/api/users/add/user`, data);
    };

    const submitForm = async function (): Promise<void> {
      const customerData: newUser = reactive({
        nom: nom.value,
        prenom: prenom.value,
        email: email.value,
        password: password.value,
      });
      await submitToServer(customerData);
      id_popup = await getUserId(customerData.email);
      alertId(id_popup?.data.user_id);
      router.push({ name: "HomePage" });
    }

    const getUserId = function (data: string): any {
      return axios.get(`${server.baseURL}/api/users/get/user_id`, {
        params: {
          email: data,
        },
      });
    };

    const alertId = function (id: string) {
      alert("Voici votre identifiant unique à conserver ! Il vous sera nécessaire pour vous connecter : \n" + id);
    };

    return {
      submitToServer,
      alertId,
      nom,
      prenom,
      email,
      password,
      confirmPassword,
      disableButton,
      id_popup,
      submitForm,
    };
  },
});
</script>

<style scoped>
::placeholder {
  color: black;
}
</style>
