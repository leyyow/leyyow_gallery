<script>
import Menu from "@/assets/menu.svg";
import lpHero from "@/assets/lpHero.svg";
import instagram from "@/assets/instagram.svg";
import twitter from "@/assets/twitter.svg";
import facebook from "@/assets/facebook.svg";
import brownShoe from "@/assets/brownShoe.svg";
import blueShoe from "@/assets/blueShoe.svg";
import MenuBar from "@/components/MenuBar.vue";

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
};
</script>
<template>
  <div class="d-flex my-4 mx-6 justify-space-between">
    <h1>Logo</h1>
    <MenuBar :menuItems="menuItems" :socialIcons="socialIcons" />
  </div>
  <div class="d-flex justify-center align-center flex-column h-50">
    <h1 class="header text-center text-48">Best Selling Products</h1>
    <button class="text-white sn_btn px-6 py-4 text-16 rounded-lg my-7">
      SHOP NOW
    </button>
  </div>
  <div>
    <h2 class="my-4 mx-6 text-16">Who are we?</h2>
    <p class="mx-6 my-4 text-12 long_text">
      Smiley Socks Company was started on the belief that good socks can inspire
      confidence and happiness. We believe that a pair of socks can change you,
      pulling on a great pair of socks has the power to transform not just your
      style, but your state of mind. Smiley Socks Company was created in 2019 to
      help everyone embrace their personality and be inspired to be the best
      version of themselves. Now that you’ve read about us, how would you feel
      like wearing the coolest socks around?
    </p>
    <div class="d-flex justify-center align-center my-4">
      <img :src="lpHero" alt="lp hero" class="hero" />
    </div>
  </div>
  <div class="mx-6">
    <h3 class="text-16 header_h3">Top Product</h3>
    <div class="grid_container">
      <img :src="blueShoe" alt="blueShoe" class="img_content" />
      <img :src="brownShoe" alt="brownShoe" class="img_content" />
      <img :src="blueShoe" alt="blueShoe" class="img_content" />
      <img :src="brownShoe" alt="brownShoe" class="img_content" />
      <img :src="blueShoe" alt="blueShoe" class="img_content" />
      <img :src="brownShoe" alt="brownShoe" class="img_content" />
    </div>
  </div>
  <div>
    <h2 class="mx-6 mt-14 w-66 text-16">What our customer are saying</h2>
    <div class="mx-6 my-4 pa-4 testimonial_card">
      <p class="text-12 long_text">
        This set of underwear I got from akanbinigeria is so nice and
        comfortable. I like how they put a touch of perfection in their product.
        Beautiful
      </p>
      <p class="mt-2 text-black text-12">@Temitope</p>
    </div>
    <div class="d-flex justify-space-evenly footer mt-14 pa-4 text-white">
      <ul class="">
        <li class="text-14">FAQ</li>
        <li class="text-14">Contact us</li>
      </ul>
      <ul>
        <li class="text-14">Shop</li>
        <li class="text-14">Terms and conditions</li>
      </ul>
      <ul class="footer_icons d-flex justify-space-between">
        <li><img :src="instagram" alt="instagram" /></li>
        <li><img :src="twitter" alt="twitter" /></li>
        <li><img :src="facebook" alt="facebook" /></li>
      </ul>
    </div>
  </div>
</template>
<style>
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
}
.testimonial_card {
  border-right: 3px solid #00d289;
  border-bottom: 3px solid #00d289;
  border-radius: 25px;
}
.p {
  color: #525151;
}
ul {
  width: 30%;
}
li {
  list-style: none;
  padding: 4px;
}
.footer_icons {
  width: 30%;
}
.footer {
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: #4f35c6;
}
</style>
