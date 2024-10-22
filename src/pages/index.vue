<script>
import Menu from "@/assets/menu.svg";
import lpHero from "@/assets/lpHero.svg";
import instagram from "@/assets/instagram.svg";
import twitter from "@/assets/twitter.svg";
import facebook from "@/assets/facebook.svg";
import brownShoe from "@/assets/brownShoe.svg";
import blueShoe from "@/assets/blueShoe.svg";
import MenuBar from "@/components/MenuBar.vue";

import { fetchProducts } from "@/services/apiServices"

export default {
  components: {
    MenuBar,
  },
  data() {
    return {
      Menu,
      lpHero,
      instagram,
      twitter,
      facebook,
      brownShoe,
      blueShoe,
      menuItems: [
        { name: "Home", link: "#" },
        { name: "About us", link: "#" },
        { name: "Testimonial", link: "#" },
        { name: "Shop", link: "#" },
        { name: "Return Policy", link: "#" },
        { name: "FAQ", link: "#" },
      ],
      socialIcons: [
        { platform: "Instagram", link: "#", iconClass: "fab fa-instagram" },
        { platform: "Twitter", link: "#", iconClass: "fab fa-twitter" },
        { platform: "Facebook", link: "#", iconClass: "fab fa-facebook-f" },
      ],
    };
  },
  methods: {
    goToShop() {
      this.$router.push({ name: "/ProductGrid" });
    },
  },
  mounted() {
    fetchProducts('handm').then(res => {
      console.log(res)
    })
  }
};
</script>
<template>
  <div class="d-flex my-1 mx-2 justify-space-between">
    <MenuBar :menuItems="menuItems" :socialIcons="socialIcons" />
  </div>
  <div
    class="d-flex justify-center align-center flex-column text-white hero_main"
    style="height: 100vh"
  >
    <button
      class="text-white text-uppercase font-weight-bold sn_btn px-6 py-4 text-16 rounded-lg my-7"
      @click="goToShop"
    >
      Enter shop
    </button>
  </div>
  <div class="my-14">
    <h2 class="my-4 mx-6 text-24 font-weight-black ">Who are we?</h2>
    <p class="mx-6 my-4 text-16 long_text mb-7" >
      Smiley Socks Company was started on the belief that good socks can inspire
      confidence and happiness. We believe that a pair of socks can change you,
      pulling on a great pair of socks has the power to transform not just your
      style, but your state of mind. Smiley Socks Company was created in 2019 to
      help everyone embrace their personality and be inspired to be the best
      version of themselves. Now that you’ve read about us, how would you feel
      like wearing the coolest socks around?
    </p>
    <div class="d-flex justify-center align-center my-4 w-100">
      <img :src="lpHero" alt="lp hero" class="hero w-90" />
    </div>
  </div>
  <div class="mx-6 hide">
    <h3 class="text-22 header_h3">Best Sellers</h3>
    <div class="grid_container">    
      <img :src="blueShoe" alt="blueShoe" class="img_content" />
      <img :src="brownShoe" alt="brownShoe" class="img_content" />
      <img :src="blueShoe" alt="blueShoe" class="img_content" />
      <img :src="brownShoe" alt="brownShoe" class="img_content" />
      <img :src="blueShoe" alt="blueShoe" class="img_content" />
      <img :src="brownShoe" alt="brownShoe" class="img_content" />
    </div>
  </div>
  <div class="hide">
    <h2 class="mx-6 mt-14 w-66 text-22 header_3  ">What our customers <br/> are saying</h2>
    <div class="mx-6 my-4 pa-4 testimonial_card">
      <p class="text-12 long_text">
        This pair of Nike I got from Feetme is so nice and   
        comfortable. I like how they put a touch of perfection in packaging.
        Beautiful
      </p>
      <p class="mt-2 text-black text-12">@Temitope</p>
    </div>
    <div class="d-flex justify-space-between footer mt-14 pa-4 text-white">
      <ul class="">
        <li class="text-16">FAQ</li>
        <li class="text-16">Contact us</li>
      </ul>
      <ul>
        <li class="text-16">Shop</li>
        <li class="text-16">Terms and <br/> conditions</li>
      </ul>
      <ul class="footer_icons d-flex justify-space-between">
        <li><img :src="instagram" alt="instagram" class="footer_img"/></li>
        <li><img :src="twitter" alt="twitter" class="footer_img"/></li>
        <li><img :src="facebook" alt="facebook" class="footer_img"/></li>
      </ul>
    </div>
  </div>
</template>
<style> 
.hero_main {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(@/assets/shoe.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-blend-mode: darken;
}
.hero {
  border-right: 2px solid yellow;
  border-bottom: 2px solid yellow;
  border-radius: 25px;
} 
.sn_btn {
  background: linear-gradient(to right, #6d40ee, #933fed);
}
.grid_container {
  display: grid;
  grid-template-columns: auto auto auto;
} 
.img_content {
  background-color: #bee4d7;
  width: 90%;
  border-radius: 5px;
  padding: 5px;
  margin: 4px;
}
.header_h3 {
  margin-top: 56px;
  margin-bottom: 24px;
  font-weight: bold;
}
.testimonial_card {
  border-right: 3px solid #00d289;
  border-bottom: 3px solid #00d289;
  border-radius: 25px;
  background-color: #fcfcfc;
}
.p{
  color: #525151;
}
.long_text{
  color: #4b5563;
}
footer ul {
  width: 30%;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
  padding: 4px;
}
.footer_icons {
    width: 30%;
}
.footer_img{
  width: 25px;
  height: 25px;
  margin-right: 5px;
}
.footer { 
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: #4f35c6;
}
</style>