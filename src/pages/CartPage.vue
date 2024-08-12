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
    <h2 class="text-16">Cart (2 items)</h2>
    <v-card class="d-flex justify-space-between pa-4 my-4 mb-7 rounded-xl" >
      <div class="w-33 rounded-lg blueShoe mr-3 d-flex align-center">
        <img :src="blueShoe" alt="blueShoe" />
      </div>
      <div class="w-66">
        <h2 class="product_name w-75 py-2 text-14">Unisex for women, for the men</h2>
        <p class="product_price text-16">N5,000</p>
        <v-container class="d-flex justify-space-between align-center pa-0">
          <p class="product_desc text-12">Blue 42</p>
          <div class="d-flex align-center ">
            <button class="rounded px-2 py-1">+</button>
            <p class=" qty px-2 py-1">2</p>
            <button class="rounded px-2 py-1">-</button>
          </div>
        </v-container>
      </div>
    </v-card>
    <v-card class="d-flex justify-space-between pa-4 my-4 mb-7 rounded-xl">
      <div class="w-33 rounded-lg blueShoe mr-3 d-flex align-center">
        <img :src="blueShoe" alt="blueShoe" />
      </div>
      <div class=" w-66">
        <h2 class="product_name w-75 py-2 text-14">Unisex for women, for the men</h2>
        <p class="product_price text-16">N5,000</p>
        <div class="d-flex justify-space-between align-center pa-0">
          <p class="product_desc text-12">Blue 42</p>
          <div class=" d-flex align-center">
            <button class="rounded px-2 py-1">+</button>
                  <p class=" qty px-2 py-1">2</p>
            <button class="rounded px-2 py-1">-</button>
          </div>
      
        </div>
        
      </div>
    </v-card>
    
  </v-container>
 <div class="position-fixed bottom-0 w-100 ">
       <PurpleModal :cart="true" :checkout="false"/>
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
.qty{
  background: #E0E0E0;
}
</style>
