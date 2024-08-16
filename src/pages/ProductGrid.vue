<script >
import ProductItem from '@/components/ProductItem.vue';
import blueShoe from "@/assets/blueShoe.svg";
import newShoe from "@/assets/newShoe.png";
import blackShoe from "@/assets/blackShoe.png";
import shop from "@/assets/shop.svg";
import cart from "@/assets/cart.svg"
export default {
    components: {
    ProductItem
  },
  data() {
    return {
      blueShoe,
      newShoe,
      blackShoe,
      shop,
      cart
    }
  }

}
</script>
<template>
  <div class="header ">
  <div class="d-flex  rounded-lg pa-2 ma-6 mb-0">
      <img :src="shop" alt="" class="shop icon">
           <img :src="cart" alt="shopping cart icon" class="hut ml-8 ">
  </div>
  </div>
<ProductItem :image="blueShoe" :name="'Blue shoes'"/>
<ProductItem :image="newShoe" :name="'White shoes'"/>
<ProductItem :image="blackShoe" :name="' Black Shoes'"/>
</template>
<style scoped>
.header{
  display: flex;
  justify-content: end;

}
.header > div{
  background: linear-gradient(to right, #5f40ee, #943fed);
  color: white;
 
}
</style>
