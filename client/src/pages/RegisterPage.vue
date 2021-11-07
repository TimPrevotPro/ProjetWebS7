<template>
  <RegisterForm></RegisterForm>
</template>

<script lang="ts">
import RegisterForm from "@/components/RegisterForm.vue";
import {defineComponent} from "vue";

export default defineComponent({
  name: "RegisterPage",
  components: {RegisterForm}
});
</script>

<style scoped>

</style>
