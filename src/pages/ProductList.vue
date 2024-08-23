<script>
import ProductItem from "@/components/ProductItem.vue";
import blueShoe from "@/assets/blueShoe.svg";
import newShoe from "@/assets/newShoe.png";
import blackShoe from "@/assets/blackShoe.png";
import shop from "@/assets/shop.svg";
import cart from "@/assets/cart.svg";
export default {
  components: {
    ProductItem,
  },
  data() {
    return {
      blueShoe,
      newShoe,
      blackShoe,
      shop,
      cart,
    };
  },
  methods: {
    goToGrid() {
      this.$router.push("/ProductGrid");
    },
  },
};
</script>
<template>
  <div class="header">
    <div class="d-flex rounded-lg pa-2 ma-6 mb-0 w-25 justify-space-between">
      <img :src="shop" alt="" class="shop icon" @click="goToGrid()" />
      <div class="position-relative d-flex w-30">
        <img :src="cart" alt="shopping cart icon" class="hut" />
        <p
          class="position-absolute text-10 top-0 right-0 cart_counter translate-middle rounded bg-white">
          3
        </p>
      </div>
    </div>
  </div>
  <ProductItem :image="blueShoe" :name="'Blue shoes'" />
  <ProductItem :image="newShoe" :name="'White shoes'" />
  <ProductItem :image="blackShoe" :name="' Black Shoes'" />
</template>
<style scoped>
.header {
  display: flex;
  justify-content: end;
}
.header > div {
  background: linear-gradient(to right, #5f40ee, #943fed);
  color: white;
}
.cart_counter {
  width: 12px;
  height: 15px;
  border-radius: 3px;
  padding: 0px 3px;
  color: orange;
}
</style>
