<script>
export default {
  name: "CheckoutPage",
};
</script>
<template>
  <v-container class="pa-0">
    <div class="pa-4">
      <h1 class="text-24 w-75 mt-6 font-weight-bold">Have a coupon?</h1>
      <p class="my-4 mx-0 text-16">
        Input your coupon code to get Get 20% OFF Limited time offer
      </p>
      <div>
        <div class="d-flex coupon rounded pa-2 justify-space-between">
          <input type="text" placeholder="Coupon code" />
          <button class="pa-2 px-4 btn rounded-lg">Apply</button>
        </div>
      </div>
    </div>
    <div class="position-absolute bottom-0">
      <PurpleModal
        :checkout="true"
        :neededBtn="true"
        :cart="false"
        :confirmation="false"
      />
    </div>
  </v-container>
</template>
<style scoped>
.coupon {
  border: 1px solid lightgray;
}
.btn {
  background: linear-gradient(to right, #6d40ee, #943fed);
  color: white;
}
</style>
