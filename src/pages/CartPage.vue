<script>
import blueShoe from "@/assets/blueShoe.svg";
import PurpleModal from "@/components/PurpleModal.vue";
export default {
  data() {
    return {
      blueShoe,
      PurpleModal
    };
  },
};
</script>
<template>
  <v-container class="pa-5 ma-0">
    <h2>Cart (2 items)</h2>
    <v-card class="d-flex justify-space-between pa-4 my-4 mb-7 rounded-xl" >
      <div class="w-33 rounded-lg blueShoe mr-3 d-flex align-center">
        <img :src="blueShoe" alt="blueShoe" />
      </div>
      <div class="w-66">
        <h2 class="product_name w-45 py-2">Unisex for women, for the men</h2>
        <p class="product_price">N5,000</p>
        <v-container class="d-flex justify-space-between align-center pa-0">
          <p class="product_desc">Blue 42</p>
          <div class="d-flex align-center ">
            <button class="rounded px-3 py-2">+</button>
            <p class="mx-2">2</p>
            <button class="rounded px-3 py-2">-</button>
          </div>
        </v-container>
      </div>
    </v-card>
    <v-card class="d-flex justify-space-between pa-4 my-4 mb-7 rounded-xl">
      <div class="w-33 rounded-lg blueShoe mr-3 d-flex align-center">
        <img :src="blueShoe" alt="blueShoe" />
      </div>
      <div class=" w-66">
        <h2 class="product_name w-50 py-2">Unisex for women, for the men</h2>
        <p class="product_price">N5,000</p>
        <div class="d-flex justify-space-between align-center pa-0">
          <p class="product_desc">Blue 42</p>
          <div class=" d-flex align-center">
            <button class="rounded px-3 py-2">+</button>
                  <p class="mx-2">2</p>
            <button class="rounded px-3 py-2">-</button>
          </div>
      
        </div>
        
      </div>
    </v-card>
    
  </v-container>
      <PurpleModal :cart="true" :checkout="false"/>
</template>
<style scoped>
.product_name {
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
}
.product_price {
  font-size: 16px;
  font-weight: 600;
}
.product_desc {
  font-size: 12px;
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
</style>
