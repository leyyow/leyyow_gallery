<template>
  <div class="navbar">
    <div>
      <img :src="shop" alt="" class="shop icon" />
    </div>
    <div>
      <img :src="cart" alt="" class="shop icon" />
    </div>
    <div>
      <img :src="cart" alt="" class="shop icon" />
    </div>
  </div>
</template>

<script>
import cart from "@/assets/cart.svg"
import shop from "@/assets/shop.svg"

export default {

  data() {
    return {
      cart,
      shop,
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    goToHome() {
      this.$router.push({ name: "/" });
    },

  goToShop() {
    this.$router.push({ name: "/ProductGrid" });
  },
       goToCart() {
      this.$router.push({ name: "/CartPage" });
    },
      navigateTo(route) {
    this.$router.push(route);
  },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  z-index: 200;
  width: 100%;
  background: #333;
}
img {
  padding: 7px 0 2px;
}
</style>
