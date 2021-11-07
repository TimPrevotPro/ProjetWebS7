<template>
  <LoginForm></LoginForm>
</template>

<script lang="ts">
import LoginForm from "@/components/LoginForm.vue";
import {defineComponent} from "vue";

export default defineComponent({
  name: "LoginPage",
  components: {LoginForm}
});
</script>

<style scoped>

</style>
