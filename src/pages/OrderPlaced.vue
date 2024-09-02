<script>
import yellowBox from "@/assets/yellowBox.svg";
export default {
  data() {
    return {
      yellowBox,
    };
  },
  methods: {
    goToPage() {
     this.$router.push("/")
 }
  }
};
</script>
<template>
  <v-container class="d-flex h-100 align-center justify-center flex-column">
    <div>
      <img :src="yellowBox" alt="yellow package box" />
    </div>
    <h1 class="text-24 mt27 mb-2">Order placed</h1>
    <p class="text-center mb-5">
      Confirmation has been sent to
      <span class="text-purple">abdul002temitope@gmail.com</span>
    </p>
    <p
      class="order_no text-black mb-8 px-4 py-2 rounded"
      style="background-color: #fbf9fb"
    >
      <span style="color: #4b5563" class="font-weight-bold">Order No </span>:
      73772782762738
    </p>
    <button
      @click="goToPage()"
      style="background: linear-gradient(to right, #5f40ee, #943fed)"
      class="text-16 rounded-lg text-white py-4 w-100 font-weight-medium"
    >
     Return Home
    </button>
  </v-container>
</template>
