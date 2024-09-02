<script>
import ProductItem from "@/components/ProductItem.vue";
import blueShoe from "@/assets/blueShoe.svg";
import blackShoe from "@/assets/blackShoe.png";
import whiteShoe from "@/assets/newShoe.png";
import brownShoe from "@/assets/brownShoe.svg";
import shop from "@/assets/shop.svg";
import cart from "@/assets/cart.svg";

export default {
  props: ['index'],
  name: "ProductList",
  components: {
    ProductItem,
  },
  data() {
    return {
      shop,
      cart,
      Products: [
        { img: brownShoe, name: "Brown Shoes", price: 6000 },
        { img: whiteShoe, name: "White Shoes", price: 6000 },
        { img: blackShoe, name: "Black Shoes", price: 6000 },
        { img: blueShoe, name: "Blue Shoes", price: 6000 },
        { img: brownShoe, name: "Brown Shoes", price: 6000 },
        { img: whiteShoe, name: "White Shoes", price: 6000 },
        { img: blackShoe, name: "Black Shoes", price: 6000 },
        { img: blueShoe, name: "Blue Shoes", price: 6000 },
        { img: brownShoe, name: "Brown Shoes", price: 6000 },
        { img: whiteShoe, name: "White Shoes", price: 6000 },
        { img: blackShoe, name: "Black Shoes", price: 6000 },
        { img: blueShoe, name: "Blue Shoes", price: 6000 },
      ],
    };
  },
  mounted() {
    this.scrollToImage(this.index);
  },
  methods: {
  
    scrollToImage(index) {
      this.$nextTick(() => {
        const element = this.$refs["image" + index];
        if (element && element[0]) {
          element[0].scrollIntoView({ behavior: "smooth" });
        }
      });
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
          class="position-absolute text-10 top-0 right-0 cart_counter translate-middle rounded bg-white"
        >
          3
        </p>
      </div>
    </div>
  </div>
  <div
    v-for="(image, index) in Products"
    :key="index"
    class="product-container"
  >
    <ProductItem :image="image.img" :name="image.name" :ref="'image' + index" />
  </div>
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
.product-container {
  margin-bottom: 20px;
}
</style>
