<script>
import blueShoe from "@/assets/blueShoe.svg";
import PurpleModal from "@/components/PurpleModal.vue";
import cancel from '@/assets/cancelBlack.svg'
export default {
  data() {
    return {
      blueShoe,
      PurpleModal,
      cancel
    };
  },
};
</script>
<template>
  <v-container class="pa-5 ma-0">
    <h2 class="text-24">Cart (2 items)</h2>
   <div class=" position-relative v-card my-4 mb-7">
 <img :src="cancel" alt="cancel" class="position-absolute right-0 cancel">
     <div class="d-flex justify-space-between pa-4  rounded-xl ">
      <div class="w-33 rounded-lg blueShoe mr-3 d-flex align-center">
        <img :src="blueShoe" alt="blueShoe" />
      </div>
      <div class="w-66">
        <h2 class="product_name w-75 py-2 text-16">
          Unisex for women, for the men
        </h2>
        <p class="product_price text-16">N5,000</p>
        <div class="d-flex justify-space-between align-center pa-0">
          <p class="product_desc text-12">Blue 42</p>
          <div class="d-flex align-center">
            <button class="rounded px-2 py-1">-</button>
            <p class="qty px-2 py-1">2</p>
            <button class="rounded px-2 py-1">+</button>
          </div>
        </div>
      </div>
    </div>
 </div>
 <div class=" position-relative v-card my-4 mb-7">
 <img :src="cancel" alt="cancel" class="position-absolute right-0   cancel">
     <div class="d-flex justify-space-between pa-4  rounded-xl ">
      <div class="w-33 rounded-lg blueShoe mr-3 d-flex align-center">
        <img :src="blueShoe" alt="blueShoe" />
      </div>
      <div class="w-66">
        <h2 class="product_name w-75 py-2 text-16">
          Unisex for women, for the men
        </h2>
        <p class="product_price text-16">N5,000</p>
        <div class="d-flex justify-space-between align-center pa-0">
          <p class="product_desc text-12">Blue 42</p>
          <div class="d-flex align-center">
            <button class="rounded px-2 py-1">-</button>
            <p class="qty px-2 py-1">2</p>
            <button class="rounded px-2 py-1">+</button>
          </div>
        </div>
      </div>
    </div>
 </div>
  </v-container>
  <div class="position-fixed bottom-0 w-100">
    <PurpleModal
      :cart="true"
      :checkout="false"
      :confirmation="false"
      :deliveryBtn="true"
      :shopping="true"
    />
  </div>
</template>
<style scoped>
.product_name {
  line-height: 18px;
  font-weight: 400;
}
.product_price {
  font-weight: 600;
}
.product_desc {
  color: #626a77;
}
.blueShoe {
  background: #f9eeeb;
}
.v-card {
  box-shadow: 7px 15px 80px 3px rgba(216, 216, 216, 0.58);
}
button {
  background: #f8f8f8;
  color: #7940ee;
}
.qty {
  background: #e0e0e0;
}
.cancel{
  width: 22px;
  height: 22px;
  z-index: 100;
}
</style>
